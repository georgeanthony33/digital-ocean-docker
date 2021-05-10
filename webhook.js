const express = require('express')
const app = express()
const port = 4567
const exec = require('sync-exec');
require('dotenv').config()

app.post('/payload', (req, res) => {
  if (req.headers['x-github-event'] === "push") {
    console.log(exec('docker build . -t digital-ocean-docker'))
    console.log(exec("docker tag digital-ocean-docker georgeanthony33/digital-ocean-docker:2.0"))
    console.log(exec('docker login'))
    console.log(exec("docker push georgeanthony33/digital-ocean-docker:2.0"))
    return res.status(200).send({ status: "done" })
  }
})

app.listen(port, () => console.log(`Webhook app listening on port ${port}!`))