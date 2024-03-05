import { Response } from 'express'

class UserController {

    async seyHi(res: Response) {
        try {
           console.log('Hello word')
        } catch (e) {
            console.log(e)
        }
    }
}

export default new UserController
