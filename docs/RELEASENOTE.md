# 📝 RELEASE NOTES – NHẬT KÝ PHÁT HÀNH

Tài liệu này ghi lại toàn bộ các thay đổi, tính năng mới, lỗi đã khắc phục và các hạn chế còn tồn tại qua các phiên bản phát hành của dự án **Personal Portfolio CV – Vũ Tùng Dương**.

---

## 🚀 [Phiên bản v1.0.0] – 05/11/2026

> **Giai đoạn**: Bản phát hành chính thức đầu tiên (First Official Release - Genesis Version)  
> **Tác giả**: Vũ Tùng Dương  
> **Trạng thái**: Hoạt động ổn định (Stable)

---

### ✨ 1. Chức năng mới (New Features)

#### 🎨 Giao diện & Kiến trúc tổng thể
- **Triết lý Mobile-First**: Xây dựng toàn bộ layout từ thiết bị di động nhỏ nhất (~360px), tự động nâng cấp mượt mà lên Tablet (≥768px) và Desktop (≥1280px).
- **Hệ thống Design Tokens (CSS Custom Properties)**: Quản lý tập trung toàn bộ biến màu sắc (`--color-primary`, `--color-accent`,...), hệ thống font chữ native, khoảng cách (`--space-*`), độ bo góc và đổ bóng tại `:root`.
- **Vanilla HTML5 & CSS3 thuần**: Tối ưu hiệu năng 100%, không sử dụng thư viện cồng kềnh, tải trang tức thì.

#### 🧭 Thanh điều hướng & Nhận diện thương hiệu (Header & Navigation)
- Thiết kế thanh điều hướng dính đầu trang (`position: sticky`) với logo thương hiệu cá nhân.
- Tích hợp hiệu ứng cuộn mượt (`scroll-behavior: smooth`) điều hướng nhanh chóng tới các phân vùng: *Giới thiệu*, *Kỹ năng*, *Dự án*, *Liên hệ*.

#### 👤 Khu vực giới thiệu cá nhân (Hero Section)
- Khối Hero trực quan với avatar đại diện bo tròn, tiêu đề định vị chuyên môn (*Frontend Developer & UI Enthusiast / AI & Backend Enthusiast*).
- Cụm nút kêu gọi hành động (Call to Action - CTA): *"Xem dự án"* và *"Liên hệ tôi"*.

#### 🛠️ Danh mục kỹ năng (Skills Showcase)
- Bố cục Flexbox dạng thẻ chip hiện đại (`.skill-chip`) tương tác linh hoạt.
- Phân loại đầy đủ các kỹ năng cốt lõi:
  - **Lập trình**: C#, Python, SQL.
  - **Frameworks & Thư viện**: ASP.NET Core MVC, Entity Framework, PyTorch, OpenCV, UNet++, EfficientNet.
  - **Cơ sở dữ liệu**: Microsoft SQL Server, MySQL.
  - **Công cụ & Kỹ năng khác**: Git & GitHub, Visual Studio, VS Code, Google Colab, Multimodal AI Evaluation, AI Annotation.

#### 💼 Danh sách dự án nổi bật (Projects Showcase)
- Bố cục dạng thẻ card sử dụng **CSS Grid** (`.project-grid`) với hiệu ứng đổ bóng và hover tinh tế:
  1. **AI-based Colon Polyp Detection System**: Hệ thống phát hiện và phân đoạn polyp đại tràng bằng mô hình học sâu (UNet++, EfficientNet-B4, Gradio).
  2. **AI Space Defender**: Trò chơi mô phỏng không gian tương tác bằng Python & AI.
  3. **FastFood Online Management System**: Website quản lý và bán đồ ăn trực tuyến (C#, ASP.NET Core MVC, SQL Server, EF Core).
- Mỗi thẻ dự án tích hợp ảnh bìa tỷ lệ chuẩn, mô tả mục tiêu, nhãn công nghệ (tag chips) và đường dẫn xem chi tiết.

#### 📬 Khu vực liên hệ (Contact Section) & Chân trang (Footer)
- Danh sách thông tin liên lạc rõ ràng gồm Email cá nhân (`vutungduong0@gmail.com`), tài khoản GitHub và LinkedIn.
- Footer hiển thị bản quyền năm 2026 kèm nút bấm *"↑ Lên đầu trang"* tiện lợi.

#### 🐳 Đóng gói môi trường & Triển khai (DevOps & Docs)
- Bổ sung tài liệu hướng dẫn [README.md](../README.md) đầy đủ và chi tiết bằng tiếng Việt cho Windows, macOS, Linux và Docker.
- Cung cấp [Dockerfile](../Dockerfile) trên nền **Nginx Alpine** siêu nhẹ (~25MB) và [docker-compose.yml](../docker-compose.yml) giúp khởi chạy trang web với 1 câu lệnh duy nhất.

---

### 🐛 2. Lỗi đã sửa (Bug Fixes)

- **Sửa lỗi hiển thị tiêu đề trang & Metadata**: Cập nhật chuẩn hóa `<title>Vũ Tùng Dương·CV</title>` và thẻ meta tác giả.
- **Khắc phục lỗi tràn ngang màn hình (Horizontal Overflow)**:
  - Bổ sung `overflow-x: hidden` trên `body` nhằm ngăn chặn thanh cuộn ngang ngoài ý muốn trên một số trình duyệt di động.
  - Thiết lập `max-width: 100%` và `height: auto` cho toàn bộ thẻ `<img>` để ảnh không bị tràn khung chứa.
- **Sửa lỗi thụt lề và chuẩn hóa mã nguồn HTML5**:
  - Tái cấu trúc phân cấp thẻ lồng nhau trong `index.html`.
  - Khắc phục các cảnh báo liên quan đến thiếu thẻ đóng hoặc thụt dòng không đồng đều.
- **Tối ưu hiện tượng giật layout (Cumulative Layout Shift - CLS)**:
  - Khai báo rõ ràng thuộc tính `width` và `height` trên các thẻ `<img>` (avatar và ảnh dự án) giúp trình duyệt tính toán kích thước trước khi tải ảnh.
- **Cải thiện độ tương phản văn bản**:
  - Điều chỉnh độ tương phản giữa màu chữ phụ (`--color-text-soft: #64748b`) và màu nền để đáp ứng tiêu chuẩn tiếp cận WCAG 2.1 AA.

---

### ⚠️ 3. Hạn chế còn tồn tại (Known Issues & Limitations)

Dù phiên bản v1.0 đã đáp ứng tốt yêu cầu trưng bày thông tin, dự án vẫn còn một số điểm giới hạn dự kiến sẽ hoàn thiện ở các phiên bản kế tiếp:

1. **Chưa hỗ trợ Chế độ Tối (Dark Mode)**:
   - Giao diện hiện tại chỉ có một chủ đề sáng mặc định (Light Theme), chưa có nút bật/tắt Dark Mode hoặc tự động nhận diện `prefers-color-scheme`.
2. **Liên kết dự án còn ở dạng giữ chỗ**:
   - Nút *"Xem chi tiết →"* trên các thẻ card dự án hiện đang trỏ tới `#`, chưa liên kết trực tiếp tới repository mã nguồn hoặc trang demo trực tiếp tương ứng.
3. **Chưa có biểu mẫu liên hệ trực tiếp (Contact Form)**:
   - Mục liên hệ hiện mở trực tiếp ứng dụng mail qua giao thức `mailto:`, chưa có form nhập thông tin (Tên, Email, Lời nhắn) tích hợp backend API (Formspree, EmailJS) để gửi thư tức thì.
4. **Chưa hỗ trợ Đa ngôn ngữ (i18n)**:
   - Nội dung trang web hiện chỉ có Tiếng Việt, chưa hỗ trợ nút chuyển ngữ song ngữ Anh - Việt cho nhà tuyển dụng quốc tế.
5. **Dữ liệu tĩnh chưa được động hóa**:
   - Toàn bộ danh sách kỹ năng và dự án đang được viết cứng (hard-coded) trực tiếp trong HTML, chưa tách riêng ra file cấu hình `data.json` hoặc nạp động bằng JavaScript.

---

### 📋 4. Kế hoạch cho phiên bản tiếp theo (v1.1.0 Roadmap)

- [ ] Tích hợp Theme Switcher (Chế độ Dark/Light mode lưu trạng thái vào `localStorage`).
- [ ] Gắn link GitHub repository và Live Demo chính thức cho 3 dự án tiêu biểu.
- [ ] Xây dựng Contact Modal / Form có kiểm tra hợp lệ dữ liệu (validation) và gửi mail qua API.
- [ ] Bổ sung chuyển đổi ngôn ngữ Việt - Anh.
- [ ] Thêm hiệu ứng xuất hiện khi cuộn trang (Scroll Reveal Animations).

---

<p align="center">
  <b>© 2026 Vũ Tùng Dương. Mọi quyền được bảo lưu.</b>
</p>

