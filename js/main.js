import { getRandomString } from "./passwordgenerator.js"
const resultField = document.getElementById("resultField")
const generateButton = document.getElementById("generate")
const smallLetersCheck = document.getElementById("smallLettersCheck")
const capitalLettersCheck = document.getElementById("capitalLettersCheck")
const numberLettersCheck = document.getElementById("numberLettersCheck")
const stringLength = document.getElementById("stringLength")
const quantity = document.getElementById("quantity")
generateButton.onclick = () => {
	resultField.innerHTML = ""
	for (let i = 0; i < quantity.value; i++) {
		const randomString = getRandomString(
			stringLength.value,
			smallLetersCheck.checked,
			capitalLettersCheck.checked,
			numberLettersCheck.checked
		)
		resultField.innerHTML += `<li>${randomString} </li>`
	}
}
