const HOLE_COUNT = 10;

const wrapper = document.querySelector(".wrapper");

let score = 0;

let isHungry = true;
let nextTime = Date.now();

let randomNumber = () => Math.floor(Math.random() * 18) + 2;

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
// function next() {
//   const moles = Array.from(document.querySelectorAll(".mole"));

//   if (Date.now() > nextTime) {
//     if (isHungry) {
//       moles.forEach((mole) => (mole.src = "./images/king-mole-sad.png"));
//     } else {
//       moles.forEach((mole) => (mole.src = "./images/king-mole-hungry.png"));
//     }
//     isHungry = !isHungry;
//     nextTime = Date.now() + 1000;
//   }
//   requestAnimationFrame(next);
// }

function createMoleHole() {
  const div = document.createElement("div");
  const mole = document.createElement("img");
  div.classList.add("hole");
  mole.classList.add("mole");
  mole.src = "./images/king-mole-hungry.png";
  div.appendChild(mole);

  mole.addEventListener("click", () => {
    score++;
    console.log("score: " + score);
  });
  return div;
}

function createMultipleHoles() {
  for (let i = 0; i < HOLE_COUNT; i++) {
    const hole = createMoleHole();
    wrapper.appendChild(hole);
  }
}

createMultipleHoles();
next();
makeMoleAppear();
