import { Router } from "express"
import UserController from "../controllers/UserController"
const userRout = Router()

userRout.get('',  UserController.seyHi)

export default userRout


