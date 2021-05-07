const express = require('express')
const app = express()
const port = 4567
const exec = require('sync-exec');

app.get('/status', (req, res) => res.send({status: "I'm alive!"}))

app.post('/payload', (req, res) => {
  
  if (req.headers['x-github-event'] === "push") {
    // const dockerTag = req.headers['x-github-delivery']
    // exec('docker build . -t digital-ocean-docker')
    // exec(`docker tag digital-ocean-docker georgeanthony33/digital-ocean-docker:${dockerTag}`)
    // exec('docker login')
    // exec(`docker push georgeanthony33/digital-ocean-docker:${dockerTag}`)
    // exec('ssh -i id_rsa root@138.68.169.66')
    // exec(`docker run -p 4567:3000 georgeanthony33/digital-ocean-docker:${dockerTag}`)
    console.log(exec('echo 1'))
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))