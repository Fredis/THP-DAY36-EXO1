var calcultationArray = [];
var result = 0;
var operationType = "";
var count = 0;

function add(firstNumber, secondNumber)
{
	result = firstNumber + secondNumber;
	calcultationArray = [];
	document.getElementById("result").innerHTML = result;
}

function substract(firstNumber, secondNumber)
{
	result = firstNumber - secondNumber;
	calcultationArray = [];
	document.getElementById("result").innerHTML = result;
}

function multiply(firstNumber, secondNumber)
{
	result = firstNumber * secondNumber;
	calcultationArray = [];
	document.getElementById("result").innerHTML = result;
}

function divide(firstNumber, secondNumber)
{
	result = firstNumber / secondNumber;
	calcultationArray = [];
	document.getElementById("result").innerHTML = result;
}

function add_to_array(value)
{
	calcultationArray.push(value);
	document.getElementById("result").innerHTML = calcultationArray.join('');
}

function operationTypeAdding(operation)
{
	console.log("result: " + result)
	operationType = operation;
	document.getElementById("operator").innerHTML = operationType;
	if(count == 0)
	{
		result = parseInt(calcultationArray.join(''));
		count = 1;
	}
	calcultationArray = [];
	console.log("result: " + result)
}

function calculation()
{
		console.log(calcultationArray);
		var secondNumber = parseInt(calcultationArray.join(''));
		console.log(result);

		switch (operationType) {
	  case '+':
	    add(result, secondNumber);
	    break;
	  case '-':
	    substract(result, secondNumber);
	    break;
	  case '*':
	    multiply(result, secondNumber);
	    break;
	  case '/':
	    divide(result, secondNumber);
	    break;
	  default:
	    console.log('Rien à faire !');
	}
	document.getElementById("operator").innerHTML = "=";

}

function clear_calculation(number)
{
	calcultationArray = [];
	result = 0;
	count = 0;
	operationType = "";
	document.getElementById("result").innerHTML = 0;
}