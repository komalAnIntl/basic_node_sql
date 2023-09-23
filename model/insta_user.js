const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const instaUser = sequelize.define('insta_user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    user_name: {
        type: DataTypes.STRING(25),
        allowNull: false
    }

}, {
    sequelize,
    freezeTableName: true,
    tableName: 'insta_users',
    timestamps: true,
    underscored: true

});

module.exports = instaUser;