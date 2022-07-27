---
layout: post
title:  "Nhận Diện Cảm Xúc Khuôn Mặt Với Python, Keras, Cython và OpenCV.(Part 4) Tối ưu với Cython - [Học máy]"
author: sal
categories: [ Machine learning, học máy ]
tags: [ Python, Lập trình ]
image: assets/images/emotion-detection/happy-ex-p4.webp
# rating: 4.5
comments: false
description: Trong các phần trước, vấn đề siêu chậm của python đã được tôi nhắc đến. Vậy làm thế nào để giữ được code dễ hiểu python nhưng lại có tốc độ cao gần như C++?
---

Làm thế nào để giữ được code dễ hiểu python nhưng lại có tốc độ cao gần như C++? Làm sao với phần cứng chỉ dùng cpu có thể xử lý nhiều khuôn mặt trong cùng một lúc?Xử lý một khuôn mặt đã khó, rồi phải đưa khuôn mặt ấy vào để xác định cảm xúc. Nay lại rất nhiều khuôn mặt cùng một lúc, lại còn realtime.

![image](/assets/images/emotion-detection/result-two.webp){:class="img-responsive"}
Bạn có nhìn thấy cái gì sai ở đây không?

---
### Mục lục
[1. Giới thiệu và cài đặt Cython ](#gioithieu)\\
[2. Lý thuyết về Hàng đợi - Queue](#lythuyetvecode)\\
[3. Lý thuyết về đa luồng - multithreading](#lythuyetvemultithreading)\\
[4. Mã lập trình và giải thích ](#malaptrinhvagiaithich)\\
[5. Kết luận ](#ketluan)

---

<a name="gioithieu"></a>
### 1. Giới thiệu và cài đặt Cython

Nếu bạn muốn code cú pháp dễ dàng như Python và hiệu suất cao như C thì Cython là lựa chọn của bạn. Bạn có thể sử dụng Cython để viết các extention C cho Python. Code Python của bạn sẽ được dịch sang code C/C++ và được tối ưu hóa. Nó sẽ cung cấp cho bạn hiệu suất cao và bạn có thể sử dụng nó trong các dự án Python của mình.

Ví dụ:

{% gist 5905366e178ca0a91ae72ecf115f52d0 %}

![image](/assets/images/emotion-detection/cython-vs-python.webp){:class="img-responsive"}
Kết quả Cython chạy nhanh hơn Python cả trục lần :>> [Trích](https://betterprogramming.pub/skyrocket-your-python-code-with-cython-6851e357bef8)\\
Vì đã có rất nhiều bên mô tả và code Cython rồi, bạn có thể tham khảo ở đây:
* [Cython - Cách Để Code Python Chạy Nhanh Hơn](https://codelearn.io/sharing/cython-cach-de-code-python-chay-nhanh)
* [Cython: Python chạy nhanh như C](https://niithanoi.edu.vn/cython-python-chay-nhanh-nhu-c.html)
* [Hướng dẫn Cython cơ bản cách chuyển code python thành code c/c++](https://codelearn.io/sharing/cython-cach-de-code-python-chay-nhanh)

<a name="lythuyetvecode"></a>
### 2. Lý thuyết về Hàng đợi - Queue

![image](/assets/images/emotion-detection/Queue-Illustration.webp){:class="img-responsive"}

Hàng đợi (queue) là một cấu trúc dữ liệu hoạt động theo cơ chế FIFO (First In First Out), tạm dịch là “vào trước ra trước”. Có nghĩa là phần tử nào được thêm hàng đợi trước thì sẽ được lấy ra trước.

```python

# Python program to
# demonstrate queue implementation
# using collections.dequeue


from collections import deque

# Initializing a queue
q = deque()

# Adding elements to a queue
q.append('a')
q.append('b')
q.append('c')

print("Initial queue")
print(q)

# Removing elements from a queue
print("\nElements dequeued from the queue")
print(q.popleft())
print(q.popleft())
print(q.popleft())

print("\nQueue after removing elements")
print(q)

# Uncommenting q.popleft()
# will raise an IndexError
# as queue is now empty
```
Nguyên tắc đơn giản của hàng đợi là ai vào quán trà sữa trước thì sẽ được mua trước, ai vô sau thì mua sau.

```console
Initial queue
deque(['a', 'b', 'c'])

Elements dequeued from the queue
a
b
c

Queue after removing elements
deque([])
```
Chúng ta sẽ ứng dụng queue bằng cách sẽ cắt tất cả khuôn mặt trong từng frame hình vào queue để xử lý.

<a name="lythuyetvemultithreading"></a>
### 3. Lý thuyết về đa luồng - multithreading

![image](/assets/images/emotion-detection/python-multithreading.webp){:class="img-responsive"}

Nói về cấu trúc máy tính : Thread là một đơn vị cơ bản trong CPU. Một luồng sẽ chia sẻ với các luồng khác trong cùng process về thông tin data, các dữ liệu của mình. Việc tạo ra thread giúp cho các chương trình có thể chạy được nhiều công việc cùng một lúc.

Đơn giản, ngày nay, công xưởng bạn có nhiều công nhân. Mỗi công nhân có thể làm nhiều việc. Thay vì chạy python, trong cùng một thời điểm bạn chỉ có thể sử dụng một công nhân duy nhất để làm một công việc duy nhất. CHo dù công nhân đó có to khỏe thế nào, khi giao một đống công việc cũng không thể nhanh được.

Đa luồng có rất công dụng vô cùng hữu ích thích hợp cho những tác vụ chạy ngầm không cần quan tâm chính xác thời gian hoàn thành.
Đặc biệt là các ứng dụng trên python thì tối ưu tốc độ xử lý là một challenge bởi python bị ràng buộc bởi cơ chế GIL (Global Interpreter Lock). Tức là nó chỉ cho phép một thread hoạt động truy suất và chỉnh sửa bộ nhớ tại một thời điểm. Do đó python không tận dụng được các tính toán đa luồng. Tuy nhiên ở python 3.2 trở đi thì python đã bắt đầu hỗ trợ đa luồng. Và thông qua bài viết này mình sẽ hướng dẫn các bạn có thể accelerate các ứng dụng của mình thông qua đa luồng.

Nhưng trước tiên chúng ta cần hiểu về thread/process là gì? Vì blog dành cho đa dạng bạn đọc ở trình độ khác nhau nên bạn nào đã biết thì có thể bỏ qua phần kiến thức rất sơ đẳng này.

<a name="malaptrinhvagiaithich"></a>
### 4. Mã lập trình và giải thích

{% gist 09381efa2f2d911ad8f3140f00427e33 %}

<a name="ketluan"></a>
### 5. Kết luận
Tạo một ứng dụng không khó, nhưng để đáp ứng được tốc độ xử lý, độ chính xác và mức độ sử dụng resource thì cần phải tối ưu nhiều thứ:

- Giảm nhẹ kích thước mô hình thông qua: Quantization và compress mô hình.
- Optimize lại code: do Cython chajy treen neefn python thôi nên ghi phân luồng và queue không thật sự là phân luồng cà queue giống C++ hoặc JAVA được.
- Chuyển từ single-thread sang multi-thread.
- Allocate lại tài nguyên như CPU, Memory.

Mình tin rằng bạn đã nghe nhiều người phàn nàn rằng Python quá chậm. Mình thấy mọi người chỉ so sánh Python với C về hiệu năng - performance, nhưng không mấy ai so sánh về thời gian phát triển. Thời gian phát triển Python quá nhanh vì Python có vẻ "dễ code" hơn một vài ngôn ngữ khác và bạn không phải đối mặt với con trỏ hay quản lý bộ nhớ, v.v.
(〜￣▽￣)〜 〜(￣▽￣〜)
