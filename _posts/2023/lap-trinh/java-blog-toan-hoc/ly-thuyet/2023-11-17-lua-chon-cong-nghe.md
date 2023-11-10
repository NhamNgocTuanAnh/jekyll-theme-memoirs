---
layout: post
title: 'Xây dựng trang web trao đổi thông tin toán học (Java Spring Boot + React JS). Phần 3. Lựa chọn Java Spring Boot + React'
author: sal
categories: [ Coding 💻 ]
tags: [ tips ]
image: assets/images/2023/lap-trinh/avts/dien-dan-toan-hoc-avt.webp
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
permalink: lap-trinh/java/website-dien-dan-toan-hoc-p3-lua-chon-cong-nghe
---

**_Lưu ý_**: Trước đây mình khá hứng thú với Java và React. Đối với cá nhân mình, khi học công nghệ thì thay vì làm một thứ gì đó lớn lao, tại sao không thử tạo ra 1 ứng dụng quen thuộc, cơ bản. Đó là website cung cấp thông tin.

Bắt đầu hết nhàm chán.
### Mô tả kiến trúc
Hệ thống được thiết kế với 2 phần, gồm:
* Client: Được viết bằng ReactJS
  * Người dùng tương tác với ứng dụng
  * Ứng dụng trao đổi dữ liệu với server qua phương thức HTTP.
* Server: Sử dụng Java Spring Boot
  * Server trao đổi dữ liệu với ReactJs bằng phương thức HTTP, server sẽ trả các dữ liệu cho client dưới dạng Json
  * Sever liên kết với database ở đây là PostgreSQL

<div class="content" style="text-align:center; ">
<a href="https://imgur.com/np0RUch"><img src="https://i.imgur.com/np0RUch.png" title="source: imgur.com" /></a><p>Cấu trúc thư mục mã nguồn</p><br>
</div>

* FrontEnd: File chứa toàn bộ code Frontend
* BankEnd: File chứa toàn bộ code BackEnd

<div class="content" style="text-align:center; ">
<a href="https://imgur.com/2BBuDDe"><img src="https://i.imgur.com/2BBuDDe.png" title="source: imgur.com" /></a><p>Cấu trúc file backend và frontend</p><br>
</div>
