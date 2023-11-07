class Game {
  constructor() {
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
      this.player.positionX += this.player.changeX;
      this.player.positionY += this.player.changeY;
    }, 1000 / 30);
  }

  // animate
  animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    game.player.draw();
    requestAnimationFrame(game.animate);
  }
}
