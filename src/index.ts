import express from 'express'
import showUser from './routes'

const app = express()

app.get('/', showUser)

app.listen(3333)
