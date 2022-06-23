import { getRandomString } from "./passwordgenerator.js"
const resultField = document.getElementById("resultField")
const smallLetersCheck = document.getElementById("smallLettersCheck")
const capitalLettersCheck = document.getElementById("capitalLettersCheck")
const numberLettersCheck = document.getElementById("numberLettersCheck")
const randomString = getRandomString(
	8,
	smallLetersCheck.checked,
	capitalLettersCheck.checked,
	numberLettersCheck.checked
)
resultField.innerText = randomString
