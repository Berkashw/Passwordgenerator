resultField.innerText = "Text"
import { getRandomString } from "./passwordgenerator.js"
resultField = document.getElementById("resultField")
smallLetersCheck = document.getElementById("smallLetersCheck")
capitalLettersCheck = document.getElementById("capitalLettersCheck")
numberLettersCheck = document.getElementById("numberLettersCheck")

resultField.innerText = getRandomString(
	8,
	smallLetersCheck.checked,
	capitalLettersCheck.checked,
	numberLettersCheck.checked
)
