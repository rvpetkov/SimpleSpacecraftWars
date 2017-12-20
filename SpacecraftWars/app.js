var SpacecraftWars;
(function (SpacecraftWars_1) {
    var SpacecraftWars = /** @class */ (function () {
        function SpacecraftWars(width, height) {
            this.game = new Phaser.Game(width, height, Phaser.AUTO, 'content', { create: this.create });
        }
        SpacecraftWars.prototype.create = function () {
            this.game.state.add(SpacecraftWars_1.GOUtil.BOOT_STATE, SpacecraftWars_1.BootState);
            this.game.state.add(SpacecraftWars_1.GOUtil.PRELOAD_STATE, SpacecraftWars_1.PreloadState);
            this.game.state.add(SpacecraftWars_1.GOUtil.MENU_STATE, SpacecraftWars_1.MenuState);
            this.game.state.add(SpacecraftWars_1.GOUtil.GAME_STATE, SpacecraftWars_1.GameState);
            this.game.state.add(SpacecraftWars_1.GOUtil.GAME_OVER_STATE, SpacecraftWars_1.GameOverState);
            this.game.state.start(SpacecraftWars_1.GOUtil.BOOT_STATE);
        };
        return SpacecraftWars;
    }());
    SpacecraftWars_1.SpacecraftWars = SpacecraftWars;
})(SpacecraftWars || (SpacecraftWars = {}));
window.onload = function () {
    var game = new SpacecraftWars.SpacecraftWars(1280, 900);
};
//# sourceMappingURL=app.js.map