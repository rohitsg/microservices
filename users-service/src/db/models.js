import { DataTypes, Model } from 'sequelize';

import sequelize from '#root/db/connection.js';

export class Users extends Model {}

Users.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    passwordHash: {
        allowNull: false,
        type: DataTypes.CHAR(64)
    },
}, {
    modelName: 'users',
    sequelize,
    defaultScope: {
        rawAttributes: { exclude: ["passwordHash"] }
    }
});


export class UserSessions extends Model {}

UserSessions.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    userId: {
        allowNull: false,
        references: {
            key: 'id',
            model: 'users'
        },
        type: DataTypes.UUID
    },
    expiresAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
}, {
    modelName: 'userSessions',
    sequelize,
    updatedAt: false,
    paranoid: false
});