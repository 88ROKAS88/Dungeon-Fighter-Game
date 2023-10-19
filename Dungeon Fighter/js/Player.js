class Player {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.positionY, this.positionX, 100, 200);
    ctx.drawImage(
      sprite,
      frame,
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
