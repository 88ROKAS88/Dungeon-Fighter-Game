// keyboart listener
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    player.positionX--;
  }
  if (e.key == "ArrowDown") {
    player.positionX++;
  }
  if (e.key == "ArrowLeft") {
    player.positionY--;
  }
  if (e.key == "ArrowRight") {
    player.positionY++;
  }
  console.log(e.key);
});
