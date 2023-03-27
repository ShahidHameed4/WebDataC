
import express from 'express'
import { registerUser,
    loginUser,
    getMe,profile} from './UserController.js'

import protect from "./Middleware.js"
const router = express.Router()

router.post('/create', registerUser)
router.get('/get/',protect, getMe )
router.post('/login', loginUser )
router.get('/profile', profile )







export default router;