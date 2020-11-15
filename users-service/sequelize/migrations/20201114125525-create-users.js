const { modelNames } = require('../constants');

module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(`${modelNames.users}`, {
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
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
    }, {
        charset: "utf8"
    });
}


module.exports.down = (queryInterface) => queryInterface.dropTable(`${modelNames.users}`);