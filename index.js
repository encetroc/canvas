const canvas = document.querySelector(".myCanvas");

//context
const ctx = canvas.getContext("2d");

//rect
ctx.fillStyle = "red";
ctx.fillRect(100, 50, 200, 100);

ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.strokeRect(100, 50, 200, 100);

//path
ctx.fillStyle = "purple";
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 400);
ctx.lineTo(100, 400);
ctx.lineTo(100, 100);
ctx.fill();
ctx.closePath();

//arc
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

//arcTo
/* ctx.strokeStyle = "blue";
ctx.beginPath()
ctx.moveTo(300, 300)
ctx.arcTo(200, 400, 100, 250, 50)
ctx.stroke(); */

canvas.onmousemove = (e) => {
  /* ctx.clearRect(0, 0, canvas.width, canvas.height);
  const x = 300;
  const y = 300;
  const x1 = e.layerX;
  const y1 = e.layerY;
  const x2 = 100;
  const y2 = 250;

  //line 1
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();

  //arcTo
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arcTo(x1, y1, x2, y2, 10);
  ctx.stroke(); */
};

ctx.fillStyle = "rgba(0, 0, 255, .5)";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(110, 60);
ctx.lineTo(110, 110);
ctx.lineTo(60, 110);
ctx.lineTo(50, 100);
ctx.lineTo(50, 50);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "gray";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(110, 60);
ctx.lineTo(110, 110);
ctx.lineTo(60, 110);
ctx.lineTo(50, 100);
ctx.lineTo(50, 50);
ctx.stroke();
ctx.closePath();

//line cap
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.moveTo(200, 200);
ctx.lineTo(300, 300);
ctx.lineTo(300, 200);
ctx.stroke();
ctx.closePath();

//gradient
const gradient = ctx.createLinearGradient(0, 0, 200, 200);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.5, "#ef00AA");
gradient.addColorStop(1, "blue");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 100, 100);

/* canvas.onmousemove = (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
} */

// radial gradient
ctx.clearRect(0, 0, canvas.width, canvas.height);
const radialGradient = ctx.createRadialGradient(100, 100, 50, 100, 100, 200);
radialGradient.addColorStop(0, "red");
radialGradient.addColorStop(1, "blue");
ctx.fillStyle = radialGradient;
ctx.fillRect(0, 0, 300, 300);

//image and patterns
ctx.clearRect(0, 0, canvas.width, canvas.height);
const img = new Image();
img.src = "./link.png";
img.onload = () => {
  ctx.drawImage(img, 0, 0, 50, 50);
};

//text
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "bottom";
ctx.fillText("hello g world", 200, 100);
ctx.strokeText("hello g world", 200, 200);

//ui example
const x = document.querySelector(".x");
const y = document.querySelector(".y");
const width = document.querySelector(".width");
const height = document.querySelector(".height");
const createBtn = document.querySelector(".createBtn");

createBtn.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x.value, y.value, width.value, height.value);
};

//animation
//let circleX = 0;
/* setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circleX = circleX + 1;

  ctx.globalAlpha = 1
  ctx.drawImage(img, 0, 0, 50, 50);

  ctx.globalAlpha = .5
  ctx.beginPath();
  ctx.arc(circleX, 100, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}, 20); */

/* function animateCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circleX = circleX + 1;

  ctx.globalAlpha = 1
  ctx.drawImage(img, 0, 0, 50, 50);

  ctx.globalAlpha = .5
  ctx.beginPath();
  ctx.arc(circleX, 100, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  requestAnimationFrame(animateCircle)
}

animateCircle() */

// keyboard control
let rectX = 0
let rectY = 0

document.addEventListener("keydown", (event) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  switch (event.keyCode) {
    case 38:
      console.log("go up")
      rectY = rectY - 50
      break
    case 40:
      console.log("go down")
      rectY = rectY + 50
      break
    case 37:
      console.log("go left")
      rectX = rectX - 50
      break
    case 39:
      console.log("go right")
      rectX = rectX + 50
      break
  }
  ctx.fillRect(rectX, rectY, 50, 50)
})