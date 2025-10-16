const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');

const Category = Sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'categories',
    timestamps: true,
    underscored: true
});

module.exports = Category;