module.exports = function quickApi() {
	const express = require('express')
	const app = express()

	app.use('/public', express.static(__dirname + '/views'))
	const dir = __dirname + '/views'

	app.get('/', (req, res) => {
		res.sendFile(dir + '/index.html')
	})

	app.get('/teste', (req, res) => res.json({ ok: true }))

	app.listen(3333, () => {
		console.log('> go to http://localhost:3333')
	})
}