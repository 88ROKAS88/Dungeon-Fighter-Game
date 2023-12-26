class Enemy {
  constructor(game, positionX, mapY) {
    this.positionX = positionX;
    // this.positionY = positionY;
    this.changeX = 0;
    this.changeY = 0;
    this.row = 0;

    this.mapY = mapY;
    // this.game = game;

    this.health = 100;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.mapY - game.screen, this.positionX, 100, 100);
    //   ctx.drawImage(
    //     sprite,
    //     game.frame,
    //     1 * this.row,
    //     200,
    //     200,
    //     this.positionY,
    //     this.positionX,
    //     200,
    //     200
    //   );
  }
}
