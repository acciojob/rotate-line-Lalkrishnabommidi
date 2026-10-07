//your JS code here. If required.
const line = document.getElementById("line");

let angle = 0;

line.style.position = "absolute";
line.style.width = "200px";
line.style.height = "2px";
line.style.backgroundColor = "#000000";
line.style.top = "50%";
line.style.left = "50%";

setInterval(() => {
  angle += 2;
  line.style.transform = `rotate(${angle}deg)`;
}, 20);