// canvas
const canvas = document.getElementById("canvas");
// test.innerText = "test";
// canvas.style.width = "100%";
// canvas.style.height = "500px";
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// ctx
const ctx = canvas.getContext("2d");

// player
let playerPositionX = 0;
let playerPositionY = 0;
function drawPlayer() {
  ctx.fillStyle = "red";
  ctx.fillRect(playerPositionY, playerPositionX, 100, 100);
}

// animate
function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawPlayer();
  requestAnimationFrame(animate);
}
animate();

// keyboart listener
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    playerPositionX--;
  }
  if (e.key == "ArrowDown") {
    playerPositionX++;
  }
  if (e.key == "ArrowLeft") {
    playerPositionY--;
  }
  if (e.key == "ArrowRight") {
    playerPositionY++;
  }
  console.log(e.key);
});
// test
console.log(canvasWidth);
console.log(canvasHeight);
