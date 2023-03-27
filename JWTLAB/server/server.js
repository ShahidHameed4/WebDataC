import express from 'express'
import cors from 'cors' // important for recieving api calls

import * as dotenv from 'dotenv';
import userRouter from './User.js'
import ArticleRouter from './ArticleRoute.js'
dotenv.config();
import connectDB from './db.js'
connectDB();
const app = express()
app.use(cors()) // important for recieving api calls
app.use(express.static('public'))
app.use(express.json())


app.use('/api/user', userRouter)
app.use('/api/article', ArticleRouter)






app.listen(3001)
