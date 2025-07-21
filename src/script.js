const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn.number");
let currentInput = "0";
function updateDisplay() {
  display.textContent = currentInput;
}
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value == "." && currentInput.includes(".")) return;
    if (currentInput == "0" && value !== ".") {
      currentInput = value;
    } else {
      currentInput += value;
    }
    updateDisplay();
  });
});
