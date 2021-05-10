const express = require('express')
const app = express()
const port = 4567
const exec = require('sync-exec');

app.post('/payload', (req, res) => {
  if (req.headers['x-github-event'] === "push") {
    const dockerTag = req.headers['x-github-delivery']
    console.log(dockerTag)
    console.log(exec('docker build . -t digital-ocean-docker'))
    console.log(exec(`docker tag digital-ocean-docker georgeanthony33/digital-ocean-docker:${dockerTag}`))
    console.log(exec('docker login'))
    console.log(exec(`docker push georgeanthony33/digital-ocean-docker:${dockerTag}`))
    console.log(exec('ssh -i id_rsa root@138.68.169.66'))
    console.log(exec('service docker restart'))
    console.log(exec(`docker run -p 3000:3000 georgeanthony33/digital-ocean-docker:${dockerTag}`))
    console.log(exec('echo 1'))
  }
})

app.listen(port, () => console.log(`Webhook app listening on port ${port}!`))