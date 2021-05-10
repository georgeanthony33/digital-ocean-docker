const express = require('express')
const app = express()
const port = 4567
const exec = require('sync-exec');
require('dotenv').config()

app.post('/payload', (req, res) => {
  if (req.headers['x-github-event'] === "push") {
    console.log(exec('docker build . -t digital-ocean-docker'))
    console.log(exec("docker tag digital-ocean-docker georgeanthony33/digital-ocean-docker"))
    console.log(exec('docker login'))
    console.log(exec("docker push georgeanthony33/digital-ocean-docker"))
    return res.status(200).json({ "status": "ok" })
  }
})

app.listen(port, () => console.log(`Webhook app listening on port ${port}!`))