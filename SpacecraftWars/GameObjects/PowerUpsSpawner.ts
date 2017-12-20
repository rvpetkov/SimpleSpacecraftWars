module SpacecraftWars {
    export class PowerUpsSpawner {
        game: Phaser.Game;
        difficultyManager: DifficultyManager;
        obstacleSpawner: ObstacleSpawner;
        powerUps: Phaser.Group;
        powerUpSpawnTime: number;

        constructor(game: Phaser.Game, difficultyManager: DifficultyManager, obstacleSpawner: ObstacleSpawner, group: Phaser.Group) {
            this.game = game;
            this.difficultyManager = difficultyManager;
            this.obstacleSpawner = obstacleSpawner;
            this.powerUps = group;
            this.powerUpSpawnTime = this.game.time.now + (this.difficultyManager.obstacleInterval / 2);
        }

        update(y: number) {
            if (this.game.time.now >= this.powerUpSpawnTime) {
                this.spawnPowerUp(-y);
                this.powerUpSpawnTime = this.obstacleSpawner.obstaclesSpawnTime + this.difficultyManager.obstacleInterval / 2;
            }
        }

        spawnPowerUp(y: number) {
            var spawnChance = this.game.rnd.integerInRange(1, 10);

            if (spawnChance <= 4) {
                var randomX = this.game.rnd.integerInRange(GOUtil.POWER_UP_X_OFFSET, this.game.width - GOUtil.POWER_UP_X_OFFSET);

                var powerUp = this.powerUps.getFirstExists(false);
                if (powerUp) {
                    this.game.physics.arcade.enable(powerUp);
                    powerUp.body.offset.setTo(0, 4 + this.difficultyManager.obstacleSpeed);
                    powerUp.body.enable = true;
                    powerUp.reset(randomX, y);
                }
            }
        }
    }
}
