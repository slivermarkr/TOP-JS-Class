const box = document.querySelector(".box");

let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  const shift = Math.min(0.1 * elapsed, 500);
  box.style.transform = `translateX(${shift}px)`;

  if (shift < 500) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
