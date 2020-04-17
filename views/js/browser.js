import quickapi from './quickapi/api.js'
import Render from './render.js'

class quickapiBrowser {
	constructor() {
		this.data = this.getData()
		this.render = new Render()

		this.init()
	}

	async init() {
		let btnSend = document.querySelector('#btn-send')
		let event = btnSend.addEventListener('click', () => {
			this.process(this.getData())
		})
	}

	// program life cycles

	async process(data) {
		this.setData(null, null, 'sending')

		const res = await quickapi('sendRequestJSON', data.request)

		return this.finished(res)
	}

	finished(res) {
		this.setData(null, res, 'received')
	}

	// data functions

	getData() {
		// get value in html
		const getValue = id => { return document.querySelector(`#${id}`).value }

		return {
			// The dates are divided into two parts for better understanding
			request: {
				url: getValue('url'),
				method: getValue('method'),
				body: getValue('body-area')
			},
			response: {
				statusCode: getValue('status-code'),
				res: getValue('res')
			},
			state: null
		}
	}

	setData(req, res, state) {

		let data = {}
		req ? data.request = req : undefined,
		res ? data.response = res : undefined,
		state ? data.state = state : undefined

		this.data = data

		this.render.main(data)
	}
}

const init = new quickapiBrowser()

// under development
class stateBrowser {
	constructor() {
		this.call()
	}

	call() {
		let event = document.addEventListener('click', (event) => {
			console.log(event)
		})
	}
}

//const sb = new stateBrowser()