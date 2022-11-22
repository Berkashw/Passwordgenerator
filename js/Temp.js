let firstName = "Dmitriy"
let lastName = "Berkashev"

let fullName = firstName + " " + lastName

console.log(fullName)

let greeting = "Hi there"

const getGreeting = (greeting, firstName) => {
	console.log(greeting + ", " + firstName + "!")
}
getGreeting(greeting, firstName)
console.log(1.15 + 2.3)

const divisibleBy = (numbers, divisor) => {
	return numbers.filter((num) => num % divisor === 0)
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))

const twiceAsOld = (dadYearsOld, sonYearsOld) => {
	return dadYearsOld - sonYearsOld * 2
}

console.log(twiceAsOld(36, 7))

console.log("My points: " + (5 + 9))
