// canvas
const canvas = document.getElementById("canvas");
// test.innerText = "test";
// canvas.style.width = "100%";
// canvas.style.height = "500px";
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

// ctx
const ctx = canvas.getContext("2d");

// sprite
const sprite = document.createElement("img");
sprite.src = "./sprite.png";

// test animations
let frame = 0;
setInterval(() => {
  frame += 100;
  if (frame > 200) {
    frame = 0;
  }
}, 1000);

// player
let playerPositionX = 0;
let playerPositionY = 0;
function drawPlayer() {
  ctx.fillStyle = "red";
  ctx.fillRect(playerPositionY, playerPositionX, 100, 200);
  ctx.drawImage(
    sprite,
    frame,
    0,
    100,
    200,
    playerPositionY,
    playerPositionX,
    100,
    200
  );
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
