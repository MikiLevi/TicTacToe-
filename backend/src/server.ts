
import express,{Request, Response} from 'express';
import userRouter from "./routing/user.routing";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(userRouter)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello bro');
});

app.listen(PORT, () => {
    console.log(`Server listen to PORT: http://localhost:${PORT}`);
});

console.log("ENV",process.env.PORT);
