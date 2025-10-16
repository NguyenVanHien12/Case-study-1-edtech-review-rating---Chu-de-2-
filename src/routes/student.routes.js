const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const studentSchema = require('../validations/student.validation');
const validate = require('../middlewares/validate');

// Tạo học viên
router.post('/', validate(studentSchema), studentController.createStudent);

// Lấy danh sách học viên
router.get('/', studentController.getStudents);

// Lấy chi tiết học viên
router.get('/:id', studentController.getStudentById);

// Sửa thông tin học viên
router.put('/:id', validate(studentSchema), studentController.updateStudent);

// Xóa học viên
router.delete('/:id', studentController.deleteStudent);

module.exports = router;