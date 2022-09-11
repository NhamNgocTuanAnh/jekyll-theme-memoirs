---
layout: post
title:  "4 kỹ năng mềm cần có cho lập trình viên"
author: sal
categories: [ Lập trình, Đời thường ]
tags: [ Đời thường, Lập trình ]
image: assets/images/ky-nang-lap-trinh-vien.webp
# rating: 4.5
comments: false
permalink: lap-trinh/4-ky-nang-mem-can-co-cho-lap-trinh-vien
excerpt: Nhận dạng khuôn mặt với Python và Cython
description: 4 kỹ năng mềm sau đây sẽ giúp các developer (lập trình viên) phát triển hơn trong sự nghiệp của mình. Một số tính cách như là sự đồng cảm, cởi mở, sẵn sàng học hỏi đều là những kỹ năng mềm rất cần thiết trong bất kỳ lĩnh vực nào. Kỹ năng mềm cho phép chúng ta tương tác hiệu quả và sống hòa hợp hơn với mọi người xung quanh.
---

4 kỹ năng mềm sau đây sẽ giúp các developer (lập trình viên) phát triển hơn trong sự nghiệp của mình. Một số tính cách như là sự đồng cảm, cởi mở, sẵn sàng học hỏi đều là những kỹ năng mềm rất cần thiết trong bất kỳ lĩnh vực nào. Kỹ năng mềm cho phép chúng ta tương tác hiệu quả và sống hòa hợp hơn với mọi người xung quanh.

---
### Mục lục
[1. Giới thiệu và cài đặt Cython ](#gioithieu)\\
[2. Lý thuyết về Hàng đợi - Queue](#lythuyetvecode)\\
[3. Lý thuyết về đa luồng - multithreading](#lythuyetvemultithreading)\\
[4. Mã lập trình và giải thích ](#malaptrinhvagiaithich)\\
[5. Kết luận ](#ketluan)

---

<h2>1. Quản lý bản thân</h2>
Quản trị bản thân hay còn có một cách gọi khác là quản lý bản thân có nghĩa là việc kiểm soát, quản lý về tất cả mọi thứ của bản thân như: cảm xúc, suy nghĩ, hành động, lời nói,… Quản trị bản thân giúp việc định hướng rõ ràng và đảm bảo nổ lực để tìm kiếm cơ hội đạt được mục tiêu của mình.

  <img id="imagesblog-01" src="../../assets/images/suy-nghi-nhieu.webp" alt="Gánh nặng lớn nhất của một con người là những suy nghĩ trong đầu"><br>

<table>
  <thead>
    <tr>
      <th>Quản lý cảm xúc</th>
      <th>Quản lý thời gian
</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="Quản lý cảm xúc">Hãy tìm điểm cân bằng trước khi hành động. Tìm kiếm cho mình một động lực, một tinh thần kỷ luật và một lòng kiên trì vì bất kỳ công việc nào cũng tốn nhiều công sức và áp lực trước khi đạt được kết quả. Cùng với đó hãy cởi mở tiếp thu cái mới, điều đó sẽ giúp bạn nhạy bén phát hiện điều bất thường của những điều nhỏ nhặt nhất từ đó có thể linh hoạt thay đổi với từng môi trường, từng hoàn cảnh diễn ra.</td>
      <td data-column="Quản lý thời gian
">Thời gian là tiền bạc. Hãy nghĩ xem điều gì đáng để bạn dành trọn cả cuộc đời? Từ đó bạn sẽ có cách quản lý thời gian hiệu quả hơn.<br>
80% thời gian – làm những việc bạn giỏi nhất.<br>
15% thời gian – làm những việc bạn đang học hỏi.<br>
5% thời gian – làm những việc cần thiết khác.</td>

    </tr>
  </tbody>
</table>


<a name="gioithieu"></a>
### 1. Giới thiệu và cài đặt Cython

Nếu bạn muốn code cú pháp dễ dàng như Python và hiệu suất cao như C thì Cython là lựa chọn của bạn. Bạn có thể sử dụng Cython để viết các extention C cho Python. Code Python của bạn sẽ được dịch sang code C/C++ và được tối ưu hóa. Nó sẽ cung cấp cho bạn hiệu suất cao và bạn có thể sử dụng nó trong các dự án Python của mình.

Ví dụ:
<script src="https://gist.github.com/NhamNgocTuanAnh/5905366e178ca0a91ae72ecf115f52d0.js"></script>

![image](/assets/images/emotion-detection/cython-vs-python.webp){:class="img-responsive"}
Kết quả Cython chạy nhanh hơn Python cả trục lần :>> [Trích betterprogramming.pub](https://betterprogramming.pub/skyrocket-your-python-code-with-cython-6851e357bef8)\\
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

Nói về cấu trúc máy tính : Thread là một đơn vị cơ bản trong CPU. Một luồng sẽ chia sẻ với các luồng khác trong cùng process về thông tin data, các dữ liệu của mình. Việc tạo ra thread giúp cho các chương trình có thể chạy được nhiều công việc cùng một lúc. Đa luồng có rất công dụng vô cùng hữu ích thích hợp cho những tác vụ chạy ngầm không cần quan tâm chính xác thời gian hoàn thành.

Đơn giản, ngày nay, công xưởng bạn có nhiều công nhân. Mỗi công nhân có thể làm nhiều việc. Thay vì chạy python, trong cùng một thời điểm bạn chỉ có thể sử dụng một công nhân duy nhất để làm một công việc duy nhất. Cho dù công nhân đó có to khỏe thế nào, khi giao một đống công việc cũng không thể nhanh được.


<a name="malaptrinhvagiaithich"></a>
### 4. Mã lập trình và giải thích
<script src="https://gist.github.com/NhamNgocTuanAnh/09381efa2f2d911ad8f3140f00427e33.js"></script>

<a name="ketluan"></a>
### 5. Kết luận
Tạo một ứng dụng không khó, nhưng để đáp ứng được tốc độ xử lý, độ chính xác và mức độ sử dụng resource thì cần phải tối ưu nhiều thứ:

- Giảm nhẹ kích thước mô hình thông qua: Quantization và compress mô hình.
- Optimize lại code: do Cython chạy cùng python thôi nên ghi phân luồng và queue không thật sự là phân luồng cà queue giống C++ hoặc JAVA được.
- Chuyển từ single-thread sang multi-thread.
- Allocate lại tài nguyên như CPU, Memory.
- Đặc biệt là các ứng dụng trên python thì tối ưu tốc độ xử lý là một challenge bởi python bị ràng buộc bởi cơ chế GIL (Global Interpreter Lock). Tức là nó chỉ cho phép một thread hoạt động truy suất và chỉnh sửa bộ nhớ tại một thời điểm. Do đó python không tận dụng được các tính toán đa luồng. Tuy nhiên ở python 3.2 trở đi thì python đã bắt đầu hỗ trợ đa luồng.

Về mặt thời gian phát triển phần mềm thì Python luôn trong top 5 các ngôn ngữ nhanh nhất. Nhưng vì tránh cho người dùng phải đối mặt với con trỏ hay quản lý bộ nhớ động,... đã làm tốc độ thực thi của python giảm đi đáng kể. Nhưng Cython đã là một vị cứu cánh. Bạn chỉ cần thay đổi 20% đoạn mã code của bạn để nâng 80% hiệu suất tổng thể. Vì có khá ít blog Việt nam nói chuyên sâu về Cython. Nên mình ít để ví dụ hoặc tutorial cho các bạn được. \\
(〜￣▽￣)〜Trong tương lai mình sẽ viết thêm về Cython. Các bạn chú ý đón xem nhé!! 〜(￣▽￣〜)

<style>

    table {
	width: 750px;
	border-collapse: collapse;
	margin:50px auto;
	}

/* Zebra striping */
tr:nth-of-type(odd) {
	background: #eee;
	}

th {
	background: #3498db;
	color: white;
	font-weight: bold;
	}

td, th {
	padding: 10px;
	border: 1px solid #ccc;
	text-align: left;
	font-size: 18px;
	}

/*
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table {
	  	width: 100%;
	}

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr {
		display: block;
	}

	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

	tr { border: 1px solid #ccc; }

	td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee;
		position: relative;
		padding-left: 50%;
	}

	td:before {
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
		white-space: nowrap;
		/* Label the data */
		content: attr(data-column);

		color: #000;
		font-weight: bold;
	}

}
</style>
