const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello to the World!')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/Contact', (req, res) => {
    res.send('Contact Us')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})