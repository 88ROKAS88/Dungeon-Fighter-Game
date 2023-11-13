class Game {
  constructor() {
    this.background = document.createElement("img");
    this.player = new Player(this);
    // test animations
    this.frame = 0;
    this.frameInterval = setInterval(() => {
      //   console.log(this.frame);
      this.frame += 100;
      if (this.frame > 300) {
        this.frame = 0;
      }
    }, 300);

    this.gameTime = setInterval(() => {
      const newPositionX = this.player.positionX + this.player.changeX;
      const newPositionY = this.player.positionY + this.player.changeY;
      if (newPositionX > 0 && newPositionX < 300) {
        this.player.positionX += this.player.changeX;
      }
      if (newPositionY > 0 && newPositionY < 700) {
        this.player.positionY += this.player.changeY;
      }
    }, 1000 / 30);
  }

  backgroundDraw() {
    ctx.drawImage(
      this.background, // image
      0, // image cut from
      0,
      800, //image cut to
      500,
      0, //canvas
      0,
      800,
      500
    );
  }

  // animate
  animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    game.backgroundDraw();
    game.player.draw();
    requestAnimationFrame(game.animate);
  }
}
