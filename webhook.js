const express = require('express')
const app = express()
const port = 4567
const exec = require('sync-exec');
const SSH = require('simple-ssh');
require('dotenv').config()

app.post('/payload', (req, res) => {
  if (req.headers['x-github-event'] === "push") {
    const dockerTag = req.headers['x-github-delivery']
    console.log(dockerTag)
    console.log(exec('docker build . -t digital-ocean-docker'))
    console.log(exec(`docker tag digital-ocean-docker georgeanthony33/digital-ocean-docker:${dockerTag}`))
    console.log(exec('docker login'))
    console.log(exec(`docker push georgeanthony33/digital-ocean-docker:${dockerTag}`))
    console.log(exec('ssh -i id_rsa root@138.68.169.66'))
    const ssh = new SSH({
      host: process.env.host,
      user: process.env.user,
      pass: process.env.pass,
    });
    ssh.exec('service docker restart', {
      out: function(stdout) {
          console.log(stdout)
      }
    }).start()
    ssh.end()
    // ssh.exec('service docker restart', { out: function (stdout) { console.log(stdout); } }).start()
    // ssh.exec(`docker run -p 3000:3000 georgeanthony33/digital-ocean-docker:1.9`, { out: function (stdout) { console.log(stdout); } }).start()
    console.log(exec('echo hello'))
  }
})

app.listen(port, () => console.log(`Webhook app listening on port ${port}!`))