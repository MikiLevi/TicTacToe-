import { Request, Response } from 'express';
import { Player } from '../module/player.model';
import {addNewPlayerToDb} from '../dal/plyer.dal';
import { createPlyer } from '../service/player.service';
// import hhh from '../dal/plyer.dal';
import { hash } from 'crypto';



export const addNewPlyer = async (req: Request, res: Response) => {
    try {
        const {name , password} = req.body
        console.log(name, password);
        
        const play: Player = await createPlyer(name, password);
        await addNewPlayerToDb(play); 
        res.status(201).json(play.id);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating the player', error});
    }
};





