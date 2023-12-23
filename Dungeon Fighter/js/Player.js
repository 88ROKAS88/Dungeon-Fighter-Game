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

  attack() {
    let playerCenterX = this.positionX + 100;
    let playerCenterY = game.mapY + 100;
    if (game.enemies.length > 0) {
      game.enemies.forEach((element, index) => {
        let enemyCenterX = element.positionX + 50;
        let enemyCenterY = element.mapY + 50;
        if (
          playerCenterX - enemyCenterX < 150 &&
          playerCenterX - enemyCenterX > -150 &&
          playerCenterY - enemyCenterY < 150 &&
          playerCenterY - enemyCenterY > -150
        ) {
          console.log("ENEMY " + index + " TAKES DAMAGE");
        }
        console.log(
          "ENEMY " +
            index +
            " playerY " +
            playerCenterY +
            " enemyY " +
            enemyCenterY
        );
      });
    }
  }
}
