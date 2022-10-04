const resultField = document.getElementById("resultField")
const inputField = document.getElementById("inputField")
const checkBtn = document.getElementById("checkBtn")

const reverseString = ([...string]) => string.reverse().join("")
function palindromcheck(string) {
	return string === reverseString(string)
}

checkBtn.onclick = () => {
	const tmptext = inputField.value
	const checkflag = palindromcheck(tmptext)
	checkflag
		? (resultField.innerHTML = "Text is a palindrom")
		: (resultField.innerHTML = "Text is not a palindrom")
}
