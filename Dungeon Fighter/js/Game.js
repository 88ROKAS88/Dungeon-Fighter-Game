// canvas
const canvas = document.getElementById("canvas");
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

let player = new Player();

// animate
function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  player.draw();
  requestAnimationFrame(animate);
}
animate();
