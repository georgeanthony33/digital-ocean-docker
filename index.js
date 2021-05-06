const express = require('express')
const app = express()
const port = 4567

app.get('/status', (req, res) => res.send({status: "I'm alive!"}))

app.post('/payload', (req, res) => console.log(res))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))