module SpacecraftWars {
    export class BootState extends Phaser.State {
        bootAudio: Phaser.Sound;
        bootImage: Phaser.Image;

        preload() {
            this.game.load.image(GOUtil.BOOT_BACKGROUND_KEY, "/Assets/Graphics/boot_background.png");
            this.game.load.image(GOUtil.BOOT_IMAGE_KEY, "/Assets/Graphics/boot_image.png");
            this.game.load.audio(GOUtil.BOOT_AUDIO_KEY,
                ["/Assets/Audio/boot_audio.wav", "/Assets/Audio/boot_audio.mp3", "/Assets/Audio/boot_audio.ogg"]);
        }

        create() {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            //background
            this.game.add.image(0, 0, GOUtil.BOOT_BACKGROUND_KEY);

            //splash screen
            this.bootImage = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, GOUtil.BOOT_IMAGE_KEY);
            this.bootImage.anchor.set(0.5, 0.5);
            this.bootImage.alpha = 0.1;
            
            var fade = this.game.add.tween(this.bootImage);
            fade.to({ alpha: 1 }, 2600, Phaser.Easing.Linear.None, true, 0, 0, true);
            fade.onComplete.add(() => { this.game.state.start(GOUtil.PRELOAD_STATE); }, this);

            //audio
            this.bootAudio = this.game.add.audio(GOUtil.BOOT_AUDIO_KEY);
            this.bootAudio.volume = 0.5;
            this.bootAudio.play();
        }
    }
}
