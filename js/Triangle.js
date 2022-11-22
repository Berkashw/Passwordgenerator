const getLength = (firstPoint, secondPoint) =>
	Math.sqrt(
		Math.pow(firstPoint.x - secondPoint.x, 2) +
			(Math.pow(firstPoint.y - secondPoint.y), 2)
	)

const firstPointX = document.getElementById("firstPointX")
const firstPointY = document.getElementById("firstPointY")
const secondPointX = document.getElementById("secondPointX")
const secondPointY = document.getElementById("secondPointY")
const thirdPointX = document.getElementById("thirdPointX")
const thirdPointY = document.getElementById("thirdPointY")
const triangleDrawBtn = document.getElementById("triangleDrawBtn")
const trianglePerimetr = document.getElementById("trianglePerimetr")
const triangleArea = document.getElementById("triangleArea")

const firstAppex = { x: firstPointX.value, y: firstPointY.value }
const secondAppex = { x: secondPointX.value, y: secondPointY.value }
const thirdAppex = { x: thirdPointX.value, y: thirdPointY.value }

const firstSide = getLength(firstAppex, secondAppex)
const secondSide = getLength(secondAppex, thirdAppex)
const thirdSide = getLength(firstAppex, thirdAppex)

const getTrianglePerimetr = (firstSide, secondSide, thirdSide) =>
	firstSide + secondSide + thirdSide

const getTriangleArea = (firstSide, secondSide, thirdSide) => {
	const p = (firstSide + secondSide + thirdSide) / 2
	return Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide))
}

triangleDrawBtn.onclick = () => {
	trianglePerimetr.innerHTML = getTrianglePerimetr(
		firstSide,
		secondSide,
		thirdSide
	)
	triangleArea.innerHTML = getTriangleArea(firstSide, secondSide, thirdSide)
	const canvas = document.getElementById("myCanvas"),
		context = canvas.getContext("2d")
	context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
	context.beginPath()
	context.moveTo(firstPointX.value, firstPointY.value)
	context.lineTo(secondPointX.value, secondPointY.value)
	context.lineTo(thirdPointX.value, thirdPointY.value)
	context.closePath()
	context.strokeStyle = "red"
	context.stroke()
}
