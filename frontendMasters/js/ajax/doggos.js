const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const BREED_LIST = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector("#breed");
const nextDogBtn = document.querySelector(".btn");

let currentBreedSelected = select.value;

async function listOfBreeds(event) {
  const response = await fetch(BREED_LIST);

  const responseJSON = await response.json();

  const breedList = Object.keys(responseJSON.message);

  for (const breed of breedList) {
    const option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  }
  select.addEventListener("change", () => {
    getDoggo(select.value);
    currentBreedSelected = select.value;
    nextDogBtn.textContent = `More of ${select.value.toUpperCase()}`;
  });

  nextDogBtn.addEventListener("click", () => {
    if (currentBreedSelected === "") {
      getDoggo(breedList[0]);
    } else {
      getDoggo(currentBreedSelected);
    }
  });

  nextDogBtn.textContent = `More of ${breedList[0].toUpperCase()}`;
  getDoggo(breedList[0]);
}

async function getDoggo(breedName) {
  document.querySelector(".doggos").style.display = "none";
  showLoadingSpinner();

  const res = await fetch(
    `https://dog.ceo/api/breed/${breedName}/images/random`
  );

  const resJson = await res.json();
  document.querySelector(".doggos").alt = "a cute doggo";
  document.querySelector(".doggos").src = resJson.message;

  removeLoadingSpinner();
  document.querySelector(".doggos").style.display = "inline-block";
}

function showLoadingSpinner() {
  const moleSpinner = document.querySelector(".mole");
  moleSpinner.style.display = "block";
}
function removeLoadingSpinner() {
  const moleSpinner = document.querySelector(".mole");
  moleSpinner.style.display = "none";
}
listOfBreeds();
getDoggo();
