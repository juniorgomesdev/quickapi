class Api {
	async sendRequestJSON(data) {
		let headers = new Headers()

		const req = {
			method: data.method,
			headers,
			mode: 'cors',
			cache: 'default',
		}

		if(req.method != 'GET' ) {
			req.body = data.body
		}

		try {
			let request = await fetch(data.url, req)
			let response = await request.text()
			
			return {
				res: response,
				statusCode: request.status
			}

		} catch(err) {
			if(err.message = 'TypeError: Failed to fetch') {
				return {
					res: 'not found',
					statusCode: 404
				}
			}

			return {
				res: err,
				statusCode: request.status
			}
		}
	}
}

const api = new Api()
 
const call = async (func, data) => {
	const response = await api['sendRequestJSON'](data)

	return response
}

export default call