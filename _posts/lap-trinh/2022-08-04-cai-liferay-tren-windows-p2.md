---
layout: post
title:  "Tài liệu cài đặt Liferay phần 2"
author: sal
categories: [ Lập trình, Liferay ]
tags: [ lập trình, liferay ]
image: assets/images/laptrinh/lifray/setup/liferay-avt.webp
isGithubComments: true
permalink: lap-trinh/cai-liferay-tren-windows-p2
excerpt: Ổ cứng còn trống ít nhất 5Gb, Để chạy tốt RAM tối thiểu nên >= 4Gb,...
description: Để chạy tốt RAM tối thiểu nên >= 4Gb, Ổ cứng còn trống ít nhất 5Gb,...
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

<h3>Phần 3: Cài đặt Liferay Portal</h3>
<p>Trước hết, m&aacute;y chủ phải c&agrave;i đặt sẵn Oracle JDK phi&ecirc;n bản 1.8 trở l&ecirc;n.</p><p>Y&ecirc;u cầu phần cứng tối thiểu:</p><ul>	<li>Ổ cứng c&ograve;n trống &iacute;t nhất 5Gb.</li>	<li>&nbsp;Để chạy tốt RAM tối thiểu n&ecirc;n &gt;= 4Gb</li></ul>
<h4>3.1. Cấu hình kết nối CSDL</h4>
- Giải nén thư mục cài đặt Liferay

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting36.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

Tạo file portal-ext.properties trong thư mục liferay-ce-portal trong đường dẫn: \liferay-ce-portal-tomcat-7.3.7-ga8-20210610183559721\liferay-ce-portal-7.3.7-ga8

{% include lazyload.html image_src="../../assets/images/laptrinh/lifray/setup/jdkseting37.jpg" image_alt="Cài đặt JDK" image_title="Cài đặt JDK" %}

-	Mở file portal-ext.properties: thêm cấu hình kết nối CSDL
<div><blockquote><p style="margin-left:76px; margin-right:76px"><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><em>jdbc.default.driverClassName=oracle.jdbc.OracleDriver</em></span></span></p><p style="margin-left:76px; margin-right:76px"><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><em>jdbc.default.username=USER_NAME</em></span></span></p><p style="margin-left:76px; margin-right:76px"><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><em>jdbc.default.password=PASSWORD</em></span></span></p><p style="margin-left:76px; margin-right:76px"><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><em>jdbc.default.url=jdbc:oracle:thin:@</em><em><span style="color:#222222">localhost</span></em><em>:1521:orcl</em></span></span></p><p style="margin-left:76px; margin-right:76px">&nbsp;</p><p style="margin-left:76px; margin-right:76px"><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>jdbc.default.username</strong><span dir="ltr" lang="VI">: t&ecirc;n database</span></span></span></p><p style="margin-left:76px; margin-right:76px"><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span dir="ltr" lang="VI">jdbc.default.password</span></strong><span dir="ltr" lang="VI">: mật khẩu</span></span></span></p><p style="margin-left:76px; margin-right:76px"><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span dir="ltr" lang="VI">localhost: </span></strong><span dir="ltr" lang="VI">địa chỉ ip server c&agrave;i đặt database</span></span></span></p></blockquote></div>
-	Một vài csdl được hỗ trợ trong liferay<br>
<b>MySQL:</b><br>
jdbc.default.driverClassName=com.mysql.jdbc.Driver<br>
jdbc.default.url=jdbc:mysql://localhost:3306/DATABASE_NAME?useUnicode=true&<br>characterEncoding=UTF-8&useFastDateParsing=false<br>
jdbc.default.username=USER_NAME<br>
jdbc.default.password=PASSWORD<br>
<b>Posgresql:</b>
jdbc.default.driverClassName=org.postgresql.Driver <br>
jdbc.default.url=jdbc:postgresql://localhost:5432/DATABASE_NAME<br>
jdbc.default.username=USER_NAME<br>
jdbc.default.password=PASSWORD<br>
<b>SQL Server:</b><br>
jdbc.default.driverClassName=net.sourceforge.jtds.jdbc.Driver <br>jdbc.default.url=jdbc:jtds:sqlserver://localhost:1433/DATABASE_NAME<br>
jdbc.default.username=USER_NAME<br>
jdbc.default.password=PASSWORD<br>
<b>Chú ý:</b> Nên sử dụng một schemas mới tránh việc xung đột dữ liệu vì liferay tự sinh ra rất nhiều bảng.
<h4>3.2. Thêm đường dẫn liferay home</h4>
- Đường dẫn chứa file cài đặt liferay: thêm liferay.home=C:/Users/Administrator/Downloads/liferay-ce-portal-tomcat-7.3.7-ga8-20210610183559721/liferay-ce-portal-7.3.7-ga8 vào file portal-ext.properties( thay đổi \ thành /)
<h4>3.3. Thêm thư viện</h4>
-	Add thư viện ojdbc8.jar vào đường dẫn: … \liferay-ce-portal-tomcat-7.3.7-ga8-20210610183559721\liferay-ce-portal-7.3.7-ga8\tomcat-9.0.43\lib\ext
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting38.jpg" alt="Cài đặt JDK"><br>
</p>
-	Add thư viện liferay-portal-database-all-in-one-support-1.2.1 vào đường dẫn: …\liferay-ce-portal-tomcat-7.3.7-ga8-20210610183559721\liferay-ce-portal-7.3.7-ga8\tomcat-9.0.43\webapps\ROOT\WEB-INF\lib
<p style="text-align:center; "><img  src="../../assets/images/laptrinh/lifray/setup/jdkseting39.jpg" alt="Cài đặt JDK"><br></p>
<h4>3.4. Chạy server</h4>
Có hai cách chạy server
-	Sử dụng file startup.bat
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting40.jpg" alt="Cài đặt JDK"><br>
</p>
Chuyển đến thư mục …/liferay-ce-portal-tomcat-7.3.7-ga8-20210610183559721/liferay-ce-portal-7.3.7-ga8/tomcat-9.0.43/ tomcat-9.0.43/bin/.
<ul>	<li>	<p><span style="display:none">&nbsp;</span><span style="font-size:14pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#222222">Hệ điều h&agrave;nh Windows: Bạn double click v&agrave;o tệp tin&nbsp;<em>startup.bat</em></span></span></span></span></p>	</li></ul><ul>	<li>	<p><span style="font-size:14pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#222222">Hệ điều h&agrave;nh Linux:&nbsp;</span></span></span></span></p>	<ul>		<li>		<p><strong>Bước 1</strong>.&nbsp;<span style="font-size:14pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#222222">Bạn mở cửa sổ&nbsp;<em>Terminal</em>&nbsp;<em>&nbsp;(Ctri+Alt+T)</em></span></span></span></span></p>		</li>		<li>		<p><span style="font-size:14pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#222222"><strong>Bước 2</strong><em>.&nbsp;</em>Chuyển sang quyền root: g&otilde; lệnh&nbsp;sudo su&nbsp;v&agrave; nhập mật khẩu.Th&ecirc;m quyền thực thi cho tệp tin&nbsp;<em>catalina.sh</em>: g&otilde; lệnh&nbsp;chmod +x&nbsp;catalina.sh</span></span></span></span></p>		</li>		<li>		<p><span style="font-size:14pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#222222"><strong>Bước 3</strong>.&nbsp;G&otilde; lệnh chạy chương tr&igrave;nh:&nbsp;./catalina.sh run</span></span></span></span>.&nbsp;<span style="font-size:14.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#222222">Khi m&aacute;y chủ đưa ra th&ocirc;ng b&aacute;o: &quot;</span></span></span><span style="font-size:14.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:red">INFO: Server startup in xxxx ms&quot;&nbsp;</span><span style="color:#222222">nghĩa l&agrave; m&aacute;y chủ đ&atilde; khởi động xong.</span></span></span><span style="display:none">&nbsp;</span></p>		</li>	</ul>	</li></ul>
-	Sử dụng liferay developer chạy server
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting41.jpg" alt="Cài đặt JDK"><br>
</p>
-	Chạy file cài đặt liferay developer
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting42.jpg" alt="Cài đặt JDK"><br>
</p>
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting43.jpg" alt="Cài đặt JDK"><br>
</p>
-	Kích chọn next cho tới khi cài đặt xong
-	Chạy liferay developer
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting44.jpg" alt="Cài đặt JDK"><br>
</p>
Thêm server liferay
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting45.jpg" alt="Cài đặt JDK"><br>
</p>
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting46.jpg" alt="Cài đặt JDK"><br>
</p>
-	Thêm đường dẫn liferay: C:\Users\Administrator\Downloads\liferay-ce-portal-tomcat-7.3.7-ga8-20210610183559721\liferay-ce-portal-7.3.7-ga8
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting47.jpg" alt="Cài đặt JDK"><br>
</p>
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting48.jpg" alt="Cài đặt JDK"><br>
</p>
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting49.jpg" alt="Cài đặt JDK"><br>
</p>
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting50.jpg" alt="Cài đặt JDK"><br>
</p>
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting51.jpg" alt="Cài đặt JDK"><br>
</p>
-	Chọn đến file cài đặt jdk
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting52.jpg" alt="Cài đặt JDK"><br>
</p>
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting53.jpg" alt="Cài đặt JDK"><br>
</p>
-	Chạy server
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting54.jpg" alt="Cài đặt JDK"><br>
</p>
-	Truy cập vào địa chỉ 10.7.57.86
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting55.jpg" alt="Cài đặt JDK"><br>
</p>
-	Chọn finish để hoàn tất cấu hình
-	Làm theo các bước thay đổi mật khẩu và xác thực
<p style="text-align:center; ">
  <img  src="../../assets/images/laptrinh/lifray/setup/jdkseting56.jpg" alt="Cài đặt JDK"><br>
  Giao diện liferay
</p>

<b>Tải tài liệu ở đây:</b>
<center><a class="button" href="https://drive.google.com/file/d/1xP4kCtnGs1204WWUI0bWXO3RYEZcknJA/view?usp=sharing" id="download"><i class="icon download"></i> Click To Download </a>
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
