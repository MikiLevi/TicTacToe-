
import express,{Request, Response} from 'express';
import userRouter from "./routing/user.routing"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(userRouter)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello bro');
});

app.listen(PORT, () => {
    console.log(`Server listen to PORT: http://localhost:${PORT}`);
});

