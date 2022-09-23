import express from 'express'
import serveStatic from 'serve-static'
import { join } from 'path'

const app = express()

// Here we are configurinng dist to srve app files
app.use('/', serveStatic(join(__dirname, 'dist')))

// this * route is to serve project on different page routes except root '/'
app.get(/.*/, function (req, res) {
  res.sendFile(join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)
