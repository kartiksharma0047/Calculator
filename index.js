let btn = document.querySelectorAll(".l-btn");
let display = document.querySelector("#screen");
let C = document.querySelector("#clear");
let R = document.querySelector("#delete");
let submit = document.querySelector("#submit");
let operatorButtons = document.querySelectorAll(".operator");
let hasNumberClicked = false;

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        let value = btn[i].textContent;
        display.innerHTML += value;
        hasNumberClicked = true;
        enableOperatorButtons();
    }
    clearLast();
}
submit.onclick = () => {
    let data = display.textContent;
    display.innerHTML = "";
    let y = eval(data);
    if (y !== undefined) {
        display.innerHTML = y;
    }
    clearLast();
};
function enableOperatorButtons() {
    operatorButtons.forEach((btn) => {
        btn.disabled = !hasNumberClicked;
    });
}

function clearLast() {
    R.onclick = () => {
        let expression = display.textContent;
        expression = expression.slice(0, -1);
        display.innerHTML = expression;
        if (display.innerHTML =="") {
            hasNumberClicked = false;
            enableOperatorButtons();
        }
    }
}
C.onclick = () => {
    display.innerHTML = "";
    hasNumberClicked = false;
    enableOperatorButtons();
}