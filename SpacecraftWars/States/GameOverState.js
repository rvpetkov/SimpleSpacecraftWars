var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SpacecraftWars;
(function (SpacecraftWars) {
    var GameOverState = /** @class */ (function (_super) {
        __extends(GameOverState, _super);
        function GameOverState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameOverState.prototype.init = function (currentScore, bestScore) {
            this.currentScore = currentScore;
            this.bestScore = bestScore;
        };
        GameOverState.prototype.create = function () {
            //background
            this.game.add.sprite(0, 0, SpacecraftWars.GOUtil.GAME_OVER_BACKGROUND_KEY);
            //UI
            var playButton = this.game.add.button(this.game.width * 0.65, this.game.height * 0.6, SpacecraftWars.GOUtil.GAME_OVER_PLAY_AGAIN_BUTTON_KEY, this.playGame, this);
            playButton.anchor.set(0.5);
            var quitButton = this.game.add.button(this.game.width * 0.65, this.game.height * 0.8, SpacecraftWars.GOUtil.MENU_QUIT_BUTTON_KEY, this.quitButton, this);
            quitButton.anchor.set(0.5);
            this.currentScoreText = this.game.add.text(35, this.game.height - 300, "Your Score: " + this.currentScore, { font: '52px Arial', fill: '#fff' });
            this.bestScoreText = this.game.add.text(35, this.game.height - 200, "Best Score: " + this.bestScore, { font: '52px Arial', fill: '#fff' });
        };
        GameOverState.prototype.playGame = function () {
            this.game.state.start(SpacecraftWars.GOUtil.GAME_STATE);
        };
        GameOverState.prototype.quitButton = function () {
            this.game.destroy();
        };
        return GameOverState;
    }(Phaser.State));
    SpacecraftWars.GameOverState = GameOverState;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=GameOverState.js.map