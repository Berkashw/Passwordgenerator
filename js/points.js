const points = document.getElementById("points")
const add3Btn = document.getElementById("add3")
const remove1Btn = document.getElementById("remove1")

let myPoints = 3
points.textContent = myPoints

add3Btn.onclick = () => {
	myPoints += 3
	points.textContent = myPoints
}
remove1Btn.onclick = () => {
	myPoints -= 1
	points.textContent = myPoints
}
