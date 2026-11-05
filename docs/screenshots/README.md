# 📸 Thư mục lưu trữ ảnh chụp màn hình kiểm thử Responsive

Thư mục này dùng để lưu trữ các hình ảnh chụp thực tế giao diện của trang web trên các kích thước màn hình phục vụ báo cáo kiểm thử tại [`docs/test_report.md`](../test_report.md).

---

## 📁 Danh sách tệp hình ảnh quy định:

1. **`responsive-mobile.png`**:
   - Ảnh chụp giao diện trên điện thoại di động (kích thước đề xuất: `375 x 812` hoặc `390 x 844` - iPhone SE / iPhone 12 Pro).
2. **`responsive-tablet.png`**:
   - Ảnh chụp giao diện trên máy tính bảng (kích thước đề xuất: `768 x 1024` hoặc `820 x 1180` - iPad Mini / iPad Air).
3. **`responsive-desktop.png`**:
   - Ảnh chụp giao diện trên máy tính để bàn (kích thước đề xuất: `1440 x 900` hoặc `1920 x 1080` - Desktop HD / Full HD).

---

## 🛠️ Hướng dẫn cách chụp ảnh nét đẹp bằng DevTools (Không bị dính thanh công cụ):

1. Mở trang web `index.html` trên trình duyệt **Google Chrome** hoặc **Microsoft Edge**.
2. Nhấn phím **`F12`** (hoặc `Ctrl + Shift + I`).
3. Nhấn tổ hợp phím **`Ctrl + Shift + M`** để bật thanh giả lập thiết bị (*Toggle Device Toolbar*).
4. Chọn thiết bị (ví dụ: *iPhone 12 Pro* hoặc *iPad Mini*, hoặc nhập kích thước chiều rộng/cao).
5. Nhấn tổ hợp phím **`Ctrl + Shift + P`** để mở Command Menu của DevTools.
6. Gõ chữ: `Capture full size screenshot` (chụp toàn trang từ đầu đến cuối) hoặc `Capture screenshot` (chụp vừa khung nhìn) rồi nhấn **Enter**.
7. Đổi tên file tải về thành:
   - `responsive-mobile.png`
   - `responsive-tablet.png`
   - `responsive-desktop.png`
   và di chuyển vào thư mục `docs/screenshots/` này.

