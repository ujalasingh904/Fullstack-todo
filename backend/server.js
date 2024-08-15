import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/todoRoute.js'
import cors from "cors"
dotenv.config()

const app = express()
const port = process.env.port || 5000

app.use(express.json())
app.use(cors(
    {
        origin: "https://fullstack-todo-frontend-lovat.vercel.app",
        credentials: true
    }
))

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('connected to mongodb successfully'))
    .catch((err) => console.log(err))


app.use(routes)
app.listen(port, () => console.log(`listening at port: ${port}`))
