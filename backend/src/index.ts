import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'


import { connection } from './db/connection'
import router from './routes/index'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 
app.use('/api', router)
 
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!')
})

const start = async() => {
    try {
        connection.initialize().then(() => {
            console.log('Connection succesfull')
        }).catch((error) => console.log(error))

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
