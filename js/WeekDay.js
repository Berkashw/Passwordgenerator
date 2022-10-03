const resultField = document.getElementById("resultField")
const year = document.getElementById("year")
const month = document.getElementById("month")
const day = document.getElementById("day")
const checkDayButton = document.getElementById("checkDayButton")
const date = new Date()
year.value = date.getFullYear()
month.value = date.getMonth() + 1
day.value = date.getDate()

const getCurrentWeekDay = (date) => {
	const week = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]

	if (date === undefined) {
		date = new Date()
	} else {
		date.setMonth(date.getMonth() - 1)
	}
	return week[date.getDay()]
}

checkDayButton.onclick = () => {
	resultField.innerHTML = ""
	const date = new Date(year.value, month.value, day.value)
	const weekDay = getCurrentWeekDay(date)
	resultField.innerHTML += `<li>${weekDay} </li>`
}
