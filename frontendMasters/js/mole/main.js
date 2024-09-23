const MOLE_COUNT = 10;

const wrapper = document.querySelector(".wrapper");

const moles = [];

const createHoles = () => {
  for (let i = 0; i < MOLE_COUNT; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "hole");
    wrapper.appendChild(div);
  }
};

const createMoleObj = () => {
  for (let i = 0; i < MOLE_COUNT; i++) {
    const mole = {
      index: i,
      status: "hungry",
      node: "./images/mole-hungry.png",
    };
    moles.push(mole);
  }
};

const putMoleInTheHole = () => {
  const holes = document.querySelectorAll(".hole");
  holes.forEach((hole, index) => {
    hole.innerHTML = "";
    const img = document.createElement("img");
    img.src = moles[index].node;
    img.dataset.id = index;
    img.dataset.status = moles[index].status;
    img.classList.add("mole");

    img.addEventListener("click", (e) => {
      feedTheMole(e, index);
    });
    hole.appendChild(img);
  });
};

const feedTheMole = (e, index) => {
  // if (!e.target.className.includes("mole")) return;
  if (e.target.dataset.status.includes("hungry")) {
    moles[index].status = "happy";
    console.log(moles[index]);
    putMoleInTheHole();
  } else {
    moles[index].status = "hungry";
    putMoleInTheHole();
    console.log(moles[index]);
  }
};

const randomNumber = () => Math.floor(Math.random() * MOLE_COUNT);

//add moles to the hole

createHoles();
createMoleObj();
putMoleInTheHole();
