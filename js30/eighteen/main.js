const nodes = Array.from(document.querySelectorAll("[data-time]"));

function convertToSeconds(time) {
  let result = time.split(":");
  let seconds = Number(result[0]) * 60 + Number(result[1]);
  return seconds;
}

const totalTimeInSeconds = nodes.reduce((acc, next) => {
  return acc + convertToSeconds(next.dataset.time);
}, 0);

let secondsLeft = totalTimeInSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(`Total watch time: ${hours}:${minutes}:${secondsLeft}`);
