const mathOperands = (firstNumber, secondNumber, operand) => {
	let result = ""
	switch (operand) {
		case "+":
			result = firstNumber + secondNumber
			break
		case "-":
			result = firstNumber - secondNumber
			break
		case "*":
			result = firstNumber * secondNumber
			break
		case "/":
			result = firstNumber / secondNumber
			break
		default:
			console.log("No such operand")
	}
	return result
}
console.log(mathOperands(10, 4, "/"))
