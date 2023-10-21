class Player {
  constructor(game) {
    this.positionX = 0;
    this.positionY = 0;
    // this.game = game;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.positionY, this.positionX, 100, 200);
    ctx.drawImage(
      sprite,
      game.frame,
      0,
      100,
      200,
      this.positionY,
      this.positionX,
      100,
      200
    );
  }
}
