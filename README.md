## Quick test rest API right in the browser - beta version

# init

```js
// if you use express
const quickapi = require('quickapi-server')({
	type: 'express',
	data: {
		express, // module
		server, // function express() 
		port, // port used in server.listen()
	}
}, (err, msg) => {
	console.log(msg) // callback function
})

// else, use:
const quickapi = require('quickapi-server')({ type: 'server', data: { port: 3333 }}, null)
// use the preferred port

// a message will be displayed on the console
```

