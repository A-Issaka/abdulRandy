const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,100);
ctx.lineWidth = 5;
ctx.stroke();


window.addEventListener('scroll', function() {
    var titleContainer = document.getElementById('title-container');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 0) {
      titleContainer.style.height = '10px'; // Adjust this value to your preferred shrunk height
    } else {
      titleContainer.style.height = '100vh';
    }
  });