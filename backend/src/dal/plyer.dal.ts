import {Plyer} from "../module/plyer.model";
import {getFromDb, wirteToDb} from "./service.dal";
const FILE_NAME = process.env.plyer_file_name as string;

export async function getAllPlyers(): Promise<Plyer[]> {
    return getFromDb<Plyer>(FILE_NAME);
}
export async function addNewPlyerToDb(plyer:Plyer): Promise<void> {

    const plyers:Plyer[] = await getFromDb<Plyer>("plyers.json");
    plyers.push(plyer);
    await wirteToDb<Plyer>(FILE_NAME, plyers);
}

