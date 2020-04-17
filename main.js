
const callErro = err => { throw new Error(err) }

const main = ({ type, data }, cb) => {
	let validTypes = ['express', 'server']

	validTypes.indexOf(type) !== -1 ? quickapiFunctions[type](data, cb) : callErro('argument type is invalid')
}

const quickapiFunctions = {
	server: (data, cb) => {
		require('./src/server')(data)
	},
	express: (data, cb) => {
		require('./src/qa-express')(data, cb)
	}
}

module.exports = main