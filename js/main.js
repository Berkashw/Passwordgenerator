outputField.innerText = "Test"
const getRandomString = require("./passwordgenerator")
outputField.innerText = getRandomString(
	8,
	smallLettersCheck.checked,
	capitalLettersCheck.checked,
	numberLettersCheck.checked
)
