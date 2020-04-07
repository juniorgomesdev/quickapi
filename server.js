module.exports = function quickApi() {
	const app = require('express').express()

	app.use('/public', express.static(__dirname + '/views'))
	const dir = __dirname + '/views'

	app.get('/', (req, res) => {
		res.sendFile(dir + '/index.html')
	})

	app.get('/teste', (req, res) => res.json({ ok: true }))

	app.listen(3333, () => {
		console.log('> acesse http://localhost:3333 para ter acesso a interface de teste para api rest')
	})
}