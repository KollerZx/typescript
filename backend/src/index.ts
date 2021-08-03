import express from 'express'
import routes from './routes'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})

export default app
