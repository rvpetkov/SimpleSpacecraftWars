module SpacecraftWars {
    export class GameState extends Phaser.State {
        game: Phaser.Game;
        difficultyManager: DifficultyManager;
        backgroundImage: Phaser.TileSprite;
        obstacleSpawner: ObstacleSpawner;
        powerUpsSpawner: PowerUpsSpawner;
        player: Player;
        score: number;
        bulletsRemaining: number;
        currentY: number;

        //audio
        gameAudio: Phaser.Sound;
        powerUpAudio: Phaser.Sound;
        explosionAudio: Phaser.Sound;

        //groups
        UIGroup: Phaser.Group;
        bullets: Phaser.Group;
        obstacles: Phaser.Group;
        powerUps: Phaser.Group;

        //UI elements
        scoreText: Phaser.Text;
        bulletsRemainingText: Phaser.Text;

        create() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            
            this.difficultyManager = new DifficultyManager(this.game);
            this.score = 0;
            this.bulletsRemaining = 3;
            this.currentY = 0;

            //background
            this.backgroundImage = this.add.tileSprite(0, 0, this.game.width, this.game.height, GOUtil.GAME_BACKGROUND_KEY);

            //audio
            this.gameAudio = this.add.audio(GOUtil.GAME_AUDIO_KEY);
            this.gameAudio.play("", 0, 0.5, true);
            this.powerUpAudio = this.add.audio(GOUtil.POWERUP_AUDIO_KEY);
            this.explosionAudio = this.add.audio(GOUtil.EXPLOSION_AUDIO_KEY);

            //bullet group
            this.bullets = this.game.add.group();
            this.bullets.enableBody = true;
            this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
            this.bullets.createMultiple(5, GOUtil.BULLET_KEY);
            this.bullets.setAll('anchor.x', 0.5);
            this.bullets.setAll('anchor.y', 1);
            this.bullets.setAll('outOfBoundsKill', true);
            this.bullets.setAll('checkWorldBounds', true);

            //player
            this.player = new Player(
                this.game,
                this.game.width * 0.5,
                this.game.height - ((this.game.cache.getImage(GOUtil.SPACECRAFT_KEY).height / 2)),
                this.bullets,
                this.bulletsRemaining,
                this);
            this.game.physics.arcade.enable(this.player);
            this.player.anchor.set(0.5, 1);
            this.player.body.height -= 20;
            this.player.body.offset.setTo(0, 4 + 10);  
            this.game.add.existing(this.player);

            //obstacles
            this.obstacles = this.game.add.group();
            this.obstacles.enableBody = true;
            this.obstacles.physicsBodyType = Phaser.Physics.ARCADE;
            this.obstacles.createMultiple(160, GOUtil.OBSTACLE_KEY);
            this.obstacles.setAll('anchor.x', 0);
            this.obstacles.setAll('anchor.y', 1);
            this.obstacles.setAll('outOfBoundsKill', true);
            this.obstacles.setAll('checkWorldBounds', true);

            this.obstacleSpawner = new ObstacleSpawner(this.game, this.difficultyManager, this.obstacles, this);

            //powerUps
            this.powerUps = this.game.add.group();
            this.powerUps.enableBody = true;
            this.powerUps.physicsBodyType = Phaser.Physics.ARCADE;
            this.powerUps.createMultiple(3, GOUtil.POWER_UP_BULLET);
            this.powerUps.setAll('anchor.x', 0);
            this.powerUps.setAll('anchor.y', 1);
            this.powerUps.setAll('outOfBoundsKill', true);
            this.powerUps.setAll('checkWorldBounds', true);

            this.powerUpsSpawner = new PowerUpsSpawner(this.game, this.difficultyManager, this.obstacleSpawner, this.powerUps);

            //UI
            var style = { font: '34px Arial', fill: '#fff' };
            this.scoreText = this.game.add.text(this.game.width - 250, 10, "Score: " + this.score, style);
            this.bulletsRemainingText = this.game.add.text(10, 10, "Bullets: " + this.bulletsRemaining, style);

            this.UIGroup = this.game.add.group();
            this.UIGroup.addMultiple([
                this.scoreText, this.bulletsRemainingText, this.difficultyManager.easyButton,
                this.difficultyManager.mediumButton, this.difficultyManager.hardButton
            ]);
            this.game.world.bringToTop(this.UIGroup);
        }

        //render() {
        //    this.game.debug.body(this.player, 'green', false);
        //}

        update() {
            //background/obstacles movement
            this.backgroundImage.tilePosition.y += this.difficultyManager.obstacleSpeed / 2;
            this.obstacles.y += this.difficultyManager.obstacleSpeed;
            this.powerUps.y += this.difficultyManager.obstacleSpeed;
            this.currentY += this.difficultyManager.obstacleSpeed;

            //obstacle generation
            this.obstacleSpawner.update(this.currentY);

            //powerUp generation
            this.powerUpsSpawner.update(this.currentY);

            //Check for collisions
            this.game.physics.arcade.collide(this.bullets, this.obstacleSpawner.obstacles, this.bulletCollisionHandler, null, this);
            this.game.physics.arcade.collide(this.powerUps.children, this.player, this.powerUpsCollisionHandler, null, this);
            this.game.physics.arcade.collide(this.player, this.obstacles, this.playerCollisionHandler, null, this);
        }

        //****************  collision handlers  ****************

        bulletCollisionHandler(bullet, obstacle) {
            var closestObstacle1 = this.obstacles.getClosestTo(obstacle, (child) => { return this.validateClosestObstacle(child, obstacle) });
            if (closestObstacle1)
                this.shootObstacle(closestObstacle1);

            var closestObstacle2 = this.obstacles.getClosestTo(obstacle, (child) => { return this.validateClosestObstacle(child, obstacle) });
            if (closestObstacle2)
                this.shootObstacle(closestObstacle2);

            this.shootObstacle(obstacle);
            bullet.kill();
            this.explosionAudio.play("", 0, 1, false);
            this.increaseScore(50);
        }

        powerUpsCollisionHandler(powerUp, player) {
            this.powerUpAudio.play("", 0, 1, false);

            powerUp.kill();
            this.player.addBullets(1);
        }

        playerCollisionHandler(player, obstacle) {
            obstacle.kill();
            player.kill();

            this.gameOver();
        }

        //****************  helper functions  ****************
        
        increaseScore(points:number) {
            this.score += points;
            this.scoreText.text = "Score: " + this.score;
        }

        updateBulletsRemaining(amount: number) {
            this.bulletsRemaining = amount;
            this.bulletsRemainingText.text = "Bullets: " + this.bulletsRemaining;
        }
        
        validateClosestObstacle(child, obstacle) {
            var xOffset = this.game.cache.getImage(GOUtil.OBSTACLE_KEY).width;
            var res: boolean = child != obstacle &&
                (child.y == obstacle.y) &&
                (child.x <= obstacle.x + xOffset && child.x >= obstacle.x - xOffset);

            return res;
        }

        shootObstacle(obstacle) {
            if (obstacle.events.onOutOfBounds.getNumListeners() > 0) {
                obstacle.alpha = 0;
                obstacle.body.moves = false;
                obstacle.body.enable = false;
                obstacle.y--;       //This modification is made so the obstacle can no longer appear valid after the validateClosestObstacle method used in .getClosesTo()
            } else {
                obstacle.kill();
            }
        }

        gameOver() {
            var bestScore = localStorage.getItem(GOUtil.BEST_SCORE);

            if (bestScore == null) {
                localStorage.setItem(GOUtil.BEST_SCORE, this.score.toString());
                bestScore = this.score.toString();
            } else {
                if (parseInt(bestScore) < this.score) {
                    localStorage.setItem(GOUtil.BEST_SCORE, this.score.toString());
                    bestScore = this.score.toString();
                }
            }

            this.gameAudio.stop();
            this.game.state.start(GOUtil.GAME_OVER_STATE, true, false, this.score, bestScore);
        }
    }
}