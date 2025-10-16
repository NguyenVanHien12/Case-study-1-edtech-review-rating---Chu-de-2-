const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');

const Course = Sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }, 
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    instructor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'courses',
    timestamps: true,
    underscored: true
});

module.exports = Course;