// keyboart listener
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    game.player.changeX = -2;
  }
  if (e.key == "ArrowDown") {
    game.player.changeX = 2;
  }
  if (e.key == "ArrowLeft") {
    game.player.changeY = -2;
    game.player.row = 200;
  }
  if (e.key == "ArrowRight") {
    game.player.changeY = 2;
    game.player.row = 0;
  }
  // console.log("keydown", e.key);
});

window.addEventListener("keyup", (e) => {
  if (
    e.key == "ArrowUp" ||
    e.key == "ArrowDown" ||
    e.key == "ArrowLeft" ||
    e.key == "ArrowRight"
  ) {
    game.player.changeY = 0;
    game.player.changeX = 0;
  }
  // if (e.key == "ArrowDown") {
  //   game.player.positionX++;
  // }
  // if (e.key == "ArrowLeft") {
  //   game.player.positionY--;
  //   game.player.row = 200;
  // }
  // if (e.key == "ArrowRight") {
  //   game.player.positionY++;
  //   game.player.row = 0;
  // }
  // console.log("keyup", e.key);
});
