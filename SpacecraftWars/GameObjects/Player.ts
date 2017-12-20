module SpacecraftWars {
    export class Player extends Phaser.Sprite {
        game: Phaser.Game;
        gameContext: GameState;
        bulletsRemaining: number;
        bullets: Phaser.Group;
        shootTime: number;
        shootInterval: number; //time between shots
        spacecraftWidth: number;
        bulletAudio: Phaser.Sound;

        leftArrowKey: Phaser.Key;   //move left
        rightArrowKey: Phaser.Key;  //move right
        spaceKey: Phaser.Key;       //shoot

        constructor(game: Phaser.Game, x: number, y: number, group: Phaser.Group, bullets: number, gameContext: GameState) {
            super(game, x, y, GOUtil.SPACECRAFT_KEY);
            this.game = game;
            this.gameContext = gameContext;
            this.bulletsRemaining = bullets;
            this.bullets = group;
            this.shootTime = this.game.time.now;
            this.shootInterval = 200;
            this.spacecraftWidth = this.game.cache.getImage(GOUtil.SPACECRAFT_KEY).width;

            //audio
            this.bulletAudio = this.game.add.audio(GOUtil.BULLET_AUDIO_KEY);

            //Keyboard
            this.leftArrowKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.rightArrowKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.spaceKey.onDown.add(this.shoot, this);
        }

        update() {
            if (this.alive) {
                if ((this.x > 0 + (this.spacecraftWidth / 2)) && (this.leftArrowKey.isDown)) {
                    this.moveLeft();
                }

                if ((this.x < this.game.width - (this.spacecraftWidth / 2)) && (this.rightArrowKey.isDown)) {
                    this.moveRight();
                }
            }
        }
        
        moveLeft() {
            this.x += -GOUtil.PLAYER_MOVEMENT_SPEED * (60 / this.game.time.elapsedMS);
        }

        moveRight() {
            this.x += GOUtil.PLAYER_MOVEMENT_SPEED * (60 / this.game.time.elapsedMS);
        }

        shoot() {
            if ((this.alive) && (this.game.time.now >= this.shootTime) && (this.bulletsRemaining > 0)) {
                var bullet = this.bullets.getFirstExists(false);

                if (bullet) {
                    this.bulletAudio.play("", 0, 0.8, false);

                    this.game.physics.arcade.enable(bullet);
                    bullet.reset(this.x, this.y - 45);
                    bullet.body.velocity.y = -GOUtil.BULLET_VELOCITY;
                    this.bulletsRemaining--;
                    this.gameContext.updateBulletsRemaining(this.bulletsRemaining);
                    this.shootTime = this.game.time.now + this.shootInterval;
                }
            }
        }

        public addBullets(amount: number) {
            if (amount > 0) {
                this.bulletsRemaining += amount;
                this.gameContext.updateBulletsRemaining(this.bulletsRemaining);
            }
        }
    }
}
