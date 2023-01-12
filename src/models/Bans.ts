import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mariadb';

export interface UserInstance extends Model {
    id: number,
    timestamp: number,
    hostname: string,
    address: string,
    gametype: string,
    rcon: string,
    amxban_version: string,
    amxban_motd: string,
    motd_delay: number,
    amxban_menu: number,
    reasons: number,
    timezone_fixx: number
}

export const Bans = sequelize.define<UserInstance>("Bans", {
    bid: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    player_ip: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    player_id: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    player_nick: {
        type: DataTypes.STRING,
        defaultValue: 'Unknown'
    },
    admin_ip: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    admin_id:{
        type: DataTypes.STRING,
        defaultValue: 'Unknown'
    },
    admin_nick: {
        type: DataTypes.STRING,
        defaultValue: 'Unknown'
    },
    ban_type: {
        type: DataTypes.STRING,
        defaultValue: 'S'
    },
    ban_reason:  {
        type: DataTypes.STRING,
        defaultValue: null
    },
    cs_ban_reason:  {
        type: DataTypes.STRING,
        defaultValue: null
    },
    ban_created:  {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    ban_length:  {
        type: DataTypes.INTEGER,
        defaultValue: null
    }, 
    server_ip:  {
        type: DataTypes.STRING,
        defaultValue: null
    }, 
    server_name:  {
        type: DataTypes.STRING,
        defaultValue: 'Unknown'
    }, 
    ban_kicks:  {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }, 
    expired:  {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }, 
    imported:  {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }, 
}, {
    tableName: 'amx_bans',
    timestamps: false
});