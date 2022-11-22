const myPromise = new Promise((resolve, reject) => {})
fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => {
		console.log(response)
		return response.json()
	})
	.then((json) => console.table(json))
	.catch((error) => console.error(error))
