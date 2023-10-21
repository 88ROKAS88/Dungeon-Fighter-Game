// canvas
const canvas = document.getElementById("canvas");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
// ctx
const ctx = canvas.getContext("2d");
// sprite
const sprite = document.createElement("img"); //.src = "./sprite.png");
sprite.src = "./sprite.png";

// start game
let game = new Game();

game.animate();
