const HOLE_COUNT = 10;

const wrapper = document.querySelector(".wrapper");

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
