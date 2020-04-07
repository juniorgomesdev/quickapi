import quickapi from './quickapi/main.js'
import render from './render.js'

let data = null
function updateData() {
	 data = {
		req: {
			url: document.querySelector('#url').value,
			method: document.querySelector('#method').value,
			//body: document.querySelector('#body-area').value
		}, 
		res: {
			statusCode: 0,
			status: null,
			body: null
		}
	}

	return
}


let send = async () => {
	updateData()
	
	render({ res: '', status: '000', situation: 'carregando'})
	const res = await quickapi.call('sendRequestJSON', data)

	res.situation = 'pronto'
	render(res)
}

let btnSend = document.querySelector('#btn-send')
let event = btnSend.addEventListener('click', send)