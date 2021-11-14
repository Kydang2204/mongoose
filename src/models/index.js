const mongoose = require('mongoose')

mongoose.connect(process.env.MONGDB_ACCESS_POINT, () => {
  console.log('connect db successfully')
})
require('./user')
