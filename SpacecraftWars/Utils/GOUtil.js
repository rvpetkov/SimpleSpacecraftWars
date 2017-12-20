var SpacecraftWars;
(function (SpacecraftWars) {
    var GOUtil = /** @class */ (function () {
        function GOUtil() {
        }
        //States
        GOUtil.BOOT_STATE = "BootState";
        GOUtil.PRELOAD_STATE = "PreloadState";
        GOUtil.MENU_STATE = "MenuState";
        GOUtil.GAME_STATE = "GameState";
        GOUtil.GAME_OVER_STATE = "GameOverState";
        //Bullets
        GOUtil.BULLET_VELOCITY = 500;
        //Power-Ups
        GOUtil.POWER_UP_X_OFFSET = 150;
        //Player
        GOUtil.PLAYER_MOVEMENT_SPEED = 3;
        //Obstacles
        GOUtil.OBSTACLE_SPEED_EASY = 3;
        GOUtil.OBSTACLE_SPEED_MEDIUM = 4;
        GOUtil.OBSTACLE_SPEED_HARD = 5;
        GOUtil.OBSTACLE_INTERVAL_EASY = 2500;
        GOUtil.OBSTACLE_INTERVAL_MEDIUM = 1700;
        GOUtil.OBSTACLE_INTERVAL_HARD = 1200;
        GOUtil.OBSTACLE_POINTS_EASY = 20;
        GOUtil.OBSTACLE_POINTS_MEDIUM = 35;
        GOUtil.OBSTACLE_POINTS_HARD = 50;
        GOUtil.GAPSIZE_MIN_HARD = 3;
        GOUtil.GAPSIZE_MIN_MEDIUM = 5;
        GOUtil.GAPSIZE_MIN_EASY = 7;
        GOUtil.GAPSIZE_MAX_EASY = 10;
        //Game assets keys
        GOUtil.BOOT_IMAGE_KEY = "bootImage";
        GOUtil.BOOT_AUDIO_KEY = "bootAudio";
        GOUtil.BOOT_BACKGROUND_KEY = "bootBackground";
        GOUtil.PRELOAD_BACKGROUND_KEY = "preloadBackground";
        GOUtil.MENU_BACKGROUND_KEY = "menuBackground";
        GOUtil.MENU_PLAY_BUTTON_KEY = "playButton";
        GOUtil.MENU_QUIT_BUTTON_KEY = "quitButton";
        GOUtil.GAME_BACKGROUND_KEY = "gameBackground";
        GOUtil.SPACECRAFT_KEY = "spaceCraft";
        GOUtil.OBSTACLE_KEY = "obstacle";
        GOUtil.BULLET_KEY = "bullet";
        GOUtil.POWER_UP_BULLET = "powerUpBullet";
        GOUtil.GAME_EASY_BUTTON_KEY = "easyButton";
        GOUtil.GAME_MEDIUM_BUTTON_KEY = "mediumButton";
        GOUtil.GAME_HARD_BUTTON_KEY = "hardButton";
        GOUtil.GAME_AUDIO_KEY = "gameAudio";
        GOUtil.BULLET_AUDIO_KEY = "bulletAudio";
        GOUtil.POWERUP_AUDIO_KEY = "powerUpAudio";
        GOUtil.EXPLOSION_AUDIO_KEY = "explosionAudio";
        GOUtil.GAME_OVER_BACKGROUND_KEY = "gameoverbackground";
        GOUtil.GAME_OVER_PLAY_AGAIN_BUTTON_KEY = "playAgainButton";
        GOUtil.BEST_SCORE = "bestScore";
        return GOUtil;
    }());
    SpacecraftWars.GOUtil = GOUtil;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=GOUtil.js.map