var result = document.querySelector('input');
var operand1 = null;
var operator = null;
var operand2 = null;

function buttonPressed(button) {
    var digit = button.innerText.toString();

    if (result.value.length == 1 & result.value[0] == '0') {
        if (digit == '.') {
            result.value += digit;
        } else if (digit != '0') {
            result.value = digit;
        }    
    } else {
        result.value += digit;
    }
}

function clearInput() {
    result.value = null;
}

function calculate(button) {
    operand1 = result.value;
    result.value = null;
    operator = button.innerText;
}

function resultButton() {
    if (operand1 != null & operator != null & operand2 != null) {
        result.value = eval(operand1 + operator + operand2);
    }
    operand1 = null;
    operator = null;
    operand2 = null;
}

function dot() {
    if (result.value.includes('.') == false) {
        result.value += '.'
    }
}

function plusMinus() {
    result.value = (parseFloat(result.value) * -1).toString();
}