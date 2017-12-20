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
    var MenuState = /** @class */ (function (_super) {
        __extends(MenuState, _super);
        function MenuState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuState.prototype.create = function () {
            //background
            this.game.add.sprite(0, 0, SpacecraftWars.GOUtil.MENU_BACKGROUND_KEY);
            //UI
            var playButton = this.game.add.button(this.game.width * 0.5, this.game.height * 0.5, SpacecraftWars.GOUtil.MENU_PLAY_BUTTON_KEY, this.playGame, this);
            playButton.anchor.set(0.5);
            var quitButton = this.game.add.button(this.game.width * 0.5, this.game.height * 0.7, SpacecraftWars.GOUtil.MENU_QUIT_BUTTON_KEY, this.quitButton, this);
            quitButton.anchor.set(0.5);
        };
        MenuState.prototype.playGame = function () {
            this.game.state.start(SpacecraftWars.GOUtil.GAME_STATE);
        };
        MenuState.prototype.quitButton = function () {
            this.game.destroy();
        };
        return MenuState;
    }(Phaser.State));
    SpacecraftWars.MenuState = MenuState;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=MenuState.js.map