var SpacecraftWars;
(function (SpacecraftWars) {
    var PowerUpsSpawner = /** @class */ (function () {
        function PowerUpsSpawner(game, difficultyManager, obstacleSpawner, group) {
            this.game = game;
            this.difficultyManager = difficultyManager;
            this.obstacleSpawner = obstacleSpawner;
            this.powerUps = group;
            this.powerUpSpawnTime = this.game.time.now + (this.difficultyManager.obstacleInterval / 2);
        }
        PowerUpsSpawner.prototype.update = function (y) {
            if (this.game.time.now >= this.powerUpSpawnTime) {
                this.spawnPowerUp(-y);
                this.powerUpSpawnTime = this.obstacleSpawner.obstaclesSpawnTime + this.difficultyManager.obstacleInterval / 2;
            }
        };
        PowerUpsSpawner.prototype.spawnPowerUp = function (y) {
            var spawnChance = this.game.rnd.integerInRange(1, 10);
            if (spawnChance <= 4) {
                var randomX = this.game.rnd.integerInRange(SpacecraftWars.GOUtil.POWER_UP_X_OFFSET, this.game.width - SpacecraftWars.GOUtil.POWER_UP_X_OFFSET);
                var powerUp = this.powerUps.getFirstExists(false);
                if (powerUp) {
                    this.game.physics.arcade.enable(powerUp);
                    powerUp.body.offset.setTo(0, 4 + this.difficultyManager.obstacleSpeed);
                    powerUp.body.enable = true;
                    powerUp.reset(randomX, y);
                }
            }
        };
        return PowerUpsSpawner;
    }());
    SpacecraftWars.PowerUpsSpawner = PowerUpsSpawner;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=PowerUpsSpawner.js.map