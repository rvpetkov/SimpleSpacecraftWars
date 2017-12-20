module SpacecraftWars {
    export class GameOverState extends Phaser.State {
        currentScore: number;
        currentScoreText: Phaser.Text;
        bestScore: string;
        bestScoreText: Phaser.Text;

        init(currentScore: number, bestScore: string) {
            this.currentScore = currentScore;
            this.bestScore = bestScore;
        }

        create() {
            //background
            this.game.add.sprite(0, 0, GOUtil.GAME_OVER_BACKGROUND_KEY);

            //UI
            var playButton = this.game.add.button(
                this.game.width * 0.65,
                this.game.height * 0.6,
                GOUtil.GAME_OVER_PLAY_AGAIN_BUTTON_KEY,
                this.playGame,
                this
            );
            playButton.anchor.set(0.5);

            var quitButton = this.game.add.button(
                this.game.width * 0.65,
                this.game.height * 0.8,
                GOUtil.MENU_QUIT_BUTTON_KEY,
                this.quitButton,
                this
            );
            quitButton.anchor.set(0.5);

            this.currentScoreText = this.game.add.text(35, this.game.height - 300, "Your Score: " + this.currentScore, { font: '52px Arial', fill: '#fff' });
            this.bestScoreText = this.game.add.text(35, this.game.height - 200, "Best Score: " + this.bestScore, { font: '52px Arial', fill: '#fff' });
        }

        playGame() {
            this.game.state.start(GOUtil.GAME_STATE);
        }

        quitButton() {
            this.game.destroy();
        }
    }
}
