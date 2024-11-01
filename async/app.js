const userLeft = false;
const isWatchingCatMeme = true;

function whatUserWatch() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else if (isWatchingCatMeme) {
      reject({
        name: "user watching cat meme.",
        message: "cat meme > web dev.",
      });
    } else {
      resolve("Success.");
    }
  });
}

whatUserWatch()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + "  " + error.message);
  });
