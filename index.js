const express = require('express')
const app = express()
const port = 3000

app.get('/status', (req, res) => res.send({status: "Hello world!"}))

app.listen(port, () => console.log(`Status app listening on port ${port}!`))