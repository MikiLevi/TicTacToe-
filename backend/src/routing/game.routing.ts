import express from 'express';
const gameRouter = express.Router();

gameRouter.get("./games", ()=> console.log("games/"));
gameRouter.post("./games/start", ()=> console.log("games/"));


export default gameRouter;