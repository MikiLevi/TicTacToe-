import {v4 as uuid} from "uuid";
import {Plyer} from "../module/plyer.model";
import bcrypt from "bcrypt"


export async function createPlyer(plyerName:string, password:string):Promise<Plyer> {
    const passwordHash:string = await bcrypt.hash(password, 10)
    const plyer:Plyer = {
        id: uuid(),
        plyerName,
        passwordHash
    }
    return plyer
}