var header = document.querySelector("header")
var num = document.querySelectorAll("button");
var plus = document.querySelectorAll("#plus");
let input = document.createElement("input")
let inputTwo = document.createElement("input")
let calculate = false
function inputCreate() {
    input.id = "myInput"
    input.type = "text"
    input.placeholder = "Type a number..."
    header.appendChild(input)
}
inputCreate()

var firstNumbers = parseFloat(0)
var secondNumber = parseFloat(0)
var sign = 

document.addEventListener("DOMContentLoaded", function() {
    firstInput()
});

function firstInput() {
    num.forEach(function (button) {
        button.addEventListener("click", function (event) {
            if (button.textContent == "+" || button.textContent == "-" || button.textContent == "x" || button.textContent == "/" ) {
                sign = button.textContent
                console.log(button.textContent)
                secondInput()
            } else if (button.textContent == "+" && calculate == true) {
                sign = "+"
                secondInput()
            } else if (button.textContent == "-" && calculate == true) {
                sign = "-"
                secondInput()
            } else if (button.textContent == "x" && calculate == true) {
                sign = "*"
                secondInput()
            } else if (button.textContent == "/" && calculate == true) {
                sign = "/"
                secondInput()
            } else if (calculate == false){
                input.value += button.textContent;
                firstNumbers = input.value 
            } else {
                secondInput()
            }
        })
    })
}

function secondInput() {
    calculate = true
    console.log(firstNumbers)
    input.remove()
    inputTwo.id = "myInput"
    inputTwo.type = "text"
    inputTwo.placeholder = "Type a number..."
    header.appendChild(inputTwo)
    num.forEach(function (button) {
        button.addEventListener("click", function (event) {
            if (button.textContent == "=") {
                equalAdd()
            } else {
                inputTwo.value += button.textContent;
                secondNumber = inputTwo.value 

            }
        })
    })
}

function equalAdd() {
    switch (sign) {
        case "+":
            result = firstNumbers + secondNumber;
            break;
        case "-":
            result = firstNumbers - secondNumber;
            break;
        case "*":
            result = firstNumbers * secondNumber;
            break;
        case "/":
            result = firstNumbers / secondNumber;
            break;
        default:
            console.log("Invalid sign");
            break;
    }
    
    if (result !== undefined) {
        console.log(result);
    }
}

