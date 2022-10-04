---
layout: post
title:  "Tài liệu cài đặt Liferay"
author: sal
categories: [ Lập trình, Liferay ]
tags: [ lập trình, liferay ]
image: assets/images/laptrinh/lifray/setup/liferay-avt.webp
isGithubComments: true
permalink: lap-trinh/cai-liferay-tren-windows
excerpt: Yêu cầu máy chủ Ram tối thiểu 4GB, JDK > 1.8,...
description: Yêu cầu máy chủ Ram tối thiểu 4GB, JDK > 1.8,...
toc: true
---

<style>
    ascolor {
        color: #214ECF;
        font-size: 1.5em
    }

    astext {
        font-weight: bold;
        font-family: var(--font-body-alt)
    }
</style>

<h3>Phần 1: Cài đặt môi trường</h3>
-	Yêu cầu máy chủ: Ram tối thiểu 4GB
<h4>1.1.	Cài đặt jdk</h4>
-	Tải file cài đặt jdk
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting.jpg %}
+ Chạy file cài đặt và kích chọ Next đến khi cài đặt xong
-	Cài đặt biến mối trường
+ Kích chọn cửa sổ ->< tìm đến file môi trường
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting1.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting2.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting3.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting4.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting5.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting6.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting7.jpg %}
	+ Kích chọn Ok đến lúc kết thúc
<h4>1.2.	Cài đặt môi trường apche-ant</h4>
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting8.jpg %}
-	Di chuyển file apache – ant vào ổ C:  và giải nén file
-	Cài dặt môi trường cho apache-ant
+ Kích chọn cửa sổ ->< tìm đến file môi trường
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting9.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting10.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting11.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting12.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting13.jpg %}
	+ Kích chọn Ok để hoàn thành cấu hình
<h3>Phần 2: Cài đặt oracle databse 19c</h3>
<h4>2.1. Cài đặt database oracle 19c</h4>
-	Tạo đường dẫn thư mục: u01/app/oracle/19c
-	Copy file cài đặt oracle 19c vào thư mục u01/app/oracle/ 19c
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting14.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting15.jpg %}
-	Giải nén file cài đặt
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting16.jpg %}
-	Chạy file setup
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting17.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting18.jpg %}
-	Kích chọn Next liên tục  đến mà hình sau
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting19.jpg %}
-	chọn Next đến màn hình tiếp theo
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting20.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting21.jpg %}
-	kích chọn next tới màn hình’
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting22.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting23.jpg %}
-	điền mật khẩu dễ nhớ-> Next -> Yes
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting24.jpg %}
-	kích chọn instal để bắt đầu quá trình cài đặt
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting25.jpg %}
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting26.jpg %}
-	close để kết thúc quá trình cài đặt
<h4>2.2. Cài đặt Sqldeveloper</h4>
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting27.jpg %}
-	Tải file cài đặt sqldeveloper và giải nén file
{% responsive_image path:assets/images/laptrinh/lifray/setup/jdkseting28.jpg %}
-	Chạy file sqldeveloper

<script>
    var downloadButton = document.getElementById("download");
    var counter = 15;
    var newElement = document.createElement("p");
    newElement.innerHTML = "";
    var id;
    downloadButton.parentNode.replaceChild(newElement, downloadButton);

    function startDownload() {
        this.style.display = 'none';
        id = setInterval(function() {
            counter--;
            if (counter < 0) {
                newElement.parentNode.replaceChild(downloadButton, newElement);
                clearInterval(id)
            } else {
                newElement.innerHTML = "<astext>Please wait <ascolor>" + counter.toString() + " </ascolor>second.</astext>"
            }
        }, 1000)
    };
    var clickbtn = document.getElementById("btn");
    clickbtn.onclick = startDownload;
</script>
