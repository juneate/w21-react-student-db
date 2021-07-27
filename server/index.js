const path = require('path')
const express = require('express')
const livereload = require('livereload')
const connectLiveReload = require('connect-livereload')
const app = express()
const port = 8080

const liveReloadServer = livereload.createServer()
liveReloadServer.watch(path.join(__dirname, '../dist'))

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/")
  }, 100)
})

app.use(connectLiveReload())

app.use('/', express.static('dist'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))


app.listen(port, () => console.log(`Connected on port ${port}.`))