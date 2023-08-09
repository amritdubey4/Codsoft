let string = "";
const display = document.getElementById('display');

document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.dataset.value;

        if (buttonValue === '=') {
            try {
                string = eval(string);
                updateDisplay(string);
            } catch (error) {
                updateDisplay("Error");
            }
        }
        else if (buttonValue === 'C') {
            string = "";
            updateDisplay("0");
        }
        else if (buttonValue === 'DEL') {
            string = string.slice(0, -1);
            updateDisplay(string);
        }
        else if (buttonValue === '%') {
            try {
                const result = eval(string) / 100;
                string = result.toString();
                updateDisplay(string);
            } catch (error) {
                updateDisplay("Error");
            }
        }
        else if (buttonValue === '√') {
            try {
                const result = Math.sqrt(eval(string));
                string = result.toString();
                updateDisplay(string);
            } catch (error) {
                updateDisplay("Error");
            }
        }
        else {
            string = string + buttonValue;
            updateDisplay(string);
        }
    });
});


function updateDisplay(value) {
    display.textContent = value;
}
