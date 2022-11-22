const resultField = document.getElementById("resultField")
const inputField = document.getElementById("inputField")
const checkBtn = document.getElementById("checkBtn")

const reverseString = ([...string]) => string.reverse().join("")
function palindromcheck(string) {
	return string === reverseString(string)
}
const isPalindrom = (string) => {
	for (let i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) return false
	}
	return true
}

checkBtn.onclick = () => {
	const tmpText = inputField.value
	const checkflag = isPalindrom(tmpText)
	checkflag
		? (resultField.innerHTML = "Text is a palindrom")
		: (resultField.innerHTML = "Text is not a palindrom")
}
