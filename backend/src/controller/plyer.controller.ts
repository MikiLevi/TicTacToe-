import { Request, Response } from 'express';
import { Player } from '../module/player.model';
import { createPlyer } from '../service/player.service';
import { hash } from 'crypto';



export const addNewPlyer = async (req: Request, res: Response) => {
    try {
        const name: string = req.body.name;
        const password: string = req.body.passwordHash;
        const play: Player = await createPlyer(name, password);
        res.status(201).json(play);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating the player' });
    }
};
