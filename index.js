const express = require('express')
const app = express()
const port = 3000

app.get('/home/tintuc', (req, res) => {
  res.send('Hello Phúc Hoàng Văn!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on at http://localhost:${port}`)
})