import { getRandomString } from "./passwordgenerator.js"
const resultField = document.getElementById("resultField")
const generateButton = document.getElementById("generate")
const smallLetersCheck = document.getElementById("smallLettersCheck")
const capitalLettersCheck = document.getElementById("capitalLettersCheck")
const numberLettersCheck = document.getElementById("numberLettersCheck")
const stringLength = document.getElementById("stringLength")

generateButton.onclick = () => {
	const randomString = getRandomString(
		stringLength.value,
		smallLetersCheck.checked,
		capitalLettersCheck.checked,
		numberLettersCheck.checked
	)
	resultField.innerText = randomString
}
