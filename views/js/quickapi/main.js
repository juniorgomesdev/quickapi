function print(arg) { return console.log(arg) }

import Api from './api.js'

class Quickapi {
	constructor(data) {
		this.state = {
			process: false,
			status: 'stopped',
			stateProcess: (arg) => {
				this.process = arg
				arg ? this.status = 'process' : this.status = 'stopped'
			},
			update: (arg) => {
				stateProcess(arg)
			}
		}

		this.setData(data)
		this.data = this.getData()

		this.api = new Api()
	}

	getData() {
		return this.data
	}

	setData(data) {
		return this.data = data
	}

	async call(func, data) {
		this.setData(data)

		const response = await this.api[func](data.req)
		return response
	}
}

export default new Quickapi({ url: null, method: null, body: null})