const express = require('express')
const cors = require('cors')
const port = 1000
const app = express()
require('./helpers/dbConfig')

app.use(express.json())
app.use(cors())

app.use('/posts', require('./routes/posts'))

app.listen(port, () => console.log(`Server ${port} is in the air`))