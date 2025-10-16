# Lesson Learned – Buổi 1

## ✅ Điểm làm tốt

- Đã tổ chức quy trình chuẩn: khởi tạo DB → thiết kế ERD → tạo model → migration → seeder → kiểm thử.
- Đảm bảo các bảng đều chuẩn hóa 3NF, có đầy đủ ràng buộc (FK, UNIQUE, NOT NULL).
- Sử dụng Sequelize ORM đúng chuẩn, tách biệt rõ model, migration, seeder, validation.
- Áp dụng middleware validate (Joi) để kiểm soát dữ liệu đầu vào, chống SQL injection hiệu quả.
- Đã seed dữ liệu mẫu hợp lệ, không bị lỗi trùng lặp hay sai kiểu.
- Đã kiểm thử kỹ các trường hợp CRUD, dữ liệu bất thường, injection và ghi lại kết quả minh họa bằng ảnh.

---

## ⚠️ Lỗi gặp phải & cách xử lý

- **Lỗi thiếu quyền REFERENCES/DROP khi migrate/rollback:**  
  → Đã cấp thêm quyền cho user MySQL bằng lệnh GRANT ALL PRIVILEGES.
- **Lỗi trùng email khi seed hoặc update:**  
  → Đã bổ sung kiểm tra trùng email ở controller, đồng thời giữ ràng buộc UNIQUE ở DB.
- **Lỗi thiếu trường created_at/updated_at khi dùng migration thủ công:**  
  → Đã chuyển sang dùng `timestamps: true, underscored: true` trong model Sequelize để tự động đồng bộ với DB.
- **Lỗi mapping tên bảng hoặc trường không khớp:**  
  → Đã bổ sung `tableName` và `underscored` trong options của model để đồng nhất với DB.
- **Lỗi validation đầu vào chưa chặt:**  
  → Đã bổ sung middleware validate cho tất cả route CRUD.

---

## 💡 Cải thiện buổi sau

- **Chuẩn hóa đặt tên bảng, trường:**  
  Thống nhất dùng snake_case cho tên bảng và trường, tránh nhầm lẫn khi mapping ORM.
- **Tách seed file rõ ràng:**  
  Nên tách seed cho từng bảng, đặt tên rõ ràng, dễ quản lý và rollback.
- **Thêm index cho các trường truy vấn nhiều:**  
  Chủ động tạo migration thêm index cho các trường như student_id, course_id, enrollment_id để tối ưu hiệu năng.
- **Tách riêng thư mục docs cho tài liệu thiết kế:**  
  Để ảnh ERD, dbdiagram, tài liệu phân tích vào thư mục docs/design, không lẫn với screenshots kiểm thử.
- **Tự động hóa kiểm thử:**  
  Có thể bổ sung test script tự động (Jest, Mocha) cho các API quan trọng.
- **Ghi chú lại các lỗi và giải pháp ngay khi gặp:**  
  Để dễ tổng hợp, chia sẻ kinh nghiệm cho các buổi sau.

---

## Tổng kết

- CSDL đã hoạt động ổn định, dữ liệu hợp lệ, các ràng buộc được kiểm soát tốt.
- Đã có quy trình làm việc rõ ràng, dễ mở rộng và bảo trì.
- Đã rút ra nhiều bài học thực tế để cải thiện chất lượng dự án ở các buổi tiếp theo.