class Player {
  constructor(game) {
    this.positionX = 0;
    this.positionY = 0;
    this.changeX = 0;
    this.changeY = 0;
    this.row = 0;
    // this.game = game;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.positionY, this.positionX, 100, 200);
    ctx.drawImage(
      sprite,
      game.frame,
      1 * this.row,
      200,
      200,
      this.positionY,
      this.positionX,
      200,
      200
    );
  }
}
