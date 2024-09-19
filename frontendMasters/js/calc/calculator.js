let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

console.log(screen);
function init() {
  document.querySelectorAll(".calc-button").forEach((element) => {
    element.addEventListener("click", () => {
      buttonClicked(element.textContent);
    });
  });
}
function handleOperator(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;

    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(+buffer);
      buffer = runningTotal;
      runningTotal = 0;
      previousOperator = null;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "×":
    case "-":
    case "÷":
      handleMath(value);
      break;
  }
}
function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = +buffer;

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  console.log(runningTotal);
  previousOperator = symbol;

  buffer = "0";
}
function flushOperation(buffer) {
  if (previousOperator === "+") {
    runningTotal += buffer;
  } else if (previousOperator === "-") {
    runningTotal -= buffer;
  } else if (previousOperator === "×") {
    runningTotal *= buffer;
  } else {
    runningTotal /= buffer;
  }
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}
function buttonClicked(element) {
  if (isNaN(element)) {
    // this is not a number
    handleOperator(element);
  } else {
    handleNumber(element);
  }

  screen.textContent = buffer;
}

init();
