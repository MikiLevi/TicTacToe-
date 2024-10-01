import {v4 as uuid} from "uuid";
import {Player} from "../module/player.model";
import bcrypt from "bcrypt"


export async function createPlyer(playerName:string, password:string):Promise<Player> {
    const passwordHash:string = await bcrypt.hash(password, 10)
    const plyer:Player = {
        id: uuid(),
        playerName: playerName,
        passwordHash
    }
    return plyer
}