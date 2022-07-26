---
layout: post
title:  "Nhận Diện Cảm Xúc Khuôn Mặt Real-Time Với Python, Keras, Cython và OpenCV.(Part 4) Tối ưu với Cython - [Học máy]"
author: sal
categories: [ Machine learning, học máy ]
tags: [ Python, Lập trình ]
image: assets/images/emotion-detection/happy-ex-p4.webp
# rating: 4.5
comments: false
description: Trong các phần trước, vấn đề siêu chậm của python đã được tôi nhắc đến. Vậy làm thế nào để giữ được code dễ hiểu python nhưng lại có tốc độ cao gần như C++?
---

Làm thế nào để giữ được code dễ hiểu python nhưng lại có tốc độ cao gần như C++? Làm sao với phần cứng chỉ dùng cpu có thể xử lý nhiều khuôn mặt trong cùng một lúc?

Xử lý một khuôn mặt đã khó, rồi phải đưa khuôn mặt ấy vào để xác định cảm xúc. Nay lại rất nhiều khuôn mặt cùng một lúc, lại còn realtime .
![image](/assets/images/emotion-detection/result-two.webp){:class="img-responsive"}
Bạn có nhìn thấy cái gì sai ở đây không?
**2 bước**.
1. **Nhận ảnh và tiền xử lý.** Ảnh khuôn mặt được lấy từ nguồn dữ liệu tĩnh (chẳng hạn như từ file, database), hoặc động (từ livestream, webcam, camera,…), nguồn dữ liệu này có thể trải qua một số bước tiền xử lý nhằm tăng chất lượng hình ảnh để giúp việc phát hiện cảm xúc trở nên hiệu quả hơn.
2. **Phân lớp nhận dạng cảm xúc.**

---
### Mục lục
[1. Giới thiệu và cài đặt Cython ](#gioithieu)\\
[2. Ứng dụng với video](#ungdungvideo)\\
[3. Tổng kết ](#tongket)

---

<a name="gioithieu"></a>
### 1. Giới thiệu và cài đặt Cython

Mình tin rằng bạn đã nghe nhiều người phàn nàn rằng Python quá chậm. Mình thấy mọi người chỉ so sánh Python với C về hiệu năng - performance, nhưng không mấy ai so sánh về thời gian phát triển. Thời gian phát triển Python quá nhanh vì Python có vẻ "dễ code" hơn một vài ngôn ngữ khác và bạn không phải đối mặt với con trỏ hay quản lý bộ nhớ, v.v. Nếu bạn muốn code cú pháp dễ dàng như Python và hiệu suất cao như C thì Cython là lựa chọn của bạn. Bạn có thể sử dụng Cython để viết các extention C cho Python. Code Python của bạn sẽ được dịch sang code C/C++ và được tối ưu hóa. Nó sẽ cung cấp cho bạn hiệu suất cao và bạn có thể sử dụng nó trong các dự án Python của mình.

Một trong những lý do mình sử dụng Python rất nhiều mặc dù mình cũng biết cơ bản một số ngôn ngữ khác (chẳng hạn C/C++) là vì trong hầu hết các trường hợp, thời gian phát triển quan trọng hơn hiệu suất. Nếu bạn làm nhanh sẽ làm được nhiều và có lẽ chỉ ở bước đưa ra sản phẩm bạn mới thực sự cần đến performance. Hơn nữa Python có một cộng đồng rất lớn và các thư viện hỗ trợ nhiều vô kể nên bạn có thể làm rất nhiều thứ.

Trong bài viết này mình sẽ nói về Cython thứ giúp cho code Python của bạn nhanh hơn nhiều lần để hạn chế điểm yếu là chạy chậm của Python thuần.
Ví dụ:

{% gist 5905366e178ca0a91ae72ecf115f52d0 %}

![image](/assets/images/emotion-detection/cython-vs-python.webp){:class="img-responsive"}
Kết quả Cython chạy nhanh hơn Python cả trục lần :>> [Trích](https://betterprogramming.pub/skyrocket-your-python-code-with-cython-6851e357bef8)
Vì đã có rất nhiều bên mô tả và code Cython rồi, bạn có thể tham khảo ở đây:
* [Cython - Cách Để Code Python Chạy Nhanh Hơn](https://codelearn.io/sharing/cython-cach-de-code-python-chay-nhanh)
* [Cython: Python chạy nhanh như C](https://niithanoi.edu.vn/cython-python-chay-nhanh-nhu-c.html)
* [Hướng dẫn Cython cơ bản cách chuyển code python thành code c/c++](https://codelearn.io/sharing/cython-cach-de-code-python-chay-nhanh)

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
