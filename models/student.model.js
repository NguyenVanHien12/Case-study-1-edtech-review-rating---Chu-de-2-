const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');

const Student = Sequelize.define('Student', {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'students',
    timestamps: true,
    underscored: true
});

module.exports = Student;