module SpacecraftWars {
    export class PreloadState extends Phaser.State {
        preload() {
            //preload state
            this.game.load.image(GOUtil.PRELOAD_BACKGROUND_KEY, "/Assets/Graphics/preload_background.png");

            //menu state
            this.game.load.image(GOUtil.MENU_BACKGROUND_KEY, "/Assets/Graphics/menu_background.png");
            this.game.load.image(GOUtil.MENU_PLAY_BUTTON_KEY, "/Assets/UI/menu_play_button.png");
            this.game.load.image(GOUtil.MENU_QUIT_BUTTON_KEY, "/Assets/UI/menu_quit_button.png");

            //game state
            this.game.load.image(GOUtil.GAME_BACKGROUND_KEY, "/Assets/Graphics/game_background.png");
            this.game.load.image(GOUtil.SPACECRAFT_KEY, "/Assets/Graphics/spacecraft.png");
            this.game.load.image(GOUtil.OBSTACLE_KEY, "/Assets/Graphics/obstacle.png");
            this.game.load.image(GOUtil.BULLET_KEY, "/Assets/Graphics/bullet.png");
            this.game.load.image(GOUtil.POWER_UP_BULLET, "/Assets/Graphics/powerUp_bullet.png");
            this.game.load.image(GOUtil.GAME_EASY_BUTTON_KEY, "/Assets/UI/easy_button.png");
            this.game.load.image(GOUtil.GAME_MEDIUM_BUTTON_KEY, "/Assets/UI/medium_button.png");
            this.game.load.image(GOUtil.GAME_HARD_BUTTON_KEY, "/Assets/UI/hard_button.png");

            this.game.load.audio(GOUtil.GAME_AUDIO_KEY,
                ["/Assets/Audio/game_audio.wav", "/Assets/Audio/game_audio.mp3", "/Assets/Audio/game_audio.ogg"]);
            this.game.load.audio(GOUtil.BULLET_AUDIO_KEY,
                ["/Assets/Audio/bullet_audio.wav", "/Assets/Audio/bullet_audio.mp3", "/Assets/Audio/bullet_audio.ogg"]);
            this.game.load.audio(GOUtil.POWERUP_AUDIO_KEY,
                ["/Assets/Audio/powerup_audio.wav", "/Assets/Audio/powerup_audio.mp3", "/Assets/Audio/powerup_audio.ogg"]);
            this.game.load.audio(GOUtil.EXPLOSION_AUDIO_KEY,
                ["/Assets/Audio/explosion_audio.wav", "/Assets/Audio/explosion_audio.mp3", "/Assets/Audio/explosion_audio.ogg"]);

            //game over state
            this.game.load.image(GOUtil.GAME_OVER_BACKGROUND_KEY, "/Assets/Graphics/gameover_background.png");
            this.game.load.image(GOUtil.GAME_OVER_PLAY_AGAIN_BUTTON_KEY, "/Assets/UI/playagain_button.png");
        }

        create() {
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

            //background
            this.game.add.sprite(0, 0, GOUtil.PRELOAD_BACKGROUND_KEY);

            //UI
            var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
            var loadingText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.7, "LOADING..", style);
            loadingText.anchor.set(0.5, 0.5);

            //fake loading
            this.game.time.events.add(2000, () => {
                this.game.state.start(GOUtil.MENU_STATE);
            });

            //actual loading

            //this.game.load.onLoadComplete.add(() => {
            //    this.game.state.start(GOUtil.MENU_STATE);
            //});
        }
    }
}