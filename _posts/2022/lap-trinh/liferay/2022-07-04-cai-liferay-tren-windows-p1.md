---
layout: post
title:  "Liferay - Tài liệu cài đặt p1"
author: sal
lazyimages: "enabled"
categories: [ Coding 💻 ]
tags: [ lập trình, liferay ]
image: assets/images/laptrinh/lifray/setup/liferay-avt.webp
isGithubComments: true
permalink: lap-trinh/cai-liferay-tren-windows-p1
excerpt: Yêu cầu máy chủ Ram tối thiểu 4GB, JDK > 1.8,...
description: Yêu cầu máy chủ Ram tối thiểu 4GB, JDK > 1.8,...
toc: true
adsense: "enabled"
keywords:
  - tài liệu cài đặt liferay
  - liferay
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
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting.jpg" alt="Cài đặt JDK"><br>
</p>
+ Chạy file cài đặt và kích chọ Next đến khi cài đặt xong
-	Cài đặt biến mối trường
+ Kích chọn cửa sổ ->< tìm đến file môi trường

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting1.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting2.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting3.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting4.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting4.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting5.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting6.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting7.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

	+ Kích chọn Ok đến lúc kết thúc
<h4>1.2.	Cài đặt môi trường apche-ant</h4>

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting8.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Di chuyển file apache – ant vào ổ C:  và giải nén file
-	Cài dặt môi trường cho apache-ant
+ Kích chọn cửa sổ ->< tìm đến file môi trường

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting9.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting10.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting11.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting12.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting13.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

	+ Kích chọn Ok để hoàn thành cấu hình
<h3>Phần 2: Cài đặt oracle databse 19c</h3>
<h4>2.1. Cài đặt database oracle 19c</h4>
-	Tạo đường dẫn thư mục: u01/app/oracle/19c
-	Copy file cài đặt oracle 19c vào thư mục u01/app/oracle/ 19c

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting14.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting15.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Giải nén file cài đặt

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting16.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Chạy file setup

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting17.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting18.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting19.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	chọn Next đến màn hình tiếp theo

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting20.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting21.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	kích chọn next tới màn hình’

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting22.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting23.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	điền mật khẩu dễ nhớ-> Next -> Yes

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting24.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting25.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting26.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	close để kết thúc quá trình cài đặt
<h4>2.2. Cài đặt Sqldeveloper</h4>

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting27.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Tải file cài đặt sqldeveloper và giải nén file

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting28.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Chạy file sqldeveloper

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting29.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Gioa điện sqldeveloper
Mở kết nối tới tài khoản quản trị SYS
-	Mở sqlplus

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting30.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Chạy câu lệnh: sqlplus / as sysdba

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting31.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Tiếp tục chạy câu lệnh: connect /as sysdba  để kết nối tới tài khoản quản trị

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting32.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Tiếp tục chạy câu lệnh: alter user sys identified by (password);( đổi mật khẩu sys)
-	Connect tới tài khoản quản trị sys
-	Khởi động sqldeveloper

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting33.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting34.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

1.	Tên (tùy ý)
2.	Username: sys
3.	Mật khẩu
4.	Role ( sysdba)
5.	Local máy chủ cài database
6.	 Port
7.	Chọn Sevice name: điền orcl
-	Tạo schemas
alter session set "_ORACLE_SCRIPT"=true;
 CREATE USER (tên user) IDENTIFIED BY (mật khẩu);
GRANT CONNECT,RESOURCE,DBA TO (tên user);
GRANT CREATE SESSION, GRANT ANY PRIVILEGE TO (tên user);
GRANT UNLIMITED TABLESPACE TO (tên user);

•	Chạy đồng thời các lệnh trên
Kết nối tới schemas vừa tạo

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting35.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

1.	Tên database
2.	Tên user mới tạo
3.	Password
4.	Chọn default
5.	Local máy chủ cài database
6.	Port
7.	Chọn service name: điền orcl
Bấm connect

<b>Tải tài liệu ở đây:</b>
<center><a class="button" href="https://drive.google.com/file/d/1kWObU82PVlm1lbr85CW3O1H-ijOBTkvS/view?usp=sharing" id="download"><i class="icon download"></i> Click To Download </a>
<button class="button" id="btn"><i class="icon download"></i> Download </button></center><hr>

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
