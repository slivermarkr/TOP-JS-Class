const HOLE_COUNT = 10;

const wrapper = document.querySelector(".wrapper");

let isHungry = true;
let nextTime = Date.now();

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

function createMoleHole() {
  const div = document.createElement("div");
  const mole = document.createElement("img");
  div.classList.add("hole");
  mole.classList.add("mole");
  mole.src = "./images/king-mole-hungry.png";
  div.appendChild(mole);
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
