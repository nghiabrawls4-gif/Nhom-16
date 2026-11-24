// Lấy màn hình hiển thị
const display = document.getElementById("display");

// Hàm thêm số hoặc toán tử vào màn hình
function appendToDisplay(value) {
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Hàm xóa hết
function clearDisplay() {
    display.innerText = "0";
}

// Hàm tính kết quả
function calculate() {
    try {
        let result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = "Lỗi";
    }
}
