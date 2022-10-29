---
layout: post
lazyimages: "enabled"
title:  "Nhận Diện Cảm Xúc Khuôn Mặt Với Python, Keras, Cython và OpenCV.(Part 2) Giải quyết bài toán - [Học máy]"
author: sal
categories: [ Machine learning ]
tags: [ Python, Lập trình ]
image: assets/images/emotion-detection/happy-ex-p2.webp
# rating: 4.5
isGithubComments: true
permalink: lap-trinh/emotion-recognition-solution
excerpt: Giải quyết bài toán nhận dạng khuôn mặt
description: Trong phần này chúng ta sẽ tìm cách giải quyết bài toán làm thế nào để tạo ra một ứng dụng
adsense: "enabled"
keywords:
  - Nhận diện cảm xúc khuôn mặt
  - Công nghệ nhận diện cảm xúc
---

<!-- > Chúng ta là những gì mà chúng ta ăn vào.  -->
Trong phần 1. Chúng ta đã nêu ra tổng quan bài toán nhận dạng khuôn mặt.

Đây là một bài toán phân lớp tương đối tiêu chuẩn. Một hệ thống nhận diện cảm xúc khuôn mặt thường được triển khai gồm **2 bước**.
1. **Nhận ảnh và tiền xử lý.** Ảnh khuôn mặt được lấy từ nguồn dữ liệu tĩnh (chẳng hạn như từ file, database), hoặc động (từ livestream, webcam, camera,…), nguồn dữ liệu này có thể trải qua một số bước tiền xử lý nhằm tăng chất lượng hình ảnh để giúp việc phát hiện cảm xúc trở nên hiệu quả hơn.
2. **Phân lớp nhận dạng cảm xúc.** Sử dụng model CNN để nhận dạng cảm xúc con người.

---
### Mục lục
[1. Nhận ảnh và tiền xử lý ](#nhandanganh)\\
[2. Phân lớp nhận dạng cảm xúc](#phanlopcamxuc)\\
[3. Tổng kết ](#tongket)

---

<a name="nhandanganh"></a>
### 1. Nhận ảnh và tiền xử lý

A. Vai trò của tiền xử lý ảnh

Khi phát triển một thuật toán phân loại ảnh chúng ta có thể gặp phải một số trường hợp không mong đợi như: Kết quả huấn luyện có độ chính xác rất cao trên cả tập huấn luyện (train dataset) và tập phát triển (dev dataset). Nhưng khi áp dụng vào thực tiễn lại cho độ chính xác thấp. Có rất nhiều các nguyên nhân dẫn tới điều này và một trong số đó là:
* Các bức ảnh được huấn luyện khác xa so với những bức ảnh được người dùng upload về các khía cạnh: độ phân giải, cường độ màu sắc, chất lượng ảnh, độ to nhỏ của vật thể, chiều, hướng và tư thế của vật thể bên trong ảnh.
* Có thể các bức ảnh được người dùng upload lên mặc dù cùng nhãn nhưng khác về tính chất so với các bức ảnh đã huấn luyện. Ví dụ trong một thuật toán phân loại dog and cat, tập huấn luyện chỉ bao gồm những con mèo trưởng thành nhưng thực tế người dùng lại upload lên rất nhiều hình ảnh của mèo con có thể dẫn tới thuật toán bị nhầm lẫn.
* Đối với một số tác vụ phân loại ảnh khó, đòi hỏi chuyên gia gán nhãn, rất dễ mắc sai lầm như chuẩn đoán bệnh nhãn cầu. Một số ít các ảnh trong tập huấn luyện có thể bị gán sai nhãn. Do đó ảnh hưởng đến khả năng dự báo của thuật toán.
* Bộ dữ liệu huấn luyện có kích thước quá nhỏ và không đại diện cho toàn bộ các class được huấn luyện.
* Phân phối của tập huấn luyện khác xa so với thực tế. Chẳng hạn tập huấn luyện chứa ảnh chó và mèo theo tỷ lệ 50:50 nhưng số lượng bức ảnh người dùng upload lên ảnh chó chiếm đa số theo tỷ lệ 90:10.

<a name="phanlopcamxuc"></a>
### 2. Ứng dụng với video
Vấn đề này dễ dàng hơn vì chúng ta có rất nhiều thông tin về khuôn mặt
dựa vào các khung hình liên tiếp, và vấn đề này cũng thực tiễn hơn nhiều so
với nhận dạng cảm xúc trong không gian 2D.\\
Việc nhận dạng cảm xúc khuôn mặt được thực hiện trên các bức ảnh, do
đó việc lấy ảnh từ camera ta phải chuyển thành các ảnh tĩnh và xử lý trên
từng ảnh tĩnh. Khi đã có ảnh đầu vào, tiếp tục chuyển ảnh cho quá trình xử
lý tiếp theo.

<script src="https://gist.github.com/NhamNgocTuanAnh/4d585badff602951bd84b0e2c29c4412.js"></script>

<a name="tongket"></a>
### 3. Tổng kết

![image](/assets/images/emotion-detection/result-one.webp){:class="img-responsive"}
Hmm có vẻ khá là **khả quan** nhỉ. Nhưng vấn đề sẽ xảy ra **nếu**:
![image](/assets/images/emotion-detection/result-two.webp){:class="img-responsive"}
Bạn có nhìn thấy cái gì sai ở đây không?

Đúng vậy.\\
Thứ nhất: Nhận dạng gương mặt bằng [thuật toán Haar-Like hay còn gọi là Viola's Zone](https://viblo.asia/p/tim-hieu-ve-phuong-phap-nhan-dien-khuon-mat-cua-violas-john-ByEZkNVyKQ0) tuy nhanh nhưng độ chính xác cũng không quá tốt.

Thứ hai: Ngôn ngữ python là một ngôn ngữ hiệu năng rất kém. Một hai gương mặt xuất hiện trong video, máy đã chạy lag tung đít rồi. Với một bài toán gồm một lớp học thì sao.

Thứ  ba: Là gì ấy nhở, ... ╮(￣～￣)╭

(〜￣▽￣)〜 Trong các phần tiếp theo. Mình sẽ đi sâu vào quá trình tối ưu code. Các bạn chú ý đón xem nhé. 〜(￣▽￣〜)
