let screenValue = '';

function appendToScreen(value) {
    if (screenValue === '' && value === '0') {
        return;
    }
    screenValue += value;
    document.getElementById('screen').innerText = screenValue;
}

function clearScreen() {
    screenValue = '';
    document.getElementById('screen').innerText = '0';
}

function calculate() {
    try {
        let result = eval(screenValue);
        document.getElementById('screen').innerText = result;
        screenValue = result.toString();
    } catch {
        document.getElementById('screen').innerText = 'Error';
        screenValue = '';
    }
}
