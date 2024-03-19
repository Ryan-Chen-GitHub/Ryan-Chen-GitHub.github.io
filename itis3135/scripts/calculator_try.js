let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    alert('Invalid expression');
    clearDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}