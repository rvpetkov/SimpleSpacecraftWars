module SpacecraftWars {
    export enum DifficultyType { EASY, MEDIUM, HARD };

    export class DifficultyManager {
        game: Phaser.Game;
        currentDifficulty: DifficultyType;

        obstacleSpeed: number;
        obstaclePoints: number;
        obstacleInterval: number;
        powerUpInterval: number;

        easyButton: Phaser.Button;
        mediumButton: Phaser.Button;
        hardButton: Phaser.Button;

        constructor(game: Phaser.Game) {
            this.game = game;
            this.updateDifficulty(DifficultyType.EASY);

            this.generateDifficultyButtons();
        }

        generateDifficultyButtons() {
            this.easyButton = this.game.add.button(
                this.game.width - (3 * 64),
                this.game.height,
                GOUtil.GAME_EASY_BUTTON_KEY,
                () => { this.updateDifficulty(DifficultyType.EASY); },
                this
            );
            this.easyButton.anchor.set(0, 1);
            this.easyButton.alpha = 0.8;

            this.mediumButton = this.game.add.button(
                this.game.width - (2 * 64),
                this.game.height,
                GOUtil.GAME_MEDIUM_BUTTON_KEY,
                () => { this.updateDifficulty(DifficultyType.MEDIUM); },
                this
            );
            this.mediumButton.anchor.set(0, 1);
            this.mediumButton.alpha = 0.8;

            this.hardButton = this.game.add.button(
                this.game.width - 64,
                this.game.height,
                GOUtil.GAME_HARD_BUTTON_KEY,
                () => { this.updateDifficulty(DifficultyType.HARD); },
                this
            );
            this.hardButton.anchor.set(0, 1);
            this.hardButton.alpha = 0.8;
        }

        updateDifficulty(diff: DifficultyType) {
            this.currentDifficulty = diff;

            switch (this.currentDifficulty) {
                case DifficultyType.EASY:
                    this.obstacleSpeed = GOUtil.OBSTACLE_SPEED_EASY;
                    break;
                case DifficultyType.MEDIUM:
                    this.obstacleSpeed = GOUtil.OBSTACLE_SPEED_MEDIUM;
                    break;
                case DifficultyType.HARD:
                    this.obstacleSpeed = GOUtil.OBSTACLE_SPEED_HARD;
                    break;
            }

            this.setObstaclePoints();
            this.setObstacleInterval();
            this.powerUpInterval = this.obstacleInterval / 2;
        }
        
        setObstaclePoints() {
            switch (this.currentDifficulty) {
                case DifficultyType.EASY:
                    this.obstaclePoints = GOUtil.OBSTACLE_POINTS_EASY;
                    break;
                case DifficultyType.MEDIUM:
                    this.obstaclePoints = GOUtil.OBSTACLE_POINTS_MEDIUM;
                    break;
                case DifficultyType.HARD:
                    this.obstaclePoints = GOUtil.OBSTACLE_POINTS_HARD;
                    break;
            }
        }

        setObstacleInterval() {
            switch (this.currentDifficulty) {
                case DifficultyType.EASY:
                    this.obstacleInterval = GOUtil.OBSTACLE_INTERVAL_EASY;
                    break;
                case DifficultyType.MEDIUM:
                    this.obstacleInterval = GOUtil.OBSTACLE_INTERVAL_MEDIUM;
                    break;
                case DifficultyType.HARD:
                    this.obstacleInterval = GOUtil.OBSTACLE_INTERVAL_HARD;
                    break;
            }
        }
    }
}
