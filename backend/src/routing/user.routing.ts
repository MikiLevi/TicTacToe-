import express from 'express';
const userRouter = express.Router();

import {addNewPlyer} from "../controller/plyer.controller"

userRouter.post("/auth/register/", addNewPlyer);

userRouter.post("/auth/login", () => console.log("login/auth/"));


export default userRouter;