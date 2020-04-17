import decamelize from './modules/decamelize.js'

export default class Render {
	constructor() {}

	main(data) {
		for(let i in data) {
			this.constructor[i](data[i])
		}
	}

	static request(data) {
		const setData = (id, v) => {
			document.querySelector(`#${id}`).value = v
		}

		for(let i in data) {
			setData(decamelize(i, '-'), data[i])
		}
	}

	static response(data) {
		const setData = (id, v) => {
			if(id == 'status-code') {
				return document.querySelector(`#${id}`).innerHTML = 'status: ' + v
			}
			document.querySelector(`#${id}`).value = v
			document.querySelector(`#${id}`).innerHTML = v

			return
		}

		for(let i in data) {
			setData(decamelize(i, '-'), data[i])
		}
	}

	static state(data) {
		document.querySelector('#state').innerHTML = data
	}

	static setColorStatus(status) {
		let color

		switch(status) {
			case status >= 100 && status <= 199:
				color = 'blue'

			case status >= 200 && status <= 299:
				color = 'green'

			case status >= 300 && status <= 399:
				color = 'yellow'

			case status >= 400 && status <= 499:
				color = 'orange'

			case status >= 500 && status <= 599:
				color = 'red'
		}
	}
}
