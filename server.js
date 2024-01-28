const express = require('express')
const app = express()
const port = process.env.PORTURL || 3001

app.get('/blogs', (req, res) => {
  res.send('blogs World!')
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})