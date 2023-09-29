function diceRoll() {
    var roll = Math.round((Math.random() * (6)) + 1);
    var roll2 = Math.round((Math.random() * (6)) + 1);
    var total = roll + roll2;
    const number = document.createElement("p");
    number.textContent = "Dice 1:" + roll + " Dice 2: " + roll2 + "Total: " + total;
    document.body.appendChild(number);
}

const button = document.querySelectorAll('button');
button.addEventListener("click", diceRoll());