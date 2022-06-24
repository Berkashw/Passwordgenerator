import { getRandomString } from "./passwordgenerator.js"
const resultField = document.getElementById("resultField")
const smallLetersCheck = document.getElementById("smallLettersCheck")
const capitalLettersCheck = document.getElementById("capitalLettersCheck")
const numberLettersCheck = document.getElementById("numberLettersCheck")
const stringLength = document.getElementById("stringLength")
const randomString = getRandomString(
	stringLength.value,
	smallLetersCheck.checked,
	capitalLettersCheck.checked,
	numberLettersCheck.checked
)
resultField.innerText = randomString
