import express from 'express'

import helmet from 'helmet'
import morgan from 'morgan'
// import cors from 'cors'

const app = express()

app.use(helmet())
app.use(morgan('short'))
// app.use(cors())

app.use(express.static('public'))

app.listen(process.env.PORT || 5000)
