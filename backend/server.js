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
<<<<<<< HEAD
        origin: "http://localhost:5173",
        credentials: true
=======
        origin: "https://fullstack-todo-blue.vercel.app",
        ceredentaials: true
>>>>>>> f6c7ddd4a9a1178ffa94c4d82741e3e94cdde2e2
    }
))

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('connected to mongodb successfully'))
    .catch((err) => console.log(err))


app.use(routes)
app.listen(port, () => console.log(`listening at port: ${port}`))
