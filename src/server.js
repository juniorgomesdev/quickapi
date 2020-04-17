const path = require('path')

module.exports = function quickApi({ port }) {
	const express = require('express')
	const app = express()

	const dir = path.join(__dirname, '../views')
	app.use('/public', express.static(dir))

	app.get('/quickapi', (req, res) => {
		res.sendFile(dir + '/index.html')
	})

	app.get('/', (req, res) => {
		res.status(201).json({ ok: true })
	})

	app.listen(3333, () => {
		console.log(`> go to http://localhost:${port}/quickapi`)
	})
}