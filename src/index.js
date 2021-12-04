let input = document.querySelector("input");

let operation = "";
let item1 = 0;
let item2 = 0;
let result = 0;
let inProgress = false;

input.value = 0;

document.addEventListener("click", (e) => {
  switch (true) {
    case /\d/.test(e.target.innerText):
      addValue(e);
      break;
    case /\+/.test(e.target.innerText):
      sumOperation();
      break;
    case /\*/.test(e.target.innerText):
      multiplyOperation();
      break;
    case /-/.test(e.target.innerText):
      minusOperation();
      break;
    case /\//.test(e.target.innerText):
      divideOperation();
      break;
    case /=/.test(e.target.innerText):
      equalsOperation();
      break;
    case /C/.test(e.target.innerText):
      reset();
      break;
    default:
      break;
  }
});

function addValue(e) {
  if (input.value === "0" || inProgress) {
    input.value = e.target.innerText;
  } else {
    input.value += e.target.innerText;
  }
}

function reset() {
  input.value = 0;
  inProgress = false;
  operation = "";
}

function sumOperation() {
  inProgress = true;
  item1 = input.value;
  operation = "sum";
}

function multiplyOperation() {
  inProgress = true;
  item1 = input.value;
  operation = "multiply";
}

function minusOperation() {
  inProgress = true;
  item1 = input.value;
  operation = "minus";
}

function divideOperation() {
  inProgress = true;
  item1 = input.value;
  operation = "divide";
}

function equalsOperation() {
  item2 = input.value;
  if (operation === "sum") {
    result = sum(item1, item2);
  }

  if (operation === "multiply") {
    result = multiply(item1, item2);
  }

  if (operation === "minus") {
    result = minus(item1, item2);
  }

  if (operation === "divide") {
    result = divide(item1, item2);
  }

  input.value = result;
  inProgress = false;
}

function sum(item1, item2) {
  return +item1 + +item2;
}

function multiply(item1, item2) {
  return +item1 * +item2;
}

function divide(item1, item2) {
  return +item1 / +item2;
}

function minus(item1, item2) {
  return +item1 - +item2;
}
