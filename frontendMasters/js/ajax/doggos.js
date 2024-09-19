const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");
const addDogBtn = document.querySelector("#addBtn");

function showSomeDog() {
  const promise = fetch(DOG_URL);

  promise
    .then((response) => {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then((processedResponse) => {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute Doggo";
      doggos.appendChild(img);
    });
}

addDogBtn.addEventListener("click", () => {
  doggos.textContent = "";
  showSomeDog();
});
console.log("this will log first");
