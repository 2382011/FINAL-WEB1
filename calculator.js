let expressions = '';

// Fungsi untuk menangani input tombol kalkulator
function press(value) {
    expressions += value;
    updateDisplay();
}

// Fungsi untuk menghitung ekspresi matematika
function calculate() {
    try {
        const result = eval(expressions);
        expressions = result.toString();
        updateDisplay();
    } catch {
        console.log("Error: Invalid Expression!");
        expressions = '';
        updateDisplay();
    }
}

// Fungsi untuk membersihkan layar kalkulator
function clearConsole() {
    expressions = '';
    updateDisplay();
}

// Fungsi untuk memperbarui tampilan kalkulator
function updateDisplay() {
    const displayElement = document.getElementById("display");
    if (displayElement) {
        displayElement.innerText = expressions || 0;
    } else {
        console.error("Element with id 'display' not found!");
    }
}