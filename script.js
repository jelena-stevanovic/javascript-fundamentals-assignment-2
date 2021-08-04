var operand1 = parseInt(prompt('Please, insert first operand!'));
var operation = prompt('Please, insert operation!');
var operand2 = parseInt(prompt('Please, insert second operand!'));

calculate(operand1, operand2, operation);

function calculate(number1, number2, operation) {
    switch (operation) {
        case "+":
            alert(`The sum is: ${number1 + number2}`);
            break;
        case "-":
            alert(`The difference is: ${number1 - number2}`);
            break;
        case "*":
            alert(`The product is: ${number1 * number2}`);
            break;
        case "/":
            alert(`The quotient is: ${number1 / number2}`);
            break;
        default:
            alert('The operation is not supported!');
            break;
    }
}
