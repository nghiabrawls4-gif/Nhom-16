
// Lay man hinh hien thi
const display = document.querySelector(".box2");

// Ham them so hoac toan tu vao man hinh
function appendToDisplay(value) {

    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }

}

// Ham xoa het
function clearDisplay() {

    display.innerText = "0";

}

// Ham tinh ket qua
function calculate() {

    try {

        // Chuyen cac ky hieu thanh phep tinh JavaScript
        let expression = display.innerText;

        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/−/g, "-");

        // Tinh ket qua
        let result = eval(expression);

        // Hien thi ket qua
        if (isFinite(result)) {
            display.innerText = result;
        } else {
            display.innerText = "Lỗi";
        }

    } catch (error) {

        display.innerText = "Lỗi";

    }

}

// Ham xoa mot ky tu
function deleteNumber() {

    display.innerText = display.innerText.slice(0, -1);

    if (display.innerText === "") {
        display.innerText = "0";
    }

}

// Ham tinh binh phuong
function squareNumber() {

    let number = Number(display.innerText);
    display.innerText = number * number;

}

// Ham tinh can bac hai
function squareRoot() {

    let number = Number(display.innerText);

    if (number >= 0) {
        display.innerText = Math.sqrt(number);
    } else {
        display.innerText = "Lỗi";
    }

}

// Ham tinh nghich dao
function inverseNumber() {

    let number = Number(display.innerText);

    if (number !== 0) {
        display.innerText = 1 / number;
    } else {
        display.innerText = "Lỗi";
    }

}

// Ket noi cac nut bam
let buttons = document.querySelectorAll(
    ".calculator-button, .equals-button"
);

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = this.innerText.trim();

        if (value >= "0" && value <= "9" && value.length === 1) {
            appendToDisplay(value);
        }

        else if (["+", "−", "×", "÷", "."].includes(value)) {
            appendToDisplay(value);
        }

        else if (value === "=") {
            calculate();
        }

        else if (value === "C") {
            clearDisplay();
        }

        else if (value === "CE") {
            clearDisplay();
        }

        else if (value === "⌫") {
            deleteNumber();
        }

        else if (value === "x²") {
            squareNumber();
        }

        else if (value === "²√x") {
            squareRoot();
        }

        else if (value === "1/x") {
            inverseNumber();
        }

        else if (value === "+/−") {
            display.innerText = Number(display.innerText) * -1;
        }

        else if (value === "%") {
            display.innerText = Number(display.innerText) / 100;
        }

    });

});
