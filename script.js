// Obtén los elementos del DOM
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultElement = document.getElementById('result');

// Agrega event listeners para cada operación
addButton.addEventListener('click', () => {
    const operand1 = parseFloat(input1.value);
    const operand2 = parseFloat(input2.value);
    const result = operand1 + operand2;
    resultElement.textContent = 'Resultado: ' + result;
});

subtractButton.addEventListener('click', () => {
    const operand1 = parseFloat(input1.value);
    const operand2 = parseFloat(input2.value);
    const result = operand1 - operand2;
    resultElement.textContent = 'Resultado: ' + result;
});

multiplyButton.addEventListener('click', () => {
    const operand1 = parseFloat(input1.value);
    const operand2 = parseFloat(input2.value);
    const result = operand1 * operand2;
    resultElement.textContent = 'Resultado: ' + result;
});

divideButton.addEventListener('click', () => {
    const operand1 = parseFloat(input1.value);
    const operand2 = parseFloat(input2.value);
    const result = operand1 / operand2;
    resultElement.textContent = 'Resultado: ' + result;
});

function suma(a, b, callback) {
  let c = a + b;
  callback(c);
}

function mostrarResultado(resultado) {
  alert("El resultado de la suma es: " + resultado);
}