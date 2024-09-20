const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const BREED_LIST = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector("#breed");
const button = document.querySelector("#btn");
const nextDogBtn = document.querySelector(".btn");

let currentBreedSelected = "";

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
    currentBreedSelected = "";
    currentBreedSelected = select.value;
    getDoggo(select.value);
  });

  nextDogBtn.addEventListener("click", () => {
    if (currentBreedSelected === "") {
      getDoggo(breedList[0]);
    } else {
      getDoggo(currentBreedSelected);
    }
  });

  getDoggo(breedList[0]);
}
async function getDoggo(breedName) {
  showLoadingSpinner();

  const res = await fetch(
    `https://dog.ceo/api/breed/${breedName}/images/random`
  );

  const resJson = await res.json();
  document.querySelector(".doggos").alt = "a cute doggo";
  document.querySelector(".doggos").src = resJson.message;

  removeLoadingSpinner();
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
// getDoggo();
// document.querySelector("#btn").addEventListener("click", getDoggo);

// const doggos = document.querySelector(".doggos");
// const addDogBtn = document.querySelector("#addBtn");
// function showSomeDog() {
//   const promise = fetch(DOG_URL);

//   promise
//     .then((response) => {
//       console.log(response);
//       const processingPromise = response.json();
//       return processingPromise;
//     })
//     .then((processedResponse) => {
//       const img = document.createElement("img");
//       img.src = processedResponse.message;
//       img.alt = "Cute Doggo";
//       doggos.appendChild(img);
//     });
// }

// addDogBtn.addEventListener("click", () => {
//   doggos.textContent = "";
//   showSomeDog();
// });

// showSomeDog();
// console.log("this will log first");
