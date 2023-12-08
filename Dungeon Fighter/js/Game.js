class Game {
  constructor() {
    this.background = document.createElement("img");
    this.backgroundY = 0;
    this.player = new Player(this);
    this.mapY = 0;
    // test animations
    this.frame = 0;
    this.frameInterval = setInterval(() => {
      //   console.log(this.frame);
      this.frame += 200;
      if (this.frame > 600) {
        this.frame = 0;
      }
    }, 300);

    this.gameTime = setInterval(() => {
      const newPositionX = this.player.positionX + this.player.changeX;
      const newPositionY = this.player.positionY + this.player.changeY;
      if (newPositionX > 0 && newPositionX < 300) {
        this.player.positionX += this.player.changeX;
      }
      if (newPositionY > 0 && newPositionY < 600) {
        if (
          this.player.changeY > 0 &&
          this.player.positionY > 500 &&
          this.backgroundY + this.player.changeY < 800
        ) {
          this.backgroundY += this.player.changeY;
          this.mapY += this.player.changeY;
        } else if (
          this.player.changeY < 0 &&
          this.player.positionY < 200 &&
          this.backgroundY + this.player.changeY > 0
        ) {
          this.backgroundY += this.player.changeY;
          this.mapY += this.player.changeY;
        } else {
          this.player.positionY += this.player.changeY;
          this.mapY += this.player.changeY;
        }
        console.log(this.mapY);
      }
    }, 1000 / 30);
  }

  backgroundDraw() {
    ctx.drawImage(
      this.background, // image
      this.backgroundY, // image cut from
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
