import express from 'express'
import cors from 'cors' // important for recieving api calls

import * as dotenv from 'dotenv';
import userRouter from './Routes/User.js'
import ArticleRouter from './Routes/ArticleRoute.js'
dotenv.config();
import connectDB from './database/db.js'
connectDB();
const app = express()
app.use(cors()) // important for recieving api calls
app.use(express.static('public'))
app.use(express.json())


app.use('/api/user', userRouter)
app.use('/api/article', ArticleRouter)






app.listen(3001)
