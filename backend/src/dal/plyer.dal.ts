import {Player} from "../module/player.model";
import {getFromDb, wirteToDb} from "./service.dal";

export async function getAllPlayers(): Promise<Player[]> {
    return getFromDb<Player>("plyers.json");
}
export async function addNewPlayer(): Promise<string> {
    return getFromDb<Player>("players.json");
}

