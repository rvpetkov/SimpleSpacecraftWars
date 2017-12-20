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
    var PreloadState = /** @class */ (function (_super) {
        __extends(PreloadState, _super);
        function PreloadState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PreloadState.prototype.preload = function () {
            //preload state
            this.game.load.image(SpacecraftWars.GOUtil.PRELOAD_BACKGROUND_KEY, "/Assets/Graphics/preload_background.png");
            //menu state
            this.game.load.image(SpacecraftWars.GOUtil.MENU_BACKGROUND_KEY, "/Assets/Graphics/menu_background.png");
            this.game.load.image(SpacecraftWars.GOUtil.MENU_PLAY_BUTTON_KEY, "/Assets/UI/menu_play_button.png");
            this.game.load.image(SpacecraftWars.GOUtil.MENU_QUIT_BUTTON_KEY, "/Assets/UI/menu_quit_button.png");
            //game state
            this.game.load.image(SpacecraftWars.GOUtil.GAME_BACKGROUND_KEY, "/Assets/Graphics/game_background.png");
            this.game.load.image(SpacecraftWars.GOUtil.SPACECRAFT_KEY, "/Assets/Graphics/spacecraft.png");
            this.game.load.image(SpacecraftWars.GOUtil.OBSTACLE_KEY, "/Assets/Graphics/obstacle.png");
            this.game.load.image(SpacecraftWars.GOUtil.BULLET_KEY, "/Assets/Graphics/bullet.png");
            this.game.load.image(SpacecraftWars.GOUtil.POWER_UP_BULLET, "/Assets/Graphics/powerUp_bullet.png");
            this.game.load.image(SpacecraftWars.GOUtil.GAME_EASY_BUTTON_KEY, "/Assets/UI/easy_button.png");
            this.game.load.image(SpacecraftWars.GOUtil.GAME_MEDIUM_BUTTON_KEY, "/Assets/UI/medium_button.png");
            this.game.load.image(SpacecraftWars.GOUtil.GAME_HARD_BUTTON_KEY, "/Assets/UI/hard_button.png");
            this.game.load.audio(SpacecraftWars.GOUtil.GAME_AUDIO_KEY, ["/Assets/Audio/game_audio.wav", "/Assets/Audio/game_audio.mp3", "/Assets/Audio/game_audio.ogg"]);
            this.game.load.audio(SpacecraftWars.GOUtil.BULLET_AUDIO_KEY, ["/Assets/Audio/bullet_audio.wav", "/Assets/Audio/bullet_audio.mp3", "/Assets/Audio/bullet_audio.ogg"]);
            this.game.load.audio(SpacecraftWars.GOUtil.POWERUP_AUDIO_KEY, ["/Assets/Audio/powerup_audio.wav", "/Assets/Audio/powerup_audio.mp3", "/Assets/Audio/powerup_audio.ogg"]);
            this.game.load.audio(SpacecraftWars.GOUtil.EXPLOSION_AUDIO_KEY, ["/Assets/Audio/explosion_audio.wav", "/Assets/Audio/explosion_audio.mp3", "/Assets/Audio/explosion_audio.ogg"]);
            //game over state
            this.game.load.image(SpacecraftWars.GOUtil.GAME_OVER_BACKGROUND_KEY, "/Assets/Graphics/gameover_background.png");
            this.game.load.image(SpacecraftWars.GOUtil.GAME_OVER_PLAY_AGAIN_BUTTON_KEY, "/Assets/UI/playagain_button.png");
        };
        PreloadState.prototype.create = function () {
            var _this = this;
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            //background
            this.game.add.sprite(0, 0, SpacecraftWars.GOUtil.PRELOAD_BACKGROUND_KEY);
            //UI
            var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
            var loadingText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.7, "LOADING..", style);
            loadingText.anchor.set(0.5, 0.5);
            //fake loading
            this.game.time.events.add(2000, function () {
                _this.game.state.start(SpacecraftWars.GOUtil.MENU_STATE);
            });
            //actual loading
            //this.game.load.onLoadComplete.add(() => {
            //    this.game.state.start(GOUtil.MENU_STATE);
            //});
        };
        return PreloadState;
    }(Phaser.State));
    SpacecraftWars.PreloadState = PreloadState;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=PreloadState.js.map