
const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");

let current = ""; 
let previous = ""; 
let operator = ""; 

function calculate() {
  let result;
  if (operator === "+") {
    result = parseFloat(previous) + parseFloat(current);
  } else if (operator === "-") {
    result = parseFloat(previous) - parseFloat(current);
  } else if (operator === "*") {
    result = parseFloat(previous) * parseFloat(current);
  } else if (operator === "/") {
    result = parseFloat(previous) / parseFloat(current);
  } else {
    result = current;
  }
  return result;
}


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (!isNaN(value) || value === ".") {
      current += value;
      display.value = current;
    } else if (value === "AC") {
      current = "";
      previous = "";
      operator = "";
      display.value = "0";
    } else if (value === "DE") {
      current = current.slice(0, -1);
      display.value = current || "0";
    } else if (value === "=") {
      if (previous && operator) {
        current = String(calculate());
        display.value = current;
        console.log("계산결과:", current);
        previous = "";
        operator = "";
      }
    } else {
      if (current) {
        previous = current;
        operator = value;
        current = "";
      }
    }
    console.log("입력된 값:",value);
  });
});

