const display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = value;
  } else {
    const lastChar = display.innerText.slice(-1);
    if ("+-*/.".includes(lastChar) && "+-*/.".includes(value)) return;
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    const result = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
    display.innerText = Number.isFinite(result) ? parseFloat(result.toFixed(8)) : "Error";
  } catch (e) {
    display.innerText = 'Error';
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/().".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
