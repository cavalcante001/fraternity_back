import { Request, Response } from 'express';
import { sequelize } from '../instances/mariadb';
import { Bans } from '../models/Bans';

export const listaBans = async (req: Request, res: Response) => {
    let page = parseInt(req.params.page);
    page = ((page -1 ) * 10);
    const bans = await Bans.findAll({limit: 10, offset: page});
    const total_page = await Bans.count();

    res.json({bans, total_page})
}