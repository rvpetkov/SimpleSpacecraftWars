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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y, group, bullets, gameContext) {
            var _this = _super.call(this, game, x, y, SpacecraftWars.GOUtil.SPACECRAFT_KEY) || this;
            _this.game = game;
            _this.gameContext = gameContext;
            _this.bulletsRemaining = bullets;
            _this.bullets = group;
            _this.shootTime = _this.game.time.now;
            _this.shootInterval = 200;
            _this.spacecraftWidth = _this.game.cache.getImage(SpacecraftWars.GOUtil.SPACECRAFT_KEY).width;
            //audio
            _this.bulletAudio = _this.game.add.audio(SpacecraftWars.GOUtil.BULLET_AUDIO_KEY);
            //Keyboard
            _this.leftArrowKey = _this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            _this.rightArrowKey = _this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            _this.spaceKey = _this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            _this.spaceKey.onDown.add(_this.shoot, _this);
            return _this;
        }
        Player.prototype.update = function () {
            if (this.alive) {
                if ((this.x > 0 + (this.spacecraftWidth / 2)) && (this.leftArrowKey.isDown)) {
                    this.moveLeft();
                }
                if ((this.x < this.game.width - (this.spacecraftWidth / 2)) && (this.rightArrowKey.isDown)) {
                    this.moveRight();
                }
            }
        };
        Player.prototype.moveLeft = function () {
            this.x += -SpacecraftWars.GOUtil.PLAYER_MOVEMENT_SPEED * (60 / this.game.time.elapsedMS);
        };
        Player.prototype.moveRight = function () {
            this.x += SpacecraftWars.GOUtil.PLAYER_MOVEMENT_SPEED * (60 / this.game.time.elapsedMS);
        };
        Player.prototype.shoot = function () {
            if ((this.alive) && (this.game.time.now >= this.shootTime) && (this.bulletsRemaining > 0)) {
                var bullet = this.bullets.getFirstExists(false);
                if (bullet) {
                    this.bulletAudio.play("", 0, 0.8, false);
                    this.game.physics.arcade.enable(bullet);
                    bullet.reset(this.x, this.y - 45);
                    bullet.body.velocity.y = -SpacecraftWars.GOUtil.BULLET_VELOCITY;
                    this.bulletsRemaining--;
                    this.gameContext.updateBulletsRemaining(this.bulletsRemaining);
                    this.shootTime = this.game.time.now + this.shootInterval;
                }
            }
        };
        Player.prototype.addBullets = function (amount) {
            if (amount > 0) {
                this.bulletsRemaining += amount;
                this.gameContext.updateBulletsRemaining(this.bulletsRemaining);
            }
        };
        return Player;
    }(Phaser.Sprite));
    SpacecraftWars.Player = Player;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=Player.js.map