var SpacecraftWars;
(function (SpacecraftWars) {
    var DifficultyType;
    (function (DifficultyType) {
        DifficultyType[DifficultyType["EASY"] = 0] = "EASY";
        DifficultyType[DifficultyType["MEDIUM"] = 1] = "MEDIUM";
        DifficultyType[DifficultyType["HARD"] = 2] = "HARD";
    })(DifficultyType = SpacecraftWars.DifficultyType || (SpacecraftWars.DifficultyType = {}));
    ;
    var DifficultyManager = /** @class */ (function () {
        function DifficultyManager(game) {
            this.game = game;
            this.updateDifficulty(DifficultyType.EASY);
            this.generateDifficultyButtons();
        }
        DifficultyManager.prototype.generateDifficultyButtons = function () {
            var _this = this;
            this.easyButton = this.game.add.button(this.game.width - (3 * 64), this.game.height, SpacecraftWars.GOUtil.GAME_EASY_BUTTON_KEY, function () { _this.updateDifficulty(DifficultyType.EASY); }, this);
            this.easyButton.anchor.set(0, 1);
            this.easyButton.alpha = 0.8;
            this.mediumButton = this.game.add.button(this.game.width - (2 * 64), this.game.height, SpacecraftWars.GOUtil.GAME_MEDIUM_BUTTON_KEY, function () { _this.updateDifficulty(DifficultyType.MEDIUM); }, this);
            this.mediumButton.anchor.set(0, 1);
            this.mediumButton.alpha = 0.8;
            this.hardButton = this.game.add.button(this.game.width - 64, this.game.height, SpacecraftWars.GOUtil.GAME_HARD_BUTTON_KEY, function () { _this.updateDifficulty(DifficultyType.HARD); }, this);
            this.hardButton.anchor.set(0, 1);
            this.hardButton.alpha = 0.8;
        };
        DifficultyManager.prototype.updateDifficulty = function (diff) {
            this.currentDifficulty = diff;
            switch (this.currentDifficulty) {
                case DifficultyType.EASY:
                    this.obstacleSpeed = SpacecraftWars.GOUtil.OBSTACLE_SPEED_EASY;
                    break;
                case DifficultyType.MEDIUM:
                    this.obstacleSpeed = SpacecraftWars.GOUtil.OBSTACLE_SPEED_MEDIUM;
                    break;
                case DifficultyType.HARD:
                    this.obstacleSpeed = SpacecraftWars.GOUtil.OBSTACLE_SPEED_HARD;
                    break;
            }
            this.setObstaclePoints();
            this.setObstacleInterval();
            this.powerUpInterval = this.obstacleInterval / 2;
        };
        DifficultyManager.prototype.setObstaclePoints = function () {
            switch (this.currentDifficulty) {
                case DifficultyType.EASY:
                    this.obstaclePoints = SpacecraftWars.GOUtil.OBSTACLE_POINTS_EASY;
                    break;
                case DifficultyType.MEDIUM:
                    this.obstaclePoints = SpacecraftWars.GOUtil.OBSTACLE_POINTS_MEDIUM;
                    break;
                case DifficultyType.HARD:
                    this.obstaclePoints = SpacecraftWars.GOUtil.OBSTACLE_POINTS_HARD;
                    break;
            }
        };
        DifficultyManager.prototype.setObstacleInterval = function () {
            switch (this.currentDifficulty) {
                case DifficultyType.EASY:
                    this.obstacleInterval = SpacecraftWars.GOUtil.OBSTACLE_INTERVAL_EASY;
                    break;
                case DifficultyType.MEDIUM:
                    this.obstacleInterval = SpacecraftWars.GOUtil.OBSTACLE_INTERVAL_MEDIUM;
                    break;
                case DifficultyType.HARD:
                    this.obstacleInterval = SpacecraftWars.GOUtil.OBSTACLE_INTERVAL_HARD;
                    break;
            }
        };
        return DifficultyManager;
    }());
    SpacecraftWars.DifficultyManager = DifficultyManager;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=DifficultyManager.js.map