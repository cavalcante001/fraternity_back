import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
   'ftn_clan',
    'ftn_clan',
    '488biY#x',
    {
        dialect: 'mariadb',
        host: '67.23.238.68',
        port: 3306
    }
  );