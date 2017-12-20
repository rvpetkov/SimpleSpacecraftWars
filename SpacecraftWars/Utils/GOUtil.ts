module SpacecraftWars {
    export class GOUtil {
        //States
        public static BOOT_STATE: string = "BootState";
        public static PRELOAD_STATE: string = "PreloadState";
        public static MENU_STATE: string = "MenuState";
        public static GAME_STATE: string = "GameState";
        public static GAME_OVER_STATE: string = "GameOverState";

        //Bullets
        public static BULLET_VELOCITY: number = 500;

        //Power-Ups
        public static POWER_UP_X_OFFSET: number = 150;

        //Player
        public static PLAYER_MOVEMENT_SPEED: number = 3;

        //Obstacles
        public static OBSTACLE_SPEED_EASY: number = 3;
        public static OBSTACLE_SPEED_MEDIUM: number = 4;
        public static OBSTACLE_SPEED_HARD: number = 5;

        public static OBSTACLE_INTERVAL_EASY: number = 2500;
        public static OBSTACLE_INTERVAL_MEDIUM: number = 1700;
        public static OBSTACLE_INTERVAL_HARD: number = 1200;

        public static OBSTACLE_POINTS_EASY: number = 20;
        public static OBSTACLE_POINTS_MEDIUM: number = 35;
        public static OBSTACLE_POINTS_HARD: number = 50;

        public static GAPSIZE_MIN_HARD: number = 3;
        public static GAPSIZE_MIN_MEDIUM: number = 5;
        public static GAPSIZE_MIN_EASY: number = 7;
        public static GAPSIZE_MAX_EASY: number = 10;

        //Game assets keys
        public static BOOT_IMAGE_KEY: string = "bootImage";
        public static BOOT_AUDIO_KEY: string = "bootAudio";
        public static BOOT_BACKGROUND_KEY: string = "bootBackground";

        public static PRELOAD_BACKGROUND_KEY: string = "preloadBackground";

        public static MENU_BACKGROUND_KEY: string = "menuBackground";
        public static MENU_PLAY_BUTTON_KEY: string = "playButton";
        public static MENU_QUIT_BUTTON_KEY: string = "quitButton";

        public static GAME_BACKGROUND_KEY: string = "gameBackground";
        public static SPACECRAFT_KEY: string = "spaceCraft";
        public static OBSTACLE_KEY: string = "obstacle";
        public static BULLET_KEY: string = "bullet";
        public static POWER_UP_BULLET: string = "powerUpBullet";
        public static GAME_EASY_BUTTON_KEY: string = "easyButton";
        public static GAME_MEDIUM_BUTTON_KEY: string = "mediumButton";
        public static GAME_HARD_BUTTON_KEY: string = "hardButton";

        public static GAME_AUDIO_KEY: string = "gameAudio";
        public static BULLET_AUDIO_KEY: string = "bulletAudio";
        public static POWERUP_AUDIO_KEY: string = "powerUpAudio";
        public static EXPLOSION_AUDIO_KEY: string = "explosionAudio";

        public static GAME_OVER_BACKGROUND_KEY: string = "gameoverbackground";
        public static GAME_OVER_PLAY_AGAIN_BUTTON_KEY: string = "playAgainButton";
        public static BEST_SCORE: string = "bestScore";
    }
}