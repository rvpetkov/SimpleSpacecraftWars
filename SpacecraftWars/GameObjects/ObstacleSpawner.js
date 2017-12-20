var SpacecraftWars;
(function (SpacecraftWars) {
    var ObstacleSpawner = /** @class */ (function () {
        function ObstacleSpawner(game, difficultyManager, group, gameContext) {
            this.game = game;
            this.gameContext = gameContext;
            this.obstacles = group;
            this.difficultyManager = difficultyManager;
            this.obstaclesSpawnTime = 0;
            this.obstacleWidth = this.game.cache.getImage(SpacecraftWars.GOUtil.OBSTACLE_KEY).width;
        }
        ObstacleSpawner.prototype.update = function (y) {
            if (this.game.time.now >= this.obstaclesSpawnTime) {
                this.spawnObstacles(-y);
                this.obstaclesSpawnTime = this.game.time.now + this.difficultyManager.obstacleInterval;
            }
        };
        ObstacleSpawner.prototype.spawnObstacles = function (yOffset) {
            var _this = this;
            if (yOffset === void 0) { yOffset = 0; }
            var obstacleMinPosition = 1; //1 because we want to keep the first obstacle in the line
            var obstacleMaxPosition = Math.floor((this.game.width / this.obstacleWidth));
            var setOutOfBoundsOnce = false;
            var randomGapLength = 0;
            var randomGapIndex = 0;
            switch (this.difficultyManager.currentDifficulty) {
                case SpacecraftWars.DifficultyType.EASY:
                    randomGapLength = this.game.rnd.integerInRange(SpacecraftWars.GOUtil.GAPSIZE_MIN_EASY, SpacecraftWars.GOUtil.GAPSIZE_MAX_EASY);
                    randomGapIndex = this.game.rnd.integerInRange(obstacleMinPosition, obstacleMaxPosition - randomGapLength - 1); //-1 because we want to keep the last obstacle in the line
                    break;
                case SpacecraftWars.DifficultyType.MEDIUM:
                    randomGapLength = this.game.rnd.integerInRange(SpacecraftWars.GOUtil.GAPSIZE_MIN_MEDIUM, SpacecraftWars.GOUtil.GAPSIZE_MIN_EASY);
                    randomGapIndex = this.game.rnd.integerInRange(obstacleMinPosition, obstacleMaxPosition - randomGapLength - 1);
                    break;
                case SpacecraftWars.DifficultyType.HARD:
                    randomGapLength = this.game.rnd.integerInRange(SpacecraftWars.GOUtil.GAPSIZE_MIN_HARD, SpacecraftWars.GOUtil.GAPSIZE_MIN_MEDIUM);
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
                        obstacle.events.onOutOfBounds.add(function (obstacle) {
                            _this.gameContext.increaseScore(_this.difficultyManager.obstaclePoints);
                            obstacle.events.onOutOfBounds.removeAll();
                        }, this);
                        setOutOfBoundsOnce = true;
                    }
                    this.game.physics.arcade.enable(obstacle);
                    obstacle.body.offset.setTo(0, 4 + this.difficultyManager.obstacleSpeed); //Adjustment is needed because of the obsticles motion; adjust the offset based on the obsticle sprite you use
                    obstacle.body.enable = true;
                    obstacle.reset((x * this.obstacleWidth) + (this.obstacleWidth / 2), yOffset);
                    obstacle.alpha = 1;
                }
            }
        };
        return ObstacleSpawner;
    }());
    SpacecraftWars.ObstacleSpawner = ObstacleSpawner;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=ObstacleSpawner.js.map