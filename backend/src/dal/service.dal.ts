import jsonfile from "jsonfile";

const BASE_PATH = "src/dal/"
export async function getFromDb<T>(fileName:string):Promise<T[]> {

        const plyers:T[] = await jsonfile.readFile(BASE_PATH +fileName);
        return plyers;
}

export async function wirteToDb<T>(fileName:string, data:T[]): Promise<void> {
    await jsonfile.writeFile(BASE_PATH +fileName, data, { spaces: 2 });
}