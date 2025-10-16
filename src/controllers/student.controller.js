const { Student } = require('../../models');

exports.createStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Kiểm tra email đã tồn tại chưa
        const existing = await Student.findOne({ where: { email } });
        if (existing) {
            return res.status(400).json({ message: 'Email đã tồn tại.' });
        }
        // Tạo mới student
        const student = await Student.create({ name, email, password });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.findAll({
            attributes: ['id', 'name', 'email'],
            limit: 20,
            order: [['id', 'ASC']] //Sap xep ket qua tang dan theo truong id
        });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        //Kiem tra sinh vien co ton tai ko
        const student = await Student.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email']
        });
        if(!student) {
            return res.status(404).json({message: 'Khong ton tai sinh vien tren trong database'});
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        //Kiem tra student co ton tai hay khong
        const student = await Student.findByPk(req.params.id);
        if(!student) {
            return res.status(404).json({message: 'Student does not found in Database'});
        }
        // Kiểm tra email mới có bị trùng với student khác không
        if (email && email !== student.email) {
            const existing = await Student.findOne({ where: { email } });
            if (existing) {
                return res.status(400).json({ message: 'Email đã tồn tại.' });
            }
        }
        await student.update({name, email, password});
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        // Kiểm tra student có tồn tại không
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Không tìm thấy học viên.' });
        }
        await student.destroy();
        res.status(200).json({ message: 'Đã xóa học viên thành công.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}