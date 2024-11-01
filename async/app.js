const userLeft = false;
const isWatchingCatMeme = true;

function whatUserWatch(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "user left",
      message: ":(",
    });
  } else if (isWatchingCatMeme) {
    errorCallback({
      name: "user watching cat meme.",
      message: "cat meme > web dev.",
    });
  } else {
    callback("Success.");
  }
}

whatUserWatch(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
