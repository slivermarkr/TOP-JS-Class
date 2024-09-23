const HOLE_COUNT = 10;

const wrapper = document.querySelector(".wrapper");
const wormWrapper = document.querySelector(".wormWrapper");
// increment when mole is clicked
let score = 0;
// worm width
const amountOfWidthIncrease = 90 / 10;
let currentWidthSize = 10;
// mole status
let isHungry = true;
let nextTime = Date.now();
let moleLoop;
let moleHappyLoop;

let feddingSuccess = true;

let randomNumber = () => Math.floor(Math.random() * 18) + 2;

function showMoleButt(e) {
  if (!e.target.className.includes("mole")) return;
  const img = e.target;
  img.src = "./images/mole-fed.png";
  setInterval(() => {
    img.src = "./images/mole-leaving.png";
  }, 1000);
}

function showPartOfWorm() {
  currentWidthSize += amountOfWidthIncrease;
  wormWrapper.style.width = `${currentWidthSize}%`;
  console.log(wormWrapper.style.width);
}

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
  moleLoop = requestAnimationFrame(next);
}

function moleHappy() {
  const moles = Array.from(document.querySelectorAll(".mole"));
  if (Date.now() > nextTime) {
    if (isHungry) {
      moles.forEach((mole) => (mole.src = "./images/king-mole-fed.png"));
    } else {
      moles.forEach((mole) => (mole.src = "./images/king-mole-leaving.png"));
    }
    isHungry = !isHungry;
    nextTime = Date.now() + 1000;
  }
  moleHappyLoop = requestAnimationFrame(next);
}

function createMoleHole(index) {
  const div = document.createElement("div");
  const mole = document.createElement("img");
  div.setAttribute("data-Id", index);
  div.classList.add("hole");
  mole.classList.add("mole");
  mole.src = "./images/king-mole-hungry.png";
  div.appendChild(mole);

  mole.addEventListener("click", (e) => {
    score++;
    showMoleButt(e);
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
