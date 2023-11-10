---
layout: post
title: 'Phần 6. Thiết kế chức năng - Xây dựng trang web trao đổi thông tin toán học (Java Spring Boot + React JS).'
author: sal
categories: [ Coding 💻 ]
tags: [ tips ]
image: assets/images/2023/lap-trinh/avts/jekyll-viet-blog-avt.webp
rating: 5
lazyimages: "enabled"
isGithubComments: false
excerpt: Jekyll thật tuyệt vời để tạo các website cá nhân, nhưng bông hồng nào mà chả có gai!. Bài viết này mình muốn hướng đến các bạn đã có hiểu biết về phát triển web. Các bạn beginer hay các bạn có nhu cầu làm một blog cá nhân có thể tham khảo để hiểu rõ ưu nhược điểm của Wordpress cũng như Jekyll
adsense: "enabled"
keywords:
  - Viết blog cho lập trình viên
  - chuyển từ wordpress sang jekyll
  - Tối ưu jekyll
date: 2022-11-15 15:11:10 +0700
permalink: lap-trinh/java/website-dien-dan-toan-hoc-p6-thiet-ke-chuc-nang
---

**_Lưu ý_**: Trước đây mình khá hứng thú với Java và React. Đối với cá nhân mình, khi học công nghệ thì thay vì làm một thứ gì đó lớn lao, tại sao không thử tạo ra 1 ứng dụng quen thuộc, cơ bản. Đó là website cung cấp thông tin.

Qua chương 4, em đã đưa ra sơ đồ tổng quan Use Case các
tác nhân cũng như chức năng của Forum, liệt kê danh sách một số các API được sử
dụng trong hệ thống. Các API này sẽ xử lý luồng request, response mà bên phía Client
gọi yêu cầu. Bảng cơ sở dữ liệu quan hệ cộng thêm mô tả bên phía data của Forum.

### Mô tả chức năng

#### Quản lý câu hỏi

<div class="content" style="text-align:center; ">
<a href="https://imgur.com/6FbcOLz"><img src="https://i.imgur.com/6FbcOLz.png" title="source: imgur.com" /></a><p>Sơ đồ lớp câu hỏi</p><br>
<a href="https://imgur.com/ye2qUJc"><img src="https://i.imgur.com/ye2qUJc.png" title="source: imgur.com" /></a><p>Tạo câu hỏi</p><br><a href="https://imgur.com/TeDkX1T"><img src="https://i.imgur.com/TeDkX1T.png" title="source: imgur.com" /></a><p>Sửa câu hỏi</p><br><a href="https://imgur.com/yc1gD3S"><img src="https://i.imgur.com/yc1gD3S.png" title="source: imgur.com" /></a><p>Chức năng xóa câu hỏi</p><br>
</div>


