import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import connection from './db/conection'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!')
})

const start = async() => {
    try {
        await connection.authenticate()
        await connection.sync()

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();
