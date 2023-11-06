// keyboart listener
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    game.player.positionX--;
  }
  if (e.key == "ArrowDown") {
    game.player.positionX++;
  }
  if (e.key == "ArrowLeft") {
    game.player.positionY--;
    game.player.row = 200;
  }
  if (e.key == "ArrowRight") {
    game.player.positionY++;
    game.player.row = 0;
  }
  console.log(e.key);
});
