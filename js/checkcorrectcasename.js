const inputLastName = document.getElementById("inputLastName")
const inputFirstName = document.getElementById("inputFirstName")
const inputMiddleName = document.getElementById("inputMiddleName")
const correctBtn = document.getElementById("correctBtn")

const getFirstUpCaseString = (defaultString) => {
	const reverseStringArray = [...defaultString].map((char, index) => {
		if (index === 0) {
			return char.toUpperCase()
		} else {
			return char.toLowerCase()
		}
	})
	return reverseStringArray.join("")
}

correctBtn.onclick = () => {
	inputLastName.value = getFirstUpCaseString(inputLastName.value)
	inputFirstName.value = getFirstUpCaseString(inputFirstName.value)
	inputMiddleName.value = getFirstUpCaseString(inputMiddleName.value)
}
