const BASE_URL = `https://ds-todo-api.herokuapp.com/todo/`

const noteGET = async () => {
	try {
		let response = await fetch(`${BASE_URL}`, {
			method: `GET`,
			headers: { "Content-Type": "application/json" },
		})
		return await response.json()
	} catch (error) {
		console.error(error)
	}
}

const notePOST = async (newToDo) => {
	try {
		let response = await fetch(`${BASE_URL}`, {
			method: `POST`,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newToDo),
		})
		return await response.json()
	} catch (error) {
		console.error(error)
	}
}

const noteDELETE = async (id) => {
	try {
		let response = await fetch(`${BASE_URL}${id}`, {
			method: `DELETE`,
			headers: { "Content-Type": "application/json" },
		})
		return await response.json()
	} catch (error) {
		console.error(error)
	}
}

const noteEDIT = async (id, todo) => {
	try {
		let response = await fetch(`${BASE_URL}${id}`, {
			method: `PUT`,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todo),
		})
		return await response.json(todo)
	} catch (error) {
		console.error(error)
	}
}
