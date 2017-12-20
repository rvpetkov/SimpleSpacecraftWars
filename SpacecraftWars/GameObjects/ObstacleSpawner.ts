module SpacecraftWars {
    export class ObstacleSpawner {
        game: Phaser.Game;
        gameContext: GameState;
        obstacles: Phaser.Group;
        obstaclesSpawnTime: number;
        obstaclePoints: number;
        difficultyManager: DifficultyManager;
        obstacleWidth: number;

        constructor(game: Phaser.Game, difficultyManager: DifficultyManager, group: Phaser.Group, gameContext: GameState) {
            this.game = game;
            this.gameContext = gameContext;
            this.obstacles = group;
            this.difficultyManager = difficultyManager;
            this.obstaclesSpawnTime = 0;
            this.obstacleWidth = this.game.cache.getImage(GOUtil.OBSTACLE_KEY).width;
        }

        update(y: number) {
            if (this.game.time.now >= this.obstaclesSpawnTime) {
                this.spawnObstacles(-y);
                this.obstaclesSpawnTime = this.game.time.now + this.difficultyManager.obstacleInterval;
            }
        }

        public spawnObstacles(yOffset: number = 0) {
            var obstacleMinPosition = 1;        //1 because we want to keep the first obstacle in the line
            var obstacleMaxPosition = Math.floor((this.game.width / this.obstacleWidth));
            var setOutOfBoundsOnce = false;
            var randomGapLength = 0;
            var randomGapIndex = 0;

            switch (this.difficultyManager.currentDifficulty) {
                case DifficultyType.EASY:
                    randomGapLength = this.game.rnd.integerInRange(GOUtil.GAPSIZE_MIN_EASY, GOUtil.GAPSIZE_MAX_EASY);
                    randomGapIndex = this.game.rnd.integerInRange(obstacleMinPosition, obstacleMaxPosition - randomGapLength - 1);  //-1 because we want to keep the last obstacle in the line
                    break;
                case DifficultyType.MEDIUM:
                    randomGapLength = this.game.rnd.integerInRange(GOUtil.GAPSIZE_MIN_MEDIUM, GOUtil.GAPSIZE_MIN_EASY);
                    randomGapIndex = this.game.rnd.integerInRange(obstacleMinPosition, obstacleMaxPosition - randomGapLength - 1);
                    break;
                case DifficultyType.HARD:
                    randomGapLength = this.game.rnd.integerInRange(GOUtil.GAPSIZE_MIN_HARD, GOUtil.GAPSIZE_MIN_MEDIUM);
                    randomGapIndex = this.game.rnd.integerInRange(obstacleMinPosition, obstacleMaxPosition - randomGapLength - 1);
                    break;
            }

            for (var x = 0; x < obstacleMaxPosition; x++) {
                if (x >= randomGapIndex && x < randomGapIndex + randomGapLength) {
                    continue;
                }
                var obstacle = this.obstacles.getFirstExists(false);
                if (obstacle) {
                    if (!setOutOfBoundsOnce) {
                        obstacle.events.onOutOfBounds.add((obstacle) => {
                            this.gameContext.increaseScore(this.difficultyManager.obstaclePoints);
                            obstacle.events.onOutOfBounds.removeAll();
                        }, this);
                        setOutOfBoundsOnce = true;
                    }

                    this.game.physics.arcade.enable(obstacle);
                    obstacle.body.offset.setTo(0, 4 + this.difficultyManager.obstacleSpeed);      //Adjustment is needed because of the obsticles motion; adjust the offset based on the obsticle sprite you use
                    obstacle.body.enable = true;
                    obstacle.reset((x * this.obstacleWidth) + (this.obstacleWidth / 2), yOffset);
                    obstacle.alpha = 1;
                }
            }
        }
    }
}
