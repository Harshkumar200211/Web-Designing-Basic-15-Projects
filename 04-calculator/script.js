const a = document.getElementById("a"), b = document.getElementById("b");
const op = document.getElementById("op"), result = document.getElementById("result");
document.getElementById("calculate").addEventListener("click", () => {
  if (!a.value.trim() || !b.value.trim()) { result.textContent = "Enter both numbers."; return; }
  const x = Number(a.value), y = Number(b.value);
  let answer;
  switch (op.value) {
    case "+": answer = x + y; break;
    case "-": answer = x - y; break;
    case "*": answer = x * y; break;
    case "/": if (y === 0) { result.textContent = "Cannot divide by zero."; return; } answer = x / y; break;
  }
  result.textContent = "Result: " + answer;
});
document.getElementById("clear").addEventListener("click", () => {
  a.value = ""; b.value = ""; result.textContent = "Result will appear here.";
});