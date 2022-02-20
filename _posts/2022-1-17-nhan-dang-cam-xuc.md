---
layout: post
title:  "Nhận dạng cảm xúc qua ảnh. Phần 1. Tổng quan bài toán"
author: sal
categories: [ Học máy ]
tags: [ Học máy, Python, Lập trình ]
image: assets/images/happy-ex.webp
rating: 4.5
comments: false
---

<!-- > Chúng ta là những gì mà chúng ta ăn vào.  -->
Phát hiện cảm xúc khuôn mặt là bước phát triển tiếp sau của việc phát hiện khuôn mặt,  phân chia cảm xúc khuôn mặt
thành 7 nhóm thể hiện chính: Vui vẻ, Ngạc nhiên, Hài lòng, Buồn bực, Cáu giận, Phẫn nộ và Sợ hãi

Với hàng chục ngàn năm tiến hóa và hàng chục cơ nhỏ bên dưới da, khuôn mặt là một nguồn thông tin phong phú, phi ngôn ngữ.Chúng ta có thể phát hiện một phạm vi cảm xúc khổng lồ trên gương mặt của một người

---
### Mục lục
[1. Giới thiệu](#gioithieu)\\
[2. Phân tích bài toán](#phantichbaitoan)\\
[3. Mô hình ](#mohinhdexuat)\\
[4. Triển khai ](#trienkhai)

---

<a name="gioithieu"></a>
### 1. Giới thiệu
Với bài toán với đầu vào là một ảnh với kích cỡ nxn, ta phải đi tìm một thuật toán để xác định xem với ảnh đầu vào đó, kết quả trả ra là đối tượng trong ảnh đang có cảm xúc gì. Có thể ví nó như công thức pytago. Tìm 1 cạnh của tam giác vuông khi biết 2 cạnh còn lại.

Nhưng để viết đc một thuật toán để có thể xác định được cảm xúc 1 người trong ảnh thực sự không thể. Vì sao

Vì dữ liệu đầu vào thì muôn dạng, muôn vẻ: góc độ khác nhau, ánh sáng và chất lượng hình ảnh quá khác nhau

⇒ Và lời giải ở đây học máy.

Sức mạnh của học máy chính là việc có thể xác định cách phân biệt cảm xúc bằng mô hình thay vì đánh giá của con người với những quy tắc tự nhiên.

Chúng ta xây dựng được gọi là một “mô hình” (model) và mô hình này được tạo ra thông qua quá trình được gọi là “huấn luyện” (training).

Mục đích huấn luyện là để tạo ra một mô hình chuẩn xác, trả lời những câu hỏi của chúng ta một cách chính xác trong hầu hết các đầu vào mà ta đưa vào.

<a name="phantichbaitoan"></a>
### 2. Phân tích bài toán
Đây là một bài toán phân lớp tương đối tiêu chuẩn. Một hệ thống nhận diện cảm xúc khuôn mặt thường được triển khai gồm **2 bước**.

1. **Nhận ảnh và tiền xử lý.** Ảnh khuôn mặt được lấy từ nguồn dữ liệu tĩnh (chẳng hạn như từ file, database), hoặc động (từ livestream, webcam, camera,…), nguồn dữ liệu này có thể trải qua một số bước tiền xử lý nhằm tăng chất lượng hình ảnh để giúp việc phát hiện cảm xúc trở nên hiệu quả hơn.
2. **Phân lớp nhận dạng cảm xúc.** 

<a name="mohinhdexuat"></a>
### 3. Mô hình đề xuất

## A. Mạng đề xuất
>Trong những năm gần đây, học sâu (Deep learning) đã thể hiện được ưu thế trong bài toán xử lý dữ liệu ảnh, âm thanh cả trong nghiên cứu và công nghiệp. Nên chúng ta sẽ sử dụng mô hình học sâu trong bài toán nhận dạng cảm xúc khuôn mặt.
## B. Dữ liệu - Dataset
>Là phần quan trọng nhất. Dù thuật toán bạn có tốt tới đâu, tối ưu các thứ nhưng nếu không có dữ liệu lớn thì cũng vô dụng.

Dữ liệu FER-2013 được công bố bởi trang Kaggle trong khuôn khổ workshop của hội thảo ICML 2013. Dữ liệu
gồm các ảnh đa cấp xám cỡ 48x48 chỉ gồm khuôn mặt hầu như được căn giữa ảnh và tỉ lệ khuôn mặt được điều chỉnh chiếm phần lớn diện tích của ảnh. Bộ dữ liệu này gồm 35k ảnh. Mỗi ảnh sẽ được gán nhãn nằm một trong bảy loại cảm xúc giá trị từ 0 đến 6 (0: giận dữ, 1: căm phẫn, 2: sợ hãi, 3: hạnh phúc, 4: buồn rầu, 5: bất ngờ, 6: trung lập).

![image](/assets/images/fer-2013.webp){:class="img-responsive"}

## C. Tăng cường dữ liệu
   
Như đã nói ở trên, dữ liệu đóng vai trò quan trọng nhất trong việc thành bại của bài toán. Nhưng không phải lúc nào ta cũng được tiếp cận tới các nguồn dữ liệu lớn. Nên ta sẽ phải Data Augment , tạm dịch Tăng Cường Dữ liệu.
![image](/assets/images/Image-Data-Generator.webp){:class="img-responsive"}
Việc phụ thuộc vào dữ liệu và ứng dụng, kiến trúc mạng,kể trên đồng nghĩa với việc bạn cần phải thử kha khá, và chắc chắn sẽ tốn rất nhiều thời gian mà chưa chắc tìm ra cách augmentation tốt nhất.
1. **Đào tạo mô hình**
Mô hình được áp dụng là mô hình CNN. Kết quả thử nghiệm trên dữ liệu kiểm tra đạt mức độ chính xác khoảng 65% (trung bình 300 lần huấn luyện). Chi tiết ở [đây](https://github.com).
<a name="trienkhai"></a>

### 4. Triển khai
Để triển khai huấn luyện và thử nghiệm mô hình đề xuất, ngôn ngữ Python và thư viện Keras/TensorFlow được
sử dụng cho việc xây dựng mô hình mạng CNN. Dữ liệu FER-2013 được tiền xử lý , sinh thêm ảnh, ngoại trừ việc chuyển đổi đa cấp xám từ dạng số nguyên 0 đến 255 về miền số thực [0, 1] nhằm hỗ trợ tốt hơn cho dữ liệu đầu vào của mạng tích chập.\\
Ngôn ngữ Python kết hợp thêm OpenCV cũng được sử dụng để viết chương trình minh họa hỗ trợ cho việc xử
lý dữ liệu đầu vào từ webcam/camera.
## A. Với ảnh
   
1. Ảnh đầu vào được chuyển thành đa cấp xám;
2. Dùng haar cascade (OpenCV) tìm kiếm vùng mặt người trên ảnh đầu vào;
3. Vùng ảnh mặt người được chuyển đổi về kích thước 48x48;
4. Ảnh 48x48 đa cấp xám chuyển đổi về miền [0, 1] sau đó đưa vào mô hình CNN;
5. Đầu ra của CNN là xác suất của các cảm xúc, chọn cảm xúc có xác xuất cao nhất làm kết quả cuối cùng.

## B. Với video
Vấn đề này dễ dàng hơn vì chúng ta có rất nhiều thông tin về khuôn mặt
dựa vào các khung hình liên tiếp, và vấn đề này cũng thực tiễn hơn nhiều so
với nhận dạng cảm xúc trong không gian 2D.\\
Việc nhận dạng cảm xúc khuôn mặt được thực hiện trên các bức ảnh, do
đó việc lấy ảnh từ camera ta phải chuyển thành các ảnh tĩnh và xử lý trên
từng ảnh tĩnh. Khi đã có ảnh đầu vào, tiếp tục chuyển ảnh cho quá trình xử
lý tiếp theo.
---
## Kết quả 
![image](/assets/images/result-fail.webp){:class="img-responsive"}

(〜￣▽￣)〜 trong các phần tiếp theo. Mình sẽ đi sâu vào quá trình training, tối ưu code và tối ưu bài toán. Các bạn chú ý đón xem nhé. 〜(￣▽￣〜)