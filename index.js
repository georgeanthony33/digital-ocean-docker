const express = require('express')
const app = express()
const port = 4567
const exec = require('sync-exec');

app.get('/status', (req, res) => res.send({status: "I'm alive!"}))

app.post('/payload', (req, res) => {
  
  if (req.headers['x-github-event'] === "push") {
    const dockerTag = req.headers['x-github-delivery']
    console.log(exec('echo 1'))
    console.log(exec('docker build . -t digital-ocean-docker'))
    console.log(exec(`docker tag digital-ocean-docker georgeanthony33/${dockerTag}`))
    console.log(exec('echo 2'))
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))