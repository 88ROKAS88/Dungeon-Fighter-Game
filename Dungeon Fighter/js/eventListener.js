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
});

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    game.player.changeX += 2;
  }
  if (e.key == "ArrowDown") {
    game.player.changeX += -2;
  }
  if (e.key == "ArrowLeft") {
    game.player.changeY += 2;
  }
  if (e.key == "ArrowRight") {
    game.player.changeY += -2;
  }
});
