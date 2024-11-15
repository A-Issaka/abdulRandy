const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,100);
ctx.lineWidth = 5;
ctx.stroke();
