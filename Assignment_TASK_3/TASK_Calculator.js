let currentResult = '';

function appendNumber(num) {
    currentResult += num;
    document.getElementById('result').value = currentResult;
}

function appendOperator(operator) {
    currentResult += operator;
    document.getElementById('result').value = currentResult;
}

function calculateResult() {
    try {
        const result = eval(currentResult);
        document.getElementById('result').value = result;
        currentResult = result.toString();
    } catch (error) {
        alert('Error in calculation!');
        clearResult();
    }
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = '';
}
