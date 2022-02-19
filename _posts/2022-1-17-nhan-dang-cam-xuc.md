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

### Mục lục
[1. Giới thiệu](#gioithieu)\\
[2. Phân tích bài toán](#phantichbaitoan)\\
[3. Mô hình ](#mohinhdexuat)\\
[4. Kết quả mong muốn](#trichdan,bochu)\\
*********************************

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

1. **Mạng đề xuất**
>Trong những năm gần đây, học sâu (Deep learning) đã thể hiện được ưu thế trong bài toán xử lý dữ liệu ảnh, âm thanh cả trong nghiên cứu và công nghiệp. Nên chúng ta sẽ sử dụng mô hình học sâu trong bài toán nhận dạng cảm xúc khuôn mặt.
2. **Dữ liệu - Dataset**
>Là phần quan trọng nhất. Dù thuật toán bạn có tốt tới đâu, tối ưu các thứ nhưng nếu không có dữ liệu lớn thì cũng vô dụng.

### ***Bữa sáng***

Thật tốt với một lát bánh mỳ, chèn trên là một miếng thịt lợn nướng to đùng và một phần đậu phải không nào? NÓi đến đây tôi đã thèm lắm rùi. Nhưng bạn ơi, ngồi xuốn uống miếng trà nào. Tại sao chúng ta không chọn ngũ cốc nguyên hạt, thứ mà sẽ cung cấp cho bạn và tôi một nguồn năng lượng từ carbs một cách đầy đủ. Điều thú vị là carbs này sẽ hỗ trợ não khi chúng được chuyển hóa thành đường. Não của chúng ta sẽ đáp lại bằng dopamine và serotonin (các hormone hạnh phúc), điều này sẽ thúc đẩy tâm trạng của bạn và mang lại “điều tốt lành”. Và tin tôi đi bạn sẽ không cảm thấy yếu ớt hoặc mệt mỏi trong cả ngày!

Ngoài ra bạn hãy với tay lấy một ly sinh tố từ đậu nành, lúa mỳ, trái cây và yến mạch nhé.

### ***Bữa trưa***

Phải cung cấp đủ năng lượng cho cả ngày!\\
Phải cung cấp năng lượng cho cả ngày!\\
Phải ...

Thật cám dỗ phải không?!\\
Nhưng đừng, "Căng da bụng, chùng da mắt". Ăn nhiều vào giờ ăn trưa có thể khiến bạn cảm thấy uể oải hơn nữa có thể gây ra tình trạng rối loạn tinh thần! 

Bạn nên ăn Bánh mỳ, ngũ cốc hoặc thịt, cá, trứng với salad.\\
Có một lưu ý nhỏ tôi không khuyên bạn ăn Protein với tinh bột. Tại sao không nên ăn tinh bột với protein

Phù, vậy đã qua được buổi chưa, nhưng ôi thôi, uể oải vào buổi chiều dễ đưa chúng ta tới tà tưa (trà sữa) hoặc các đồ ăn nhẹ. Chúng rất hấp dẫn vì đường chứa đầy trong chúng. Điều đó khiến tình trạng mệt mỏi có thể xảy ra tồi tệ hơn. Sếp đằng sau lưng bạn đó. Khò khò.

> Bạn có thể ăn chuối hoặc táo, những loại trái cây tuy đơn giản nhưng trong các nghiên cứu gần đây chỉ ra rằng chúng mạnh mẽ như nước tăng lực vậy.

Hãy để ý tới hơi thở

> Tỏi, hành tây, mắm tôm,... có rất nhiều thứ sẽ khiến hôi miệng. Đừng quên mang kẹo cao su nhé ;)

### ***Bữa tối***

Đến giờ ăn tối rồi! Vậy là thời khắc trọng đại đã đến! Bạn đã cẩn thận lựa chọn những gì bạn đã ăn cả ngày và hơi thở của bạn thơm hơn không khí… bạn nên gọi món gì? 

Giờ nếu tôi nói rằng thời điểm tối là thời điểm cơ thể nghỉ ngơi, tại sao bạn không cho dạ dày bạn nghỉ ngơi thì thật có lỗi =)). Nhưng thật vậy, thức ăn cần đến 8 tiếng để tiêu hóa hết trong cơ thể. Vậy