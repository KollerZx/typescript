import express from 'express'

const app = express()
const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
  return res.send('Hello World 2')
})

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})
