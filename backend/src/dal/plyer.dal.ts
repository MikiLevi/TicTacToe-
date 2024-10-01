import {Plyer} from "../module/plyer.model";
import {getFromDb, wirteToDb} from "./service.dal";
import {createPlyer} from"../service/plyer.service";
import dotenv from "dotenv"
dotenv.config();
const FILE_NAME = process.env.PLYER_FILE_NAME as string;

console.log(process.env.PORT);

export async function getAllPlyers(): Promise<Plyer[]> {
    return getFromDb<Plyer>(FILE_NAME);
}
export async function addNewPlyerToDb(plyer:Plyer): Promise<void> {
    console.log(FILE_NAME);
    
    const plyers:Plyer[] = await getFromDb<Plyer>(FILE_NAME);    
    console.log("in", plyers);
    plyers.push(plyer);
    await wirteToDb<Plyer>(FILE_NAME, plyers);
}


