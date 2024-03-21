window.onload = function() {

  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach(button => {
      button.addEventListener('click', handleClick);
  });

  function handleClick() {
    const value = this.textContent;
    switch (value) {
      case 'C':
        clearDisplay();
        break;
      case '=':
        calculate();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        appendOperator(value);
        break;
      default:
        appendNumber(value);
        break;
    }
  }
};

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