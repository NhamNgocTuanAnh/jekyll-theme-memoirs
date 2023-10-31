---
layout: post
title: 'Trở lại đường đua. Phần 1'
author: sal
categories: [ Coding 💻 ]
tags: [ tips,tool ]
image: assets/images/2023/lap-trinh/avts/javascript-come-back-avt.webp
lazyimages: "enabled"
isGithubComments: false
excerpt: Cộng đồng Tasker VN có vẻ hơi yếu. Mình đã rất chật vật khi tìm hiểu về ứng dụng này. và nay mình viết những hiểu biết của mình về nó.
adsense: "enabled"
keywords:
  - Tasker
  - Chia sẻ profile tasker
  - Tối ưu Tasker
  - Tasker là gì?
  - Android Automation
  - Shortcuts android
date: 2023-10-30 10:01:10 +0700
permalink: lap-trinh/tro-lai-duong-dua-p1-nhin-lai-thi-truong
---

> Bài viết đang trong quá trình phát triển, vui lòng quay lại sau!!!😅

**_Lưu ý_**: Bài viết này mình muốn hướng đến các bạn đã có hiểu biết về tasker. Cộng đồng Tasker VN có vẻ hơi yếu. Mình đã rất chật vật khi tìm hiểu về ứng dụng này. và nay mình viết những hiểu biết của mình về nó.

## [**Mẫu mô tả công việc Lập trình Backend chuẩn**](https://github.com/NhamNgocTuanAnh/the-way-to-full-stack/blob/master/backend-developer-job-description-template.md#m%E1%BA%ABu-m%C3%B4-t%E1%BA%A3-c%C3%B4ng-vi%E1%BB%87c-l%E1%BA%ADp-tr%C3%ACnh-backend-chu%E1%BA%A9n)

**Nội dung công việc:**

*   Tham gia vào toàn bộ vòng đời của ứng dụng, tập trung coding và debug các dự án website và hệ thống.
*   Viết API kết nối giữa các hệ thống, phục vụ trao đổi dữ liệu giữa mobile và frontend.
*   Xây dựng code có thể dử dụng lại và các thư viện để thuận tiện có thể sử dụng cho tương lai.
*   Thu thập và xử lý các yêu cầu cần thiết và kỹ thuật.
*   Nghiên cứu và áp dụng các công nghệ mới, để tối ưu hóa hiệu quả việc phát triển sản phẩm mới.
*   Tham gia vào quá trình thiết kế và phân tích hệ thống.

**Yêu cầu ứng viên:**

*   Kiến Kinh nghiệm thức sâu phát về JavaScript, triển ứng dụng/services ReactJS về mặt Back-End.
*   Thành thạo lập trình với một trong các ngôn ngữ backend
*   Nắm rõ toàn bộ quá trình phát triển web
*   Có hiểu biết cơ bản về cơ sở dữ liệu và hệ thống: MySQL, MongoDB hay PostgreSQL
*   Có kiến thức về lập trình hướng đối tượng.

**Quyền lợi ứng viên:**

*   Đánh giả 2 lần một năm, xét lương định kỳ.
*   Thu nhập upto 15 tháng lương / năm
*   Phụ cấp ăn trưa, gửi xe.
*   Khám sức khỏe định kỳ hàng năm
*   Du lịch công ty, teambuilding,…

## **Thực tế**

hỏi linh tinh thì có ông còn hỏi dùng node version mấy rồi =))).

hỏi hẳn hoi tí thì nói mấy cái security, callback... khi nào dùng, trường hợp này xử lí như nào (ví dụ request time out,,,,)/

mấy chỗ chuyên nghiệp hơn nó chỉ hỏi sơ vài câu rồi ném bài test về làm, viết Rest Api trong mấy tiếng hay mấy ngày gì đó, nội dung nó đưa (yêu cầu thêm jwt chẳng hạn, hoặc yêu cầu database. Có thằng thì cho dùng database nào cũng đc.)

Túm lại phỏng vấn chủ yếu chém gió, nhưng lựa sức mình mà chém =))))))

## **Câu hỏi phỏng vấn**

<details>
  <summary><i><b>Giới thiệu sơ lược về bản thân bạn? (Could you briefly Introduce yourself?)</b></i></summary>
  Hầu hết nhà tuyển dụng đều dùng câu hỏi này để bắt đầu câu chuyện với ứng viên. Mục đích câu hỏi này là để đánh giá phong thái và cách trình bày của ứng viên. Lúc này, tùy thuộc vào câu trả lời của ứng viên mà nhà tuyển dụng sẽ đánh giá đây có phải là một ứng viên phù hợp hay không và đưa ra các câu hỏi tiếp theo để đánh giá kỹ năng, tính cách và kinh nghiệm làm việc.
  <details>
    <summary>lưu ý</summary>
    Tip: Để trả lời tốt câu hỏi này, bạn cần đưa ra khái quát những thông tin về cá nhân có liên quan, hữu ích cho vị trí mà mình ứng tuyển như: công việc hiện tại, trình độ học vấn, mục tiêu sự nghiệp,… Bạn nên cân nhắc giới thiệu bản thân theo trình tự thời gian quá khứ, hiện tại và tương lai cũng như gói gọn trong tối đa 2 phút. Chia sẻ ngắn về sở thích, tính cách cũng là một cách thu hút nhà tuyển dụng, tuy nhiên cũng không nên nói quá nhiều về những vấn đề này với nhà tuyển dụng.Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt:"Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công ty. Em chào anh/ chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai. Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ. Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác, có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao. Và em tin những điều này sẽ có ích đối với vị trí này. Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng."Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Anh:"Before I introduce myself, I would like to thank you very much for giving me / me the opportunity to talk about the position of your company. / sister, my name is Mai, my full name is Trinh Thi Tuyet Mai. I am a fresh graduate of University X, when I was a student, I used to have some part-time jobs but none is not really significant, because the work I did was quite simple. Nonetheless I learned to be patient and meticulous. Through these jobs, I have more experience in interpersonal skills, observation, and high pressure tolerance. I believe these will be useful for this position through understanding carefully about the job position and working environment For me, I really want to have the opportunity to work with you at company Y as a client consultant. "
  </details>
</details>

<details>
  <summary><i><b>Bạn có thể mô tả sơ lược về những công việc bạn đã làm? Nhiệm vụ chính ở công việc gần đây nhất của bạn là gì? (Can you briefly describe the work you have done? What was the main tasks at your most recent job?)</b></i></summary>
Mục đích của câu hỏi này để đánh giá về năng lực và những kinh nghiệm làm việc của bạn có phù hợp với vị trí đang ứng tuyển hay không.Tip: Được đánh giá là một trong các câu hỏi phỏng vấn thường gặp và quan trọng, cách trả lời phỏng vấn câu hỏi này là nên chân thật, nó giống như bạn đang chia sẻ những kinh nghiệm của bản thân, đừng cố nói những gì mình không biết, bạn sẽ không trả lời được nếu nhà tuyển dụng hỏi sâu hơn về chuyên môn.Hãy nói những gì bạn được học hay những gì biết về công việc một cách ngắn gọn và đủ, cũng không nên kể chi tiết các công việc, quá dài dòngTrong trường hợp bạn chưa có nhiểu kinh nghiệm, hãy nói bạn đang muốn theo đuổi công việc này và dành nhiều thời gian học hỏi, phát triển kỹ năng, bạn đang mong muốn tìm được một công ty tốt để gắn bó và cống hiến lâu dài.Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt:"Trước kia, tôi đã làm trợ lý hành chính cho một giám đốc tại Nhà xuất bản Sách và tôi đã hỗ trợ sắp xếp lịch trình cho cho ông ấy cũng như cho toàn văn phòng. Công việc của tôi là chăm sóc tất cả các chi tiết hành chính để ông ấy có thể tập trung vào các dự án của mình. Tôi đã làm tất cả mọi thứ từ việc đặt vé chuyến bay để chuẩn bị và in ấn các bản tường trình để nộp làm báo cáo chi phí.”Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Anh:"In the past, I worked as an administrative assistant for a director at the Book Publishing House. I assisted with scheduling for him as well as for the entire office. My job was to take care of all administrative details so that he could focus on his projects. I did everything from booking a flight, preparing and printing reports and submitting an expense report. "
</details>
