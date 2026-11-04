# Sử dụng image Nginx Alpine siêu nhẹ (~25MB)
FROM nginx:alpine

# Xóa trang mặc định của Nginx
RUN rm -rf /usr/share/nginx/html/*

# Sao chép toàn bộ mã nguồn của trang web vào thư mục root của Nginx
COPY . /usr/share/nginx/html/

# Mở cổng 80 cho web
EXPOSE 80

# Khởi chạy Nginx
CMD ["nginx", "-g", "daemon off;"]

