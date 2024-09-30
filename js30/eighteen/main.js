const nodes = Array.from(document.querySelectorAll("[data-time]"));

function convertToSeconds(time) {
  let result = time.split(":");
  let seconds = Number(result[0]) * 60 * Number(result[1]);
  return seconds;
}

const totalTime = nodes.reduce((acc, next) => {
  return acc + convertToSeconds(next.dataset.time);
}, 0);

console.log(totalTime / 60);
