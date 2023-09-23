const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');


const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        validate: {
            isEmail: {
                msg: 'Invalid Email'
            }
        },
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(),
        validate: {
            min: 6,
        }
    }

}, {
    freezeTableName: true,
    tableName: 'users',
    timestamps: true,
    underscored: true

});

module.exports = User;