import {Plyer} from "../module/plyer.model";
import {getFromDb, wirteToDb} from "./service.dal";

export async function getAllPlyers(): Promise<Plyer[]> {
    return getFromDb<Plyer>("plyers.json");
}
export async function addNewPlyer(): Promise<string> {
    return getFromDb<Plyer>("plyers.json");
}

