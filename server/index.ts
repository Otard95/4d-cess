import path from 'path'
import express from 'express'

import helmet from 'helmet'
import morgan from 'morgan'
// import cors from 'cors'

const app = express()

app.use(helmet())
app.use(morgan('short'))
// app.use(cors())

app.use('/', express.static('public'))

app.get('*', (_req, res) => {
  res.sendFile(path.resolve('./public/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
