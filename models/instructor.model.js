const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');

const Instructor = Sequelize.define('Instructor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    bio: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'instructors',
    timestamps: true,
    underscored: true
});

module.exports = Instructor;