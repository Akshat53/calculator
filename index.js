let output = document.getElementById("num");
// let num1 = document.getElementById("n1");

// let num2 = document.getElementById("n2");
let num1 = 2;
let num2 = 5;
document.getElementById("n1").textContent = num1;
document.getElementById("n2").textContent = num2;

function add() {
  let result = num1 + num2;
  output.textContent = "Sum : " + result;
}
function mul() {
    let result = num1 * num2;
  output.textContent = "Mul : " + result;
}
function div() {
    let result = num1 / num2;
  output.textContent = "Div : " + result;
}
function sub() {
    let result = num1 - num2;
  output.textContent = "SUB : " + result;
}
