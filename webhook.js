const express = require('express')
const app = express()
const port = 4567
const exec = require('sync-exec');

app.post('/payload', (req, res) => {
  if (req.headers['x-github-event'] === "push") {
    const dockerTag = req.headers['x-github-delivery']
    exec('docker build . -t digital-ocean-docker')
    exec(`docker tag digital-ocean-docker georgeanthony33/digital-ocean-docker:${dockerTag}`)
    exec('docker login')
    exec(`docker push georgeanthony33/digital-ocean-docker:${dockerTag}`)
    exec('ssh -i id_rsa root@138.68.169.66')
    exec('service docker restart')
    exec(`docker run -p 3000:3000 georgeanthony33/digital-ocean-docker:${dockerTag}`)
  }
})

app.listen(port, () => console.log(`Webhook app listening on port ${port}!`))