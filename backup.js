const getRandomString = require("./passwordgenerator")
const outputField = document.getElementById("outputField")
outputField.innerText = getRandomString(
	8,
	smallLettersCheck.checked,
	capitalLettersCheck.checked,
	numberLettersCheck.checked
)
