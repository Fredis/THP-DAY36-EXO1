var calcultationArray = [];
var result = 0;

function add(firstNumber, secondNumber)
{
	result = result + (firstNumber + secondNumber);
	document.getElementById("result").innerHTML = result;
}

function substract(firstNumber, secondNumber)
{
	result = result + (firstNumber - secondNumber);
	document.getElementById("result").innerHTML = result;
}

function multiply(firstNumber, secondNumber)
{
	result = result + (firstNumber * secondNumber);
	document.getElementById("result").innerHTML = result;
}

function divide(firstNumber, secondNumber)
{
	result = result + (firstNumber / secondNumber);
	document.getElementById("result").innerHTML = result;
}

function clear_calculation(number)
{
	calcultationArray = [];
	result = 0;
	document.getElementById("result").innerHTML = 0;
}

function add_to_array(value)
{
	calcultationArray.push(value);
	console.log(calcultationArray);
}

function calculation()
{

	var operationType = "";
	var firstNumberArray = [];
	var secondNumberArray = [];

	calcultationArray.forEach(function(Element) {
		if(typeof Element === 'string')
		{
			operationType = Element;
		}

		if(operationType == "")
		{
			firstNumberArray.push(Element);
		}
		else
		{
			secondNumberArray.push(Element);
		}
	});

	calcultationArray = [];
	secondNumberArray.shift();

	var firstNumber = firstNumberArray.join('');
	var secondNumber = secondNumberArray.join('');

	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);

	switch (operationType) {
	  case '+':
	    add(firstNumber, secondNumber);
	    break;
	  case '-':
	    substract(firstNumber, secondNumber);
	    break;
	  case '*':
	    multiply(firstNumber, secondNumber);
	    break;
	  case '/':
	    divide(firstNumber, secondNumber);
	    break;
	  default:
	    console.log('Rien à faire !');
	}

}