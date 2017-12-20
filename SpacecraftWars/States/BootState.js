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
    var BootState = /** @class */ (function (_super) {
        __extends(BootState, _super);
        function BootState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BootState.prototype.preload = function () {
            this.game.load.image(SpacecraftWars.GOUtil.BOOT_BACKGROUND_KEY, "/Assets/Graphics/boot_background.png");
            this.game.load.image(SpacecraftWars.GOUtil.BOOT_IMAGE_KEY, "/Assets/Graphics/boot_image.png");
            this.game.load.audio(SpacecraftWars.GOUtil.BOOT_AUDIO_KEY, ["/Assets/Audio/boot_audio.wav", "/Assets/Audio/boot_audio.mp3", "/Assets/Audio/boot_audio.ogg"]);
        };
        BootState.prototype.create = function () {
            var _this = this;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //background
            this.game.add.image(0, 0, SpacecraftWars.GOUtil.BOOT_BACKGROUND_KEY);
            //splash screen
            this.bootImage = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, SpacecraftWars.GOUtil.BOOT_IMAGE_KEY);
            this.bootImage.anchor.set(0.5, 0.5);
            this.bootImage.alpha = 0.1;
            var fade = this.game.add.tween(this.bootImage);
            fade.to({ alpha: 1 }, 2600, Phaser.Easing.Linear.None, true, 0, 0, true);
            fade.onComplete.add(function () { _this.game.state.start(SpacecraftWars.GOUtil.PRELOAD_STATE); }, this);
            //audio
            this.bootAudio = this.game.add.audio(SpacecraftWars.GOUtil.BOOT_AUDIO_KEY);
            this.bootAudio.volume = 0.5;
            this.bootAudio.play();
        };
        return BootState;
    }(Phaser.State));
    SpacecraftWars.BootState = BootState;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=BootState.js.map