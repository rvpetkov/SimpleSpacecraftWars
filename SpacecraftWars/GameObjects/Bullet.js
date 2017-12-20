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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet(game, x, y, velocity) {
            var _this = _super.call(this, game, x, y, SpacecraftWars.GOUtil.BULLET_KEY) || this;
            _this.game = game;
            _this.velocity = velocity;
            return _this;
        }
        Bullet.prototype.update = function () {
            this.y += this.velocity;
        };
        return Bullet;
    }(Phaser.Sprite));
    SpacecraftWars.Bullet = Bullet;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=Bullet.js.map