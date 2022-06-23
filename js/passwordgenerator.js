import { getRandomNumber } from "./getrandomnumber.js"
export { getRandomString }
const charArray1 = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
]
const charArray2 = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
]
const charArray3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const getRandomString = (
	passwordLength = 8,
	smallLetters = true,
	capitalLetters = true,
	numberLetters = true
) => {
	let tempCharArray = []
	if (smallLetters) {
		tempCharArray = [...tempCharArray, ...charArray1]
	}
	if (capitalLetters) {
		tempCharArray = [...tempCharArray, ...charArray2]
	}
	if (numberLetters) {
		tempCharArray = [...tempCharArray, ...charArray3]
	}
	let randomString = ""
	let i = 0
	for (i = 0; i < passwordLength; i++) {
		randomString += tempCharArray[getRandomNumber(0, tempCharArray.length - 1)]
	}

	return randomString
}
console.log(getRandomString(8))
