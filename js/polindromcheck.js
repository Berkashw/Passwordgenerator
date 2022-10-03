const resultField = document.getElementById("resultField")
const inputField = document.getElementById("inputField")
const checkBtn = document.getElementById("checkBtn")

const reverseString = ([...string]) => string.reverse().join("")
function polindromcheck(string) {
	return string === reverseString(string)
}

checkBtn.onclick = () => {
	const tmptext = inputField.value
	const checkflag = polindromcheck(tmptext)
	checkflag
		? (resultField.innerHTML = "Text is a polindrom")
		: (resultField.innerHTML = "Text is not a polindrom")
}
