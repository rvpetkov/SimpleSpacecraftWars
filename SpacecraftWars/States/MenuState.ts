module SpacecraftWars {
    export class MenuState extends Phaser.State {
        create() {
            //background
            this.game.add.sprite(0, 0, GOUtil.MENU_BACKGROUND_KEY);

            //UI
            var playButton = this.game.add.button(
                this.game.width * 0.5,
                this.game.height * 0.5,
                GOUtil.MENU_PLAY_BUTTON_KEY,
                this.playGame,
                this
            );
            playButton.anchor.set(0.5);

            var quitButton = this.game.add.button(
                this.game.width * 0.5,
                this.game.height * 0.7,
                GOUtil.MENU_QUIT_BUTTON_KEY,
                this.quitButton,
                this
            );
            quitButton.anchor.set(0.5);
        }

        playGame() {
            this.game.state.start(GOUtil.GAME_STATE);
        }

        quitButton() {
            this.game.destroy();
        }
    }
}
