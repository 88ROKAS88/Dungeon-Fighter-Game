class Player {
  constructor(game) {
    this.positionX = 0;
    this.positionY = 0;
    this.changeX = 0;
    this.changeY = 0;
    this.row = 0;
    // this.game = game;
    this.damage = 10;
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
      let removeEnemy = false;
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
          element.health -= this.damage;
          if (element.health < 1) {
            removeEnemy = index;
          }
          console.log("ENEMY " + index + " health left " + element.health);
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
      if (removeEnemy !== false) {
        game.enemies.splice(removeEnemy, 1);
      }
    }
  }
}
