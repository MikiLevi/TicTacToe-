import express,{Request, Response} from 'express';
const userRouter = express.Router();

userRouter.post("./auth/register", ()=> console.log("register/auth"));
userRouter.post("./auth/login", ()=> console.log("login/auth/"));


export default userRouter;