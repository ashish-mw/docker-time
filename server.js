const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  const date = new Date()
  const localeString = `${date.toLocaleString()}`
  const toString = date.toString()
  res.send({
    data: {
      date,
      localeString,
      toString
    }
  })
})

app.listen(3456, () => {
  console.log('Server running on port 3456')
})