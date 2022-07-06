---
layout: post
title:  "Nhận dạng cảm xúc khuôn mặt.(Part 4) Triển khai trên ảnh và video - [Học máy]"
author: sal
categories: [ Machine learning, học máy ]
tags: [ Python, Lập trình ]
image: assets/images/emotion-detection/happy-ex-p4.webp
# rating: 4.5
comments: false
---

<!-- > Chúng ta là những gì mà chúng ta ăn vào.  -->
Trong phần 3 này. Chúng ta sẽ đi thẳng vào ứng dụng của bài toán nhận dạng cảm xúc sử dụng ngôn ngữ lập trình python và thư viện keras.

Đây là một bài toán phân lớp tương đối tiêu chuẩn. Một hệ thống nhận diện cảm xúc khuôn mặt thường được triển khai gồm **2 bước**.
1. **Nhận ảnh và tiền xử lý.** Ảnh khuôn mặt được lấy từ nguồn dữ liệu tĩnh (chẳng hạn như từ file, database), hoặc động (từ livestream, webcam, camera,…), nguồn dữ liệu này có thể trải qua một số bước tiền xử lý nhằm tăng chất lượng hình ảnh để giúp việc phát hiện cảm xúc trở nên hiệu quả hơn.
2. **Phân lớp nhận dạng cảm xúc.**

---
### Mục lục
[1. Ứng dụng với ảnh ](#ungdunganh)\\
[2. Ứng dụng với video](#ungdungvideo)\\
[3. Tổng kết ](#tongket)

---

<a name="ungdunganh"></a>
### 1. Ứng dụng với ảnh

A. Cách làm

1. Ảnh đầu vào được chuyển thành đa cấp xám;
2. Dùng haar cascade (OpenCV) tìm kiếm vùng mặt người trên ảnh đầu vào;
3. Vùng ảnh mặt người được chuyển đổi về kích thước 48x48;
4. Ảnh 48x48 đa cấp xám chuyển đổi về miền [0, 1] sau đó đưa vào mô hình CNN;
5. Đầu ra của CNN là xác suất của các cảm xúc, chọn cảm xúc có xác xuất cao nhất làm kết quả cuối cùng.

B. Triển khai code

{% gist cf7d11672bce4a830524d0ccd6b0043f %}
<a name="ungdungvideo"></a>
### 2. Ứng dụng với video
Vấn đề này dễ dàng hơn vì chúng ta có rất nhiều thông tin về khuôn mặt
dựa vào các khung hình liên tiếp, và vấn đề này cũng thực tiễn hơn nhiều so
với nhận dạng cảm xúc trong không gian 2D.\\
Việc nhận dạng cảm xúc khuôn mặt được thực hiện trên các bức ảnh, do
đó việc lấy ảnh từ camera ta phải chuyển thành các ảnh tĩnh và xử lý trên
từng ảnh tĩnh. Khi đã có ảnh đầu vào, tiếp tục chuyển ảnh cho quá trình xử
lý tiếp theo.

{% gist 4d585badff602951bd84b0e2c29c4412 %}

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
