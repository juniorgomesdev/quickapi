
export default class Api {
	async sendRequestJSON(data) {
		let headers = new Headers()

		const req = {
			method: data.method,
			headers,
			mode: 'cors',
			cache: 'default',
			body: data.body
		}

		try {
			let promise = await fetch(data.url, data)

			if(promise.ok) {
				let res = await promise.text()

				return { res, status: promise.status }
			} else {
				let res = 'Erro '+promise.statusText

				return { res, status: promise.status }
			}

		} catch(err) {
			return err
		}
	}
}
