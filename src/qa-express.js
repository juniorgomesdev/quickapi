const path = require('path')

module.exports = function quickApi({ express, server, port }, callback) {

	try {
		const dir = path.join(__dirname, '/views')
		server.use('/public', express.static(dir))

		server.get('/quickapi', (req, res) => {
			res.sendFile(dir + '/index.html')
		})

		callback(null, `open you browser in http://localhost:${port}/quickapi`)
	} catch(err) {
		callback(err, null)
	}
}