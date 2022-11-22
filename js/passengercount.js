const count = document.getElementById("count")
const incrementBtn = document.getElementById("incrementBtn")
const saveBtn = document.getElementById("saveBtn")
const saveEl = document.getElementById("saveEl")
let countTmp = 0
incrementBtn.onclick = () => {
	countTmp += 1
	count.textContent = countTmp
}
saveBtn.onclick = () => {
	saveEl.textContent += " - " + count.textContent
	count.textContent = 0
	countTmp = 0
}
