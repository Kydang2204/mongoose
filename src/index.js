require('dotenv-safe').config()
require('./models')

const app = require('fastify')({ logger: true })
console.log(process.env.A)
app.register(require('./routes'))
app.listen(3000)
