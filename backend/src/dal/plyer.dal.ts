import {Player} from "../module/player.model";
import {getFromDb, wirteToDb} from "./service.dal";
import {createPlyer} from"../service/player.service";
import dotenv from "dotenv"
dotenv.config();
const FILE_NAME = process.env.PLYER_FILE_NAME as string;

console.log(process.env.PORT);

export async function getAllPlyers(): Promise<Player[]> {
    return getFromDb<Player>(FILE_NAME);
}
export async function addNewPlayerToDb(Player:Player): Promise<void> {
    console.log(FILE_NAME);
    
    const Players:Player[] = await getFromDb<Player>(FILE_NAME);    
    console.log("in", Players);
    Players.push(Player);
    await wirteToDb<Player>(FILE_NAME, Players);
}


