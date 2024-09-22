const HOLE_COUNT = 10;

const wrapper = document.querySelector(".wrapper");
const wormWrapper = document.querySelector(".wormWrapper");

let score = 0;

const widthChange = 10;
let wormWidth = 0;
console.log(wormWrapper.offsetWidth);

// const wormSegment = worm.offsetWidth / HOLE_COUNT;
// console.log(worm.offsetWidth);
// console.log(wormSegment);
// let wormWidthRevealed = 0;

let isHungry = true;
let nextTime = Date.now();

let randomNumber = () => Math.floor(Math.random() * 18) + 2;

function showPartOfWorm() {
  wormWrapper.style.width = `${wormWrapper.offsetWidth / 10 + widthChange}%`;
}
// function showPartOfWorm() {
//   wormWidthRevealed += wormSegment;
//   console.log(wormWidthRevealed);
//   worm.style.transform = `translateX(-${
//     worm.offsetWidth - wormWidthRevealed
//   }px)`;
// }

function showWinnerScreen() {
  if (score >= 10) {
    document.body.textContent = "";
    document.body.style.backgroundImage = "url(./images/win.png)";
    document.body.style.backgroundSize = "cover";
  }
}

function makeMoleAppear() {
  const moles = Array.from(document.querySelectorAll(".mole"));
  moles.forEach((mole) => {
    console.log(randomNumber());
    setInterval(() => {
      mole.style.display = "block";
      makeMoleDisappear();
    }, randomNumber() * 1000);
  });
}

function makeMoleDisappear() {
  const moles = Array.from(document.querySelectorAll(".mole"));

  moles.forEach((mole) => {
    setTimeout(() => {
      mole.style.display = "none";
    }, 3000);
  });
}
function next() {
  const moles = Array.from(document.querySelectorAll(".mole"));
  if (Date.now() > nextTime) {
    if (isHungry) {
      moles.forEach((mole) => (mole.src = "./images/king-mole-sad.png"));
    } else {
      moles.forEach((mole) => (mole.src = "./images/king-mole-hungry.png"));
    }
    isHungry = !isHungry;
    nextTime = Date.now() + 1000;
  }
  requestAnimationFrame(next);
}

function createMoleHole(index) {
  const div = document.createElement("div");
  const mole = document.createElement("img");
  div.setAttribute("data-Id", index);
  div.classList.add("hole");
  mole.classList.add("mole");
  mole.src = "./images/king-mole-hungry.png";
  div.appendChild(mole);

  mole.addEventListener("click", () => {
    score++;
    showWinnerScreen();
    showPartOfWorm();
    console.log("score: " + score);
  });
  return div;
}

function createMultipleHoles() {
  for (let i = 0; i < HOLE_COUNT; i++) {
    const hole = createMoleHole(i);
    wrapper.appendChild(hole);
  }
}

createMultipleHoles();
next();
makeMoleAppear();
