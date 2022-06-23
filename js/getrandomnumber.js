export { getRandomNumber }
const getRandomNumber = (min, max) => {
	const randomNumber = Math.random() * (max - min) + min
	return Math.round(randomNumber)
}
