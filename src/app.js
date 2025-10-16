const express = require('express');
const sequelize = require('../config/database');const studentRoutes = require('./routes/student.routes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware, routes, etc. sẽ thêm ở đây
app.use(express.json());
app.use('/students', studentRoutes);

// Kiểm tra kết nối DB khi khởi động server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Khởi động server với Express
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});