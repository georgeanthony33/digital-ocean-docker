const express = require('express')
const app = express()
const port = 4567
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/status', (req, res) => res.send({status: "I'm alive!"}))

app.post('/payload', (req, res) => {
  // const reqData = JSON.parse(req.body)
  console.log(res._events)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))