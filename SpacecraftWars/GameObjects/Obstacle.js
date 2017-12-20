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
    var Obstacle = /** @class */ (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle(game, x, y) {
            var _this = _super.call(this, game, x, y, "obstacle") || this;
            _this.game = game;
            return _this;
        }
        return Obstacle;
    }(Phaser.Sprite));
    SpacecraftWars.Obstacle = Obstacle;
})(SpacecraftWars || (SpacecraftWars = {}));
//# sourceMappingURL=Obstacle.js.map