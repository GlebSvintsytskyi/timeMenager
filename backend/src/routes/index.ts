import { Router } from "express"
import userRoute from "./userRoute"
const router = Router()

// router.use('user', userRoute)
router.use('/user', userRoute)

export default router



