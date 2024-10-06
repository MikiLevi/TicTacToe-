import {v4 as uuid} from "uuid";
import {Player} from "../module/player.model";
import bcrypt from "bcrypt"
    

export async function createPlyer(playerName:string, password:string):Promise<Player> {
    try{
        const passwordHash:string = await bcrypt.hash(password.toString(), 10)
        const player:Player = {
            id: uuid(),
            playerName: playerName,
            passwordHash
        }
        return player
    }
    catch(error){
        console.error("Error hashing password", error);
        throw new Error("Error hashing password")
    }
    
}