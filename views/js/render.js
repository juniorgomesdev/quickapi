export default function renderResponse(obj) {
	document.querySelector('#res').innerText = obj.res
	document.querySelector('#status').innerText = 'status: ' + obj.status
	document.querySelector('#situation').innerHTML = obj.situation
}