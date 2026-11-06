# 🌐 Personal Portfolio CV – Vũ Tùng Dương

> **Trang web Portfolio CV cá nhân chuyên nghiệp, tối ưu chuẩn Mobile-First, giao diện hiện đại và thân thiện với người dùng.**  
> 🔗 **Live Demo (GitHub Pages)**: [https://vutungduong0-art.github.io/MyCV/](https://vutungduong0-art.github.io/MyCV/)  
> 📦 **GitHub Repository**: [https://github.com/vutungduong0-art/MyCV](https://github.com/vutungduong0-art/MyCV)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://vutungduong0-art.github.io/MyCV/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-green?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📑 Mục lục
- [1. Giới thiệu dự án](#1-giới-thiệu-dự-án)
- [2. Tính năng nổi bật](#2-tính-năng-nổi-bật)
- [3. Cấu trúc thư mục](#3-cấu-trúc-thư-mục)
- [4. Công nghệ sử dụng](#4-công-nghệ-sử-dụng)
- [5. Yêu cầu môi trường](#5-yêu-cầu-môi-trường)
- [6. Hướng dẫn cài đặt](#6-hướng-dẫn-cài-đặt)
- [7. Cấu hình & Tùy biến](#7-cấu-hình--tùy-biến)
- [8. Hướng dẫn chạy thử chi tiết](#8-hướng-dẫn-chạy-thử-chi-tiết)
  - [8.1. Cách 1: Mở trực tiếp bằng trình duyệt (Mọi hệ điều hành)](#81-cách-1-mở-trực-tiếp-bằng-trình-duyệt-mọi-hệ-điều-hành)
  - [8.2. Cách 2: Hướng dẫn trên Windows](#82-cách-2-hướng-dẫn-trên-windows)
  - [8.3. Cách 3: Hướng dẫn trên macOS](#83-cách-3-hướng-dẫn-trên-macos)
  - [8.4. Cách 4: Hướng dẫn trên Linux](#84-cách-4-hướng-dẫn-trên-linux)
  - [8.5. Cách 5: Chạy bằng Docker & Docker Compose](#85-cách-5-chạy-bằng-docker--docker-compose)
- [9. Kiểm thử & Đánh giá chất lượng](#9-kiểm-thử--đánh-giá-chất-lượng)
- [10. Thông tin liên hệ](#10-thông-tin-liên-hệ)

---

## 1. Giới thiệu dự án
**Personal Portfolio CV** là dự án trang web giới thiệu năng lực cá nhân của **Vũ Tùng Dương** (Frontend Developer & UI Enthusiast / AI & Backend Enthusiast). 

Trang web được thiết kế nhằm mục đích:
- Trưng bày hồ sơ năng lực, tiểu sử và định hướng nghề nghiệp.
- Tổng hợp các kỹ năng kỹ thuật trọng tâm trong phát triển phần mềm, trí tuệ nhân tạo (AI) và cơ sở dữ liệu.
- Giới thiệu các dự án tiêu biểu đã thực hiện kèm hình ảnh minh họa trực quan.
- Cung cấp kênh liên hệ trực tiếp cho nhà tuyển dụng, đối tác và cộng đồng lập trình viên.

Dự án được xây dựng với tư duy **Mobile-First**, áp dụng semantic HTML5 chuẩn SEO, chuẩn Accessibility (A11y) và CSS3 thuần tối ưu hiệu năng vượt trội, không phụ thuộc vào bất kỳ thư viện bên thứ ba nào.

---

## 2. Tính năng nổi bật

- 🎨 **Giao diện Nghệ thuật Cyber-Aurora Đỉnh cao**: Thiết kế độc quyền với gam màu Deep Cosmic Obsidian kết hợp dải gradient cực quang Cyan - Indigo - Violet - Pink tinh tế, kính mờ Glassmorphism sang trọng và đẳng cấp quốc tế.
- 👤 **Ảnh Chân dung Căn Chuẩn Tỉ Lệ Vàng (2:3 Ratio)**: Khung viền hào quang phát sáng xoay tròn (Conic Gradient) lơ lửng, bức ảnh được căn chính giữa khung hình, giữ nguyên vẹn tỉ lệ ảnh gốc không bị méo hay cắt cúp khuôn mặt.
- 🔊 **Âm thanh Sci-Fi Tương tác (Web Audio API)**: Tự động tổng hợp âm thanh vi mô (micro-interactions) theo thời gian thực bằng thuật toán toán học tần số sóng âm (không cần tải file .mp3 từ bên ngoài). Tích hợp công tắc bật/tắt trực quan trên Header.
- 🔍 **Hộp thoại Chi tiết Dự án Chuyên sâu (Project Deep-Dive Modal)**: Khắc phục triệt để liên kết `#` của nút "Xem chi tiết" bằng popup kính mờ hiển thị toàn bộ kiến trúc mô hình, chỉ số kỹ thuật đo lường (IoU 91.4%, Dice 95.8%, 60 FPS, 3NF EF Core), hỗ trợ đóng bằng phím ESC hoặc click ra ngoài.
- 🌌 **Mạng lưới Hạt Công nghệ (Neural Particle Canvas 60fps)**: Canvas vẽ các hạt lượng tử tự do liên kết tia sáng phát quang động theo khoảng cách thực tế, tối ưu hiệu năng không gây giật lag.
- 🧊 **Vật lý 3D Card Tilt & Phản quang Chuột Spotlight**: Các thẻ dự án, hành trình và liên hệ phản hồi góc nghiêng 3D theo vị trí con trỏ chuột kết hợp vầng sáng radial phát quang nổi bật.
- 🏷️ **Bộ lọc Danh mục Kỹ năng Tương tác (Skill Filters)**: Lọc động các thẻ chip kỹ năng theo 4 nhóm chuyên môn (AI, Web, Cơ sở dữ liệu, Tất cả) với hiệu ứng animation mượt mà.
- ⏱️ **Cột mốc Hành trình Phát triển (Luminous Timeline)**: Chuỗi mốc thời gian học tập, nghiên cứu khoa học máy tính và AI với đường ray ánh sáng đa sắc.
- 📋 **Sao chép Email 1-chạm & Hệ thống Thông báo Toast**: Sao chép địa chỉ `vutungduong0@gmail.com` tức thì kèm toast thông báo nổi góc màn hình.
- ✉️ **Form Gửi Tin Nhắn Nhanh**: Hỗ trợ kiểm tra dữ liệu đầu vào, hiệu ứng nút bấm xoay vòng loading và phản hồi người dùng sống động.
- 📱 **Thiết kế Mobile-First & Responsive hoàn hảo**: Tự động thích ứng mượt mà trên tất cả thiết bị từ điện thoại di động (~360px), máy tính bảng (Tablet 768px) đến màn hình máy tính để bàn độ phân giải cao (Desktop >1280px).
- ⚡ **Siêu nhẹ & Tốc độ tải trang tức thì**: 100% Vanilla HTML5, CSS3 & JavaScript thuần, không dùng framework nặng nề, đạt 98-100 điểm Google Lighthouse.
- ♿ **Tiếp cận người dùng (Accessibility)**: Tuân thủ ngữ nghĩa HTML5, thẻ ARIA (`role="dialog"`, `aria-modal="true"`, `aria-label`), hỗ trợ `prefers-reduced-motion` cho người dùng nhạy cảm với chuyển động.

---

## 3. Cấu trúc thư mục

```text
KT A2.1/
├── assets/
│   ├── css/
│   │   └── styles.css               # File CSS chính (Design tokens, Mobile-first layout)
│   ├── js/
│   │   └── main.js                  # Script tương tác Vanilla JS (Particle canvas, typewriter, spotlight)
│   └── img/
│       ├── AI_Polyp_Dai_Trang.png   # Ảnh dự án AI Polyp Detection
│       ├── AI_Space_Defender.jpg    # Ảnh dự án AI Space Defender
│       ├── Avatar_VuTungDuong.jpg   # Ảnh chân dung đại diện
│       └── Website_Fast_Food.png    # Ảnh dự án FastFood Website
├── docs/
│   ├── AI_LOG.md                    # Nhật ký hoạt động và quyết định kỹ thuật của AI
│   ├── RELEASENOTE.md               # Nhật ký phát hành và cập nhật qua các phiên bản
│   └── test_report.md               # Báo cáo kiểm thử chất lượng sản phẩm trước bàn giao
├── Dockerfile                       # Tệp cấu hình Docker (Nginx Alpine)
├── docker-compose.yml               # Tệp triển khai nhanh với Docker Compose
├── .dockerignore                    # Tệp loại trừ khi đóng gói Docker
├── index.html                       # Mã nguồn HTML5 chính của trang web
└── README.md                        # Tài liệu hướng dẫn dự án (file này)
```

---

## 4. Công nghệ sử dụng

| Lĩnh vực | Công nghệ | Chi tiết sử dụng |
| :--- | :--- | :--- |
| **Ngôn ngữ Markup** | HTML5 | Chuẩn ngữ nghĩa (Semantic Web), W3C Validated, SEO Friendly, Accessibility |
| **Định kiểu giao diện** | CSS3 | CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, Media Queries Mobile-First |
| **Kiến trúc giao diện** | Responsive Web Design | Tương thích đa màn hình: Mobile (<768px), Tablet (≥768px), Desktop (≥1280px) |
| **Phông chữ & Icon** | System UI Fonts | Sử dụng hệ thống font native của hệ điều hành, tối ưu tốc độ render |
| **Máy chủ web gợi ý** | Nginx / Caddy / Python / Node.js | Triển khai web tĩnh cục bộ hoặc sản phẩm thực tế |
| **Đóng gói container** | Docker & Docker Compose | Đóng gói môi trường Nginx Alpine siêu nhẹ (~25MB) |

---

## 5. Yêu cầu môi trường

Dự án là trang web tĩnh (Static Web), do đó yêu cầu môi trường vô cùng nhẹ và linh hoạt:

### Yêu cầu tối thiểu (Chạy trực tiếp)
- **Hệ điều hành**: Windows 7/10/11, macOS 10.13+, Linux (mọi bản phân phối).
- **Trình duyệt**: Bất kỳ trình duyệt web hiện đại nào hỗ trợ HTML5/CSS3 (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave, Opera).

### Yêu cầu tùy chọn (Để chạy qua Web Server cục bộ hoặc Docker)
- **Node.js** (tùy chọn): Phiên bản 16.x hoặc mới hơn (kèm `npx`).
- **Python** (tùy chọn): Phiên bản 3.x (sử dụng module có sẵn `http.server`).
- **Docker & Docker Compose** (tùy chọn): Docker Desktop (trên Windows/macOS) hoặc Docker Engine (trên Linux).

---

## 6. Hướng dẫn cài đặt

### Bước 1: Tải mã nguồn về máy
Bạn có thể tải dự án bằng một trong hai cách sau:

#### Cách A: Sử dụng Git (khuyên dùng)
Mở cửa sổ dòng lệnh (Terminal / Command Prompt / PowerShell) và gõ lệnh:
```bash
git clone https://github.com/vutungduong0-art/MyCV.git
cd "MyCV"
```

#### Cách B: Tải trực tiếp file ZIP
1. Tải file mã nguồn `.zip` về máy tính.
2. Giải nén vào một thư mục bất kỳ (ví dụ: `KT A2.1`).
3. Truy cập vào thư mục vừa giải nén.

---

## 7. Cấu hình & Tùy biến

Bạn có thể dễ dàng chỉnh sửa thông tin cá nhân hoặc giao diện theo ý muốn:

### 1. Cấu hình thông tin cá nhân (`index.html`)
Mở file `index.html` bằng trình soạn thảo mã nguồn (VS Code, Sublime Text, Notepad++,...) để tùy biến:
- **Tên và tiêu đề**: Sửa nội dung trong thẻ `<title>`, thẻ `<span class="brand-name">` và `<h1 class="hero-title">`.
- **Mô tả bản thân**: Sửa văn bản trong thẻ `<p class="hero-desc">`.
- **Ảnh đại diện & Ảnh dự án**: Thay thế các file ảnh trong thư mục `assets/img/` bằng file ảnh của bạn và cập nhật lại đường dẫn tương ứng trong thuộc tính `src="..."`.
- **Kỹ năng**: Thêm/sửa/xóa các thẻ `<li class="skill-chip">...</li>` trong section `#skills`.
- **Dự án**: Chỉnh sửa tiêu đề, mô tả và công nghệ của từng thẻ `<article class="card">` trong section `#projects`.
- **Thông tin liên hệ**: Cập nhật địa chỉ email (`mailto:...`), link GitHub và LinkedIn ở section `#contact`.

### 2. Cấu hình màu sắc & Giao diện (`assets/css/styles.css`)
Toàn bộ màu sắc và quy chuẩn thiết kế được định nghĩa tập trung qua **CSS Variables (Design Tokens)** tại mục `:root` ở đầu file `styles.css`:

```css
:root {
  /* Bảng màu chính */
  --color-primary: #2563eb;       /* Màu thương hiệu xanh dương */
  --color-primary-dark: #1d4ed8;  /* Màu xanh đậm khi hover */
  --color-accent: #7c3aed;        /* Màu tím điểm nhấn */
  --color-text: #1e293b;          /* Màu chữ chính */
  --color-text-soft: #64748b;     /* Màu chữ phụ */
  --color-bg: #ffffff;            /* Màu nền trang */
  --color-surface: #f8fafc;       /* Màu nền card, section phụ */
  --color-border: #e2e8f0;        /* Màu đường viền */
  
  /* Bố cục & Bo góc */
  --container-max: 1200px;        /* Chiều rộng tối đa trang web */
  --radius: 12px;                 /* Bán kính bo góc card */
}
```
*Chỉ cần thay đổi mã màu tại đây, toàn bộ giao diện trang web sẽ tự động cập nhật đồng bộ!*

---

## 8. Hướng dẫn chạy thử chi tiết

Dưới đây là các phương thức chạy thử trang web từ đơn giản đến chuyên nghiệp trên mọi hệ điều hành.

---

### 8.1. Cách 1: Mở trực tiếp bằng trình duyệt (Mọi hệ điều hành)
Đây là cách nhanh nhất, không yêu cầu cài đặt bất kỳ phần mềm máy chủ nào:
1. Mở trình quản lý file (File Explorer trên Windows, Finder trên macOS, hoặc File Manager trên Linux).
2. Điều hướng đến thư mục chứa dự án.
3. Nhấp đúp chuột (Double click) vào tệp **`index.html`** hoặc click chuột phải chọn **Open With** -> Chọn trình duyệt bạn muốn (Chrome, Edge, Firefox, Safari).

---

### 8.2. Cách 2: Hướng dẫn trên Windows

Người dùng Windows có thể lựa chọn một trong các cách sau để chạy web server cục bộ:

#### Lựa chọn 2.1: Sử dụng Visual Studio Code (Live Server Extension)
1. Mở Visual Studio Code, chọn **File** -> **Open Folder...** -> Chọn thư mục dự án `KT A2.1`.
2. Vào tab Extensions (`Ctrl + Shift + X`), tìm kiếm và cài đặt extension **Live Server** (của Ritwick Dey).
3. Nhấp chuột phải vào file `index.html` và chọn **Open with Live Server** (hoặc click nút `Go Live` ở góc dưới cùng bên phải màn hình).
4. Trình duyệt sẽ tự động mở địa chỉ: `http://127.0.0.1:5500/index.html`.

#### Lựa chọn 2.2: Sử dụng Python (PowerShell hoặc Command Prompt)
Nếu máy bạn đã cài Python:
```powershell
# Mở PowerShell tại thư mục dự án và chạy:
python -m http.server 8080
```
> Truy cập trình duyệt tại: **`http://localhost:8080`**  
> *(Nhấn `Ctrl + C` để dừng server).*

#### Lựa chọn 2.3: Sử dụng Node.js (`npx`)
Nếu máy bạn đã cài Node.js:
```powershell
# Chạy máy chủ web tức thì mà không cần cài đặt gói toàn cục:
npx serve .
# Hoặc:
npx http-server -p 8080
```
> Truy cập trình duyệt theo đường link hiển thị trên màn hình terminal (thường là `http://localhost:3000` hoặc `http://localhost:8080`).

---

### 8.3. Cách 3: Hướng dẫn trên macOS

Trên macOS, bạn mở ứng dụng **Terminal** (`Command + Space` gõ `Terminal`) và thực hiện:

#### Lựa chọn 3.1: Dùng lệnh mở trực tiếp qua trình duyệt mặc định
```bash
# Điều hướng vào thư mục dự án
cd /duong/dan/toi/thu-muc/KT\ A2.1

# Mở ngay bằng trình duyệt mặc định
open index.html

# Hoặc mở bằng Google Chrome:
open -a "Google Chrome" index.html
```

#### Lựa chọn 3.2: Dùng Python HTTP Server tích hợp sẵn
macOS thường đã có sẵn Python 3:
```bash
cd /duong/dan/toi/thu-muc/KT\ A2.1
python3 -m http.server 8080
```
> Mở trình duyệt Safari hoặc Chrome truy cập: **`http://localhost:8080`**

#### Lựa chọn 3.3: Dùng Node.js / npx
```bash
cd /duong/dan/toi/thu-muc/KT\ A2.1
npx serve -l 8080 .
```

---

### 8.4. Cách 4: Hướng dẫn trên Linux (Ubuntu, Debian, Fedora, Arch,...)

Mở terminal trên bản phân phối Linux của bạn:

#### Lựa chọn 4.1: Chạy bằng Python 3
```bash
# Di chuyển đến thư mục dự án
cd ~/du-an/KT\ A2.1

# Khởi chạy máy chủ HTTP
python3 -m http.server 8080
```
> Mở trình duyệt và truy cập: **`http://localhost:8080`**

#### Lựa chọn 4.2: Chạy trực tiếp với máy chủ Nginx trên Linux
Nếu bạn muốn chạy như một website thực thụ trên Linux Server:
```bash
# 1. Cài đặt Nginx (trên Ubuntu/Debian)
sudo apt update
sudo apt install nginx -y

# 2. Sao chép mã nguồn vào thư mục web của Nginx
sudo cp -r ./* /var/www/html/

# 3. Phân quyền truy cập
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# 4. Khởi động dịch vụ Nginx
sudo systemctl restart nginx
```
> Truy cập: **`http://localhost`** hoặc địa chỉ IP máy chủ của bạn.

---

### 8.5. Cách 5: Chạy bằng Docker & Docker Compose

Docker giúp đóng gói và chạy ứng dụng trong môi trường đồng nhất và độc lập tuyệt đối.

#### Lựa chọn 5.1: Chạy nhanh 1 dòng lệnh bằng Nginx Container (Không cần build)
Bạn có thể mount trực tiếp mã nguồn vào container `nginx:alpine` mà không cần viết thêm file:

- **Trên Windows (PowerShell):**
  ```powershell
  docker run -d --name portfolio-cv -p 8080:80 -v "${PWD}:/usr/share/nginx/html:ro" nginx:alpine
  ```

- **Trên macOS / Linux:**
  ```bash
  docker run -d --name portfolio-cv -p 8080:80 -v "$(pwd):/usr/share/nginx/html:ro" nginx:alpine
  ```

> Mở trình duyệt truy cập: **`http://localhost:8080`**  
> Dừng và xóa container sau khi thử nghiệm xong: `docker rm -f portfolio-cv`

---

#### Lựa chọn 5.2: Build Docker Image từ Dockerfile
Dự án đã đính kèm sẵn `Dockerfile` chuẩn tối ưu.

1. **Build image**:
   ```bash
   docker build -t portfolio-cv:v1 .
   ```

2. **Chạy container từ image vừa tạo**:
   ```bash
   docker run -d --name my-portfolio -p 8080:80 portfolio-cv:v1
   ```

3. **Kiểm tra trạng thái**:
   ```bash
   docker ps
   ```
> Truy cập: **`http://localhost:8080`**

---

#### Lựa chọn 5.3: Chạy bằng Docker Compose (Khuyên dùng)
Dự án có sẵn file `docker-compose.yml`. Bạn chỉ cần gõ đúng 1 lệnh duy nhất:

```bash
# Khởi động dịch vụ ở chế độ chạy ngầm (background)
docker compose up -d
```
> Mở trình duyệt tại: **`http://localhost:8080`**

Để dừng dịch vụ:
```bash
docker compose down
```

---

## 9. Kiểm thử & Đánh giá chất lượng

Để đảm bảo trang web hiển thị và hoạt động ổn định nhất:

1. **Kiểm tra Responsive trên nhiều kích thước màn hình**:
   - Mở trang web trên trình duyệt Chrome/Edge.
   - Nhấn phím `F12` (hoặc `Ctrl + Shift + I` / `Cmd + Option + I`) để mở Developer Tools.
   - Nhấn tổ hợp phím `Ctrl + Shift + M` (hoặc `Cmd + Shift + M`) để bật **Toggle Device Toolbar**.
   - Thử nghiệm trên các chế độ giả lập: iPhone SE (375px), iPhone 12 Pro (390px), iPad Mini (768px), Laptop HD (1366px), Desktop FHD (1920px).
2. **Kiểm tra hiệu năng với Google Lighthouse**:
   - Tại cửa sổ DevTools (`F12`), chuyển sang tab **Lighthouse**.
   - Tích chọn các mục: *Performance, Accessibility, Best Practices, SEO*.
   - Nhấn **Analyze page load** để xem báo cáo điểm số chất lượng.
3. **Kiểm tra tính hợp lệ của mã HTML & CSS**:
   - Kiểm tra HTML: [W3C HTML Validator](https://validator.w3.org/)
   - Kiểm tra CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

---

## 10. Thông tin liên hệ

Mọi thắc mắc, đóng góp ý kiến hoặc cơ hội hợp tác xin vui lòng liên hệ:

- **Họ và tên**: **Vũ Tùng Dương**
- **Vị trí**: Frontend Developer / AI & Backend Enthusiast
- **Email**: [vutungduong0@gmail.com](mailto:vutungduong0@gmail.com)
- **GitHub**: [github.com/vutungduong0-art](https://github.com/vutungduong0-art)
- **LinkedIn**: [linkedin.com/in/dvdavincii](https://linkedin.com/in/dvdavincii)

---

<p align="center">
  <i>Cảm ơn bạn đã quan tâm đến dự án Portfolio CV của tôi! Chúc bạn một ngày làm việc hiệu quả.</i><br>
  <b>© 2026 Vũ Tùng Dương. All rights reserved.</b>
</p>

