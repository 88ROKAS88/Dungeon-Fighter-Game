class Game {
  constructor() {
    this.player = new Player(this);
    // test animations
    this.frame = 0;
    this.frameInterval = setInterval(() => {
      //   console.log(this.frame);
      this.frame += 100;
      if (this.frame > 200) {
        this.frame = 0;
      }
    }, 1000);
  }

  // animate
  animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    game.player.draw();
    requestAnimationFrame(game.animate);
  }
}
