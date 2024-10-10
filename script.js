document.onmousemove = animateCircles;

var colors = ['#1abc9c', '#3498db', '#f1c40f'];

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);

  // Position the circle at the mouse pointer
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  // Randomize color
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  // Animate circle (size, opacity, and position)
  setTimeout(function () {
    circle.style.transform = 'translate(-25px, -25px) scale(2.5)';
    circle.style.opacity = '0';
  }, 0);

  // Remove circle after animation completes
  setTimeout(function () {
    circle.remove();
  }, 500); // Duration matches the transition (0.5s)
}
