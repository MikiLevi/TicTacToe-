import jsonfile from "jsonfile";

const FILE_NAME:string = ""

export async function getFromDb<T>(fileName:string):Promise<T[]> {

        const plyers:T[] = await jsonfile.readFile(FILE_NAME);
        return plyers;
}

export async function wirteToDb<T>(fileName:string, data:T[]): Promise<void> {
    await jsonfile.writeFile(FILE_NAME, data, { spaces: 2 });
}