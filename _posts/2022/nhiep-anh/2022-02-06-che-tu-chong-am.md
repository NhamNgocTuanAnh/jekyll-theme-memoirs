---
layout: post
title: 'Chế hộp chống ẩm với arduino, relay, dht11  - [Cẩm nang nhiếp ảnh]'
author: sal
lazyimages: "enabled"
categories: [Nhiếp ảnh 📸, Coding 💻]
tags: [lập trình nhúng, arduino]
image: assets/images/nhiepanh/hop-chong-am-avt.jpg
rating: 4.5
isGithubComments: true
adsense: "enabled"
permalink: nhiep-anh/che-tu-chong-am
excerpt: Chế hộp chống ẩm tự ngắt
description: Tủ chống ẩm thì có chi phí khá đắt đỏ, còn họp chống ẩm tự chế thì ta phải tháo hạt hút ẩm ra để sấy lại rất tốn thời gian. Vậy có cách nào tốt hơn không? Cùng vào bài viết nhé.
keywords:
  - diy tủ chống ẩm
  - bảo quản máy ảnh
---

Hộp chống ẩm tự chế thì khá lích kích phải sấy hạt hút ẩm thường xuyên. Tủ chống ẩm ưu việt nhưng giá thành lại quá đắt. Ta sẽ phải làm gì? Một hộp chống ẩm tự chế có thể tự động sấy hạt hút ẩm. (◎ ◎)ゞ

### Mục lục

[1. Nội dung chính, cần nắm](#noidung)\\
[2. Phần cứng](#phancung)\\
[3. Mã lập trình và giải thích](#malaptrinh)

<a name="noidung"></a>

### 1. Nội dung chính, cần nắm
Ngày hôm nay admin sẽ chia sẻ về cách làm một tủ chống ẩm tự động cho riêng mình nhất.
Với những bạn không dư dả về tài chính, hay còn gọi là "đỗ nghèo khỉ" thì việc sử dụng những cách như cho máy ảnh vào hũ gạo, hay mua một hộp chống ẩm tự chế dùng hạt hút ẩm về thì là một việc hết sức quen thuộc. Nhưng hũ gạo thì có bụi còn hộp chống ẩm tự chế mỗi lần lấy máy ảnh ra lại phải lôi hạt hút ẩm ra sấy lại. Là một dân IT mình không cam tâm làm các công việc lặp đi lặp lại cũng không cầm lòng mua một tủ chống ẩm đắt đỏ cho một chiếc Canon M10 nhỏ tý hon của mình. (๑˃ᴗ˂)ﻭ

> Một hộp chống ẩm tự chế có thể tự động sấy hạt hút ẩm, nhưng khi nào sấy, khi nào dừng sấy 	( ͡ಠ ʖ̯ ͡ಠ)

<a name="phancung"></a>

### 2. Phần cứng
* Arduino UNO
* DHT11 hoặc DHT22 cho rẻ :D
* 1 module relay 5v
* 1 quạt 5v
* 1 bugi sấy, bóng đèn sợi đốt hoặc thứ gì để sinh nhiệt tương tự.

<a name="malaptrinh"></a>

### 3. Mã lập trình và giải thích

* Bước 1: Khai báo các chân đèn sấy, DHT sensor, ...
* Bước 2: Xác định nhiệt độ và độ ẩm thích hợp cho máy ảnh. Lưu ý độ ẩm thích hợp cho máy ảnh là từ 21 đến 61% không nên cao quá dễ gặp móc cũng như thấp quá dễ bong lớp cao su của máy. Còn nhiệt độ do dùng bugi sấy nhiệt độ khá cao nên để an toàn tý thôi :D
* Bước 3: void setup() khai báo các chân đèn sấy, chân quạt
* Bước 4: Bạn cho hết chúng nó vào vòng lặp vô hạn loop với khoảng thời gian 2s check điều kiện một lần. Nếu độ ấm trên 60% thì bugi sấy và quạt được kích hoạt, không thì nếu nhiệt độ quá cao hoặc độ ẩm quá thấp thì hệ thống sẽ ngưng hoạt động.

<span style="color:red;font-weight:bold">Lưu ý</span>: Tủ chống ẩm cắm điện khi mất điện lâu có thể gây hại ngược cho chính máy ảnh của bạn. Vì vậy bạn có thể để bugi sấy sấy chính các hạt hút ẩm có sẵn của bạn, từ đố khiến hộp trụ được dài hơi hơn cho tới khi có điện.

<div style="text-align:center">

  <video id="video1" width="320" muted playsinline controls>
    <source src="../../assets/images/nhiepanh/done-hop-chong-am.mp4" type="video/mp4">
    <source src="../../assets/images/nhiepanh/done-hop-chong-am.webm" type="video/webm">
    Your browser does not support HTML video.
  </video>
  <br><br>
    <button onclick="playPause()">Chạy/Tạm dừng</button>
  <button onclick="makeBig()">Phóng lớn</button>
  <button onclick="makeSmall()">Thu nhỏ</button>
  <button onclick="makeNormal()">Bình thường</button>

</div>


<p style="text-align:center; "><a href="https://anhhangxom.xyz/" target="_blank"><span style="color:red;font-weight:bold">anhhangxom.xyz</span></a> chúc bạn thành công!!! <br>☆ヾ(*´・∀・)ﾉヾ(・∀・`*)ﾉ☆</p>

### Trích nguồn

* [Lập trình cho Arduino](http://arduino.vn/bai-viet/42-arduino-uno-r3-la-gi).
* [Cách làm đèn LED nhấp nháy theo yêu cầu - arduino.vn](http://arduino.vn/bai-viet/77-bai-2-cach-lam-den-led-nhap-nhay-theo-yeu-cau).
* [Chế hộp chống ẩm - Hộp sấy mini đơn giản - kenhsangtao.com](https://www.youtube.com/watch?v=N1kYU2mnL9o&t=535s).

> |ʘ‿ʘ)╯ **one more thing**

Vì mạch Arduino UNO R3 rất hạn chế về cổng GND và 5v. Bạn có thể mua thêm Board mở rộng ProtoShield mini cho arduino uno
<p style="text-align:center;">
  <picture>
    <source srcset="../../assets/images/nhiepanh/board-mo-rong-arduino-uno.webp" type="image/webp" >
        <source type="image/jpeg" srcset="../../assets/images/nhiepanh/board-mo-rong-arduino-uno.jpg">
    <img src="../../assets/images/nhiepanh/board-mo-rong-arduino-uno.jpg" alt="Ảnh ProtoShield mini" class="lazy-bg" lazy >
  </picture>
  <br>
  Ảnh ProtoShield mini
</p>

<style>
.box{display:flex;align-items:center;justify-content:center;background:#aaa;margin:20px 0;width:100%;min-height:200px;border:2px #ccc solid;color:#fff}.row{display:flex;flex-wrap:wrap;padding:0 4px}.column{flex:25%;max-width:25%;padding:0 4px}.column img{margin-top:8px;vertical-align:middle;width:100%}@media screen and (max-width: 800px){.column{flex:50%;max-width:50%}}@media screen and (max-width: 600px){.column{flex:100%;max-width:100%}}video{max-width:100%;height:auto}
</style>
<script>
let myVideo=document.getElementById("video1");if(myVideo){function i(){myVideo.paused?myVideo.play():myVideo.pause()}function e(){myVideo.width=560}function d(){myVideo.width=228}function o(){myVideo.width=320}myVideo.play()}
</script>
