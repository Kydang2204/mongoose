require('dotenv-safe').config()
require('./models')

const app = require('fastify')({ logger: true })

app.register(require('./routes'))
app.listen(3000)
