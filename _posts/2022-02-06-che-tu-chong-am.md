---
layout: post
title: '[DIY] Hộp chống ẩm máy ảnh với arduino, relay, dht11  - [Cẩm nang nhiếp ảnh]'
author: sal
categories: [Nhiếp ảnh, Lập trình]
tags: [nhiếp ảnh, diy, lập trình nhúng, arduino]
image: assets/images/nhiepanh/hop-chong-am-avt.png
rating: 4.5
comments: false
---

Với những bạn không dư dả về tài chính, hay còn gọi là "đỗ nghèo khỉ" thì việc sử dụng những cách như cho máy ảnh vào hũ gạo, hay mua một hộp chống ẩm tự chế dùng hạt hút ẩm về thì là một việc hết sức quen thuộc. Nhưng hũ gạo thì có bụi còn hộp chống ẩm tự chế mỗi lần lấy máy ảnh ra lại phải lôi hạt hút ẩm ra sấy lại. Là một dân IT mình không cam tâm làm các công việc lặp đi lặp lại. (๑˃ᴗ˂)ﻭ

### Mục lục

[1. Nội dung chính, cần nắm](#noidung)\\
[2. Phần cứng](#phancung)\\
[3. Mã lập trình và giải thích](#malaptrinh)

<a name="noidung"></a>

### 1. Nội dung chính, cần nắm
Ngày hôm nay admin sẽ chia sẻ về cách làm một tủ chống ẩm tự động cho riêng mình nhất.
<a name="phancung"></a>

### 2. Phần cứng
* Arduino UNO
* DHT11 hoặc DHT22 cho rẻ :D
* 1 module relay 5v
* 1 quạt 5v
* 1 bugi sấy, bóng đèn sợi đốt hoặc thứ gì đố sinh nhiệt tương tự

<a name="malaptrinh"></a>

### 3. Mã lập trình và giải thích
{% gist 789025c391ffb868bca20f4737103127 %}

* Bước 1: Khai báo các chân đèn sấy, DHT sensor, ...
* Bước 2: Xác định nhiệt độ và độ ẩm thích hợp cho máy ảnh. Lưu ý độ ẩm thích hợp cho máy ảnh là từ 21->61% không nên cao quá dễ gặp móc cũng như thấp quá dễ bong lớp cao su của máy. CÒn nhiệt độ do dùng bugi sấy nhiệt độ khá cao nên để an toàn tý thôi :D
* Bước 3: void setup() khai báo các chân đèn sấy, chân quạt
* Bước 4: Bạn cho hết chúng nó vào vòng lặp vô hạn loop với khoảng thời gian 2s check điều kiện một lần. Nếu độ ấm trên 60% thì bugi sấy và quạt được kích hoạt, không thì nếu nhiệt độ quá cao hoặc độ ẩm quá thấp thì hệ thống sẽ ngưng hoạt động.

> lưu ý: tủ chấm ẩm cắm điện khi mất điện lâu có thể gây hại ngược cho chính máy ảnh của bạn. Vì vậy bạn có thể để bugi sấy sấy chính các hạt hút ẩm có sẵn của bạn, từ đố khiến hộp trụ được dài hơi hơn cho tới khi có điện.

anhhangxom.xyz chúc bạn thành công ☆ヾ(*´・∀・)ﾉヾ(・∀・`*)ﾉ☆

> one more thing

Vì mạch Arduino UNO R3 rất hạn chế về cổng gnd và 5v. Bạn có thể mua thêm Board mở rộng ProtoShield mini cho arduino uno
<p style="text-align:center;">
  <picture>
    <source srcset="../../assets/images/nhiepanh/board-mo-rong-arduino-uno.webp" type="image/webp" >
        <source type="image/jpeg" srcset="../../assets/images/nhiepanh/board-mo-rong-arduino-uno.jpg">
    <img src="../../assets/images/nhiepanh/board-mo-rong-arduino-uno.jpg" alt="Hướng ánh sáng" >
  </picture>
</p>
<p style="text-align:center;">Ảnh ProtoShield mini</p>

### Trích nguồn

* [Cách làm đèn LED nhấp nháy theo yêu cầu - arduino.vn](http://arduino.vn/bai-viet/77-bai-2-cach-lam-den-led-nhap-nhay-theo-yeu-cau).
* [Sao Kbiz mặt bị lệch nhưng vẫn thành cực phẩm nhan sắc - kenh14.vn](https://kenh14.vn/sao-kbiz-mat-bi-lech-nhung-van-thanh-cuc-pham-nhan-sac-jennie-irene-tzuyu-thanh-luon-nu-than-kim-soo-hyun-hot-thay-la-20201215121007454.chn).
* [NHỮNG THÓI QUEN XẤU LÀM GƯƠNG MẶT BỊ LỆCH VÀ CÁCH KHẮC PHỤC HIỆU QUẢ - nhakhoavinhan.com](https://nhakhoavinhan.com/mat-bi-lech/).

<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #aaa;
  margin: 20px 0;
  width: 100%;
  min-height: 200px;
  border: 2px #ccc solid;
  color: #fff;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {

    flex: 50%;
    max-width: 50%;

  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {

    flex: 100%;
    max-width: 100%;

  }
}
</style>
