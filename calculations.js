var elementNumbers = document.querySelectorAll(".digit");
const numbers = [];
var num1;
var num2;
var operationString;
var result;


for (var i=0; i<elementNumbers.length; i++) {
	numbers.push(elementNumbers[i].value);
}
console.log(numbers);

function getNumber1() {
	var number = document.querySelector(".digit.numberOne").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber2() {
	var number = document.querySelector(".digit.numberTwo").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber3() {
	var number = document.querySelector(".digit.numberThree").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber4() {
	var number = document.querySelector(".digit.numberFour").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber5() {
	var number = document.querySelector(".digit.numberFive").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber6() {
	var number = document.querySelector(".digit.numberSix").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber7() {
	var number = document.querySelector(".digit.numberSeven").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber8() {
	var number = document.querySelector(".digit.numberEight").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber9() {
	var number = document.querySelector(".digit.numberNine").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getNumber0() {
	var number = document.querySelector(".digit.numberZero").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}
function getDecimalPoint() {
	var number = document.querySelector(".digit.decimalPoint").value;
	document.querySelector(".visor").value += number;
	document.querySelector(".visor").textContent += number;
}

function sum() {
	num1 = parseFloat(document.querySelector(".visor").value);
	document.querySelector(".visor").value = "";
	document.querySelector(".visor").textContent += num1;
	operationString = "sum";
}
function subtraction() {
	num1 = parseFloat(document.querySelector(".visor").value);
	document.querySelector(".visor").value = "";
	document.querySelector(".visor").textContent += num1;
	operationString = "subtraction";
}
function multiplication() {
	num1 = parseFloat(document.querySelector(".visor").value);
	document.querySelector(".visor").value = "";
	document.querySelector(".visor").textContent += num1;
	operationString = "multiplication";
}
function division() {
	num1 = document.querySelector(".visor").value;
	document.querySelector(".visor").value = "";
	document.querySelector(".visor").textContent += num1;
	operationString = "division";
}
function equalSign() {
	num2 = parseFloat(document.querySelector(".visor").value);
	if (operationString == "sum") {
		result = num1 + num2;
	}
	else if (operationString == "subtraction") {
		result = num1 - num2;
	}
	else if (operationString == "multiplication") {
		result = num1 * num2;
	}
	else if (operationString == "division") {
		result = num1 / num2;
	}
	document.querySelector(".visor").value = result;
}

function deleteVisor() {
	document.querySelector(".visor").value = "";
}