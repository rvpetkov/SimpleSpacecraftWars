module SpacecraftWars {
    export class SpacecraftWars {
        game: Phaser.Game;

        constructor(width?:number, height?:number) {
            this.game = new Phaser.Game(width, height, Phaser.AUTO, 'content', { create: this.create });
        }

        create() {
            this.game.state.add(GOUtil.BOOT_STATE, BootState);
            this.game.state.add(GOUtil.PRELOAD_STATE, PreloadState);
            this.game.state.add(GOUtil.MENU_STATE, MenuState);
            this.game.state.add(GOUtil.GAME_STATE, GameState);
            this.game.state.add(GOUtil.GAME_OVER_STATE, GameOverState);

            this.game.state.start(GOUtil.BOOT_STATE);
        }
    }
}

window.onload = () => {
    var game = new SpacecraftWars.SpacecraftWars(1280, 900);
}
