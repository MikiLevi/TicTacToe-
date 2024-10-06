import {Player} from "../module/player.model";
import {getFromDb, wirteToDb} from "./service.dal";
// import {createPlyer} from"../service/player.service";
import dotenv from "dotenv"
dotenv.config();
const FILE_NAME = process.env.PLYER_FILE_NAME as string;


export async function getAllPlyers(): Promise<Player[]> {
    return getFromDb<Player>(FILE_NAME);
}
export async function addNewPlayerToDb(Player:Player): Promise<any> {

    try{
        const Players:Player[] = await getFromDb<Player>(FILE_NAME);    
        console.log("in", Players);
        Players.push(Player);
        await wirteToDb<Player>(FILE_NAME, Players);
    }
    catch(err){
        console.error("Error adding new player to the database", err);
    }
}


