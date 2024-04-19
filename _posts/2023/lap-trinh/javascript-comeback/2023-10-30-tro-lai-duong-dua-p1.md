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
date: 2024-05-01 10:01:10 +0700
permalink: coding/tro-lai-duong-dua-p1-nhin-lai-thi-truong
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

<details>
  <summary><i><b>Những thành tựu nào đã đạt được trong công việc khiến bạn tự hào nhất? (What achievements in your job are you most proud of?)</b></i></summary>
  Mục đích câu hỏi này là để nhà tuyển dụng biết được mức độ thành thạo trong công việc của ứng viên và năng suất làm việc của họ như thế nào.Tip: Bạn cần liệt kê những thành tựu trong cả quãng thời gian đi học: bạn đạt được những giải thưởng gì, bạn tham gia cuộc thi gì,... lý do là để bạn dẫn dắt nhà tuyển dụng vào những thành tích của mình theo một chuỗi những hoạt động từ ngày bạn đi học, thể hiện bạn là một ứng viên xuất sắc, tham gia hoạt động nhiệt tình, kỹ năng mềm rất tốt. Khi nói về các thành tích trong công việc, hãy kể về các thành tích bạn đã đạt được trong các dự án trước đây, những giá trị mang lại cho công ty, kể về vai trò của bạn trong dự án, những công việc đã thực hiện hay cả những khó khăn đã gặp phải trong quá trình thực hiện. Hãy thể hiện sự tâm huyết với công việc, kể cả với công việc ở công ty cũ, bạn nên nêu cảm xúc khi bạn đạt được những thành tựu và những bài học tích cực bạn rút ra được từ những lần đó.Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt:"Tôi từng được bầu chọn làm nhân viên của tháng chỉ trong vòng hai tháng đầu làm việc – điều rất ít người đạt được tại công ty X. Thành tựu này đến từ việc áp dụng chuẩn service trong chương trình học vào một nơi có hoạt động chuyên nghiệp như công ty X. Điều này tuy không đem lại lợi thế tài chính nhưng có giá trị tinh thần rất lớn với tôi"Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Anh:"I was nominated as the employee of the month in just the first two months of my job - something very few people achieve at company X. This achievement comes from applying service standards in the curriculum to a place where there are professional activities like Company X. This does not bring financial advantages, but it is of great spiritual value to me "
</details>

<details>
  <summary><i><b>Tình huống khó khăn nhất trong công việc bạn từng gặp là gì? Cách bạn giải quyết vấn đề khó khăn đó như thế nào? (What was the toughest job situation you've ever encountered? How do you solve that difficult problem?)</b></i></summary>
  Khi hỏi câu này, NTD muốn biết bạn có khả năng tư duy để tìm ra giải pháp cho tất cả vấn đề bạn gặp phải hay không.Tip: Ngay cả khi vấn đề của bạn là không có đủ thời gian để học tập, nghiên cứu, bạn cũng cần cho NTD thấy cách bạn đã điều chỉnh thứ tự ưu tiên trong lịch làm việc của mình để giải quyết nó. Việc này chứng tỏ bạn là người có tinh thần trách nhiệm và có thể tự mình tìm ra giải pháp cho vấn đề gặp phải.Bạn có thể trả lời bằng cách nêu lên các khó khăn gặp phải khi thực hiện công việc, đảm bảo tuân thủ các kế hoạch, hoàn thành đúng thời hạn và quản lý nguồn ngân sách. Hãy sử dụng đại từ “tôi” và nhấn mạnh các yếu tố quan trọng (dựa trên nhu cầu và văn hoá của công ty).Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt:"Trong quá trình làm công việc chăm sóc khách hàng, tôi từng gặp trường hợp khách hàng phàn nàn về sản phẩm của công ty một cách rất khó chịu và thậm chí họ lớn tiếng với tôi. Điều đầu tiên tôi làm chính là xin lỗi khách hàng vì đã có những điều chưa hài lòng khi sử dụng sản phẩm của công ty. Sau đó tôi đã cố gắng tìm hiểu nguyên do vì khách hàng khó chịu đồng thời hỏi ý kiến của cấp trên về những chính sách ưu đãi cho khách hàng này"Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Anh:"In the process of customer care, I have encountered a customer who complained about the company's products in a very annoying way and they even raised their voice at me. The first thing I did was apologize for their dissatisfaction when using the company's products. After that, I tried to find out the reason why the customers were upset and consulted with superiors about preferential policies for customers."
</details>

<details>
  <summary><i><b>Hãy kể về một trường hợp mà bạn cảm thấy hối tiếc trong cuộc sống/công việc. Vì sao bạn cảm thấy hối tiếc về điều đó? Nếu có thể làm lại, bạn nghĩ mình sẽ làm điều gì để có kết quả tốt hơn? (Talk about a situation where you regretted your life / work. Why do you regret that? If you could do it again, what do you think you would do to get better results?)</b></i></summary>
  Với các câu hỏi phỏng vấn dạng này, nhà tuyển dụng muốn biết bạn đã từng gặp tình huống nào khó khăn nhất, và bạn đã giải quyết tình huống đó như thế nào, rút ra được những bài học kinh nghiệm gì cho tương lai.Tip: khi trả lời phỏng vấn câu hỏi này bạn cần khẳng định rõ mình xử lý tình huống đó như thế nào, bạn rút được những kinh nghiệm gì từ tình huống đó, bạn là một người kiên trì luôn cố gắng giải quyết vấn đề đến cùng. Một khi bạn làm được điều này thì nhà tuyển dụng chắc chắn sẽ đánh giá rất cao về bạn.Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt:"Tôi đã từng đánh giá sai về một sản phẩm cao cấp cho một khách hàng mới. Khách hàng thấy đó là một thỏa thuận tốt và chúng tôi ngay lập tức bắt đầu tiến hành việc mua bánvà tôi nhận ra mình đã báo giá sai khi dán mã sản phẩm vào hệ thống. Tôi không biết liệu khách hàng vẫn đồng ý mua hàng hay không sau khi biết chi phí thực của mặt hàng. Vì vậy, thay vì báo luôn giá thực tế và có nguy cơ bị khách hủy đơn hàng, tôi yêu cầu khách hàng chờ đợi trong khi tôi nói chuyện với người giám sát của tôi. Tôi thừa nhận là mình đã mắc sai lầm và yêu cầu sự giúp đỡ, thú thực rằng tôi không chắc là nên để cho đơn hàng bị hủy hay nên bán hàng với giá thấp như thế. Người giám sát của tôi đã giúp tôi giải thích sai lầm với khách hàng và cho phép tôi sử dụng mức giảm giá dành cho cấp quản lý của ông ấy. Tôi vẫn có được đơn hàng thành công và học được một bài học quý giá trong việc kiểm tra lại giá cả, cũng như tin tưởng vào người giám sát của mình. "Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Anh:"I used to misjudge a premium product to a new customer. The client found it to be a good deal and we immediately started making a purchase and I realized I made a false quote when paste the product code into the system I don't know if the customer still agrees to buy after knowing the actual cost of the item, so instead of quoting the actual price and risk of customer canceling the order I ask the client to wait while I speak to my supervisor I admit I made a mistake and ask for help, confessing I'm not sure I should let the order be canceled or should I sell at such a low price. My supervisor helped me explain the mistake to a client and allowed me to use his management discount and learned a valuable lesson in checking prices and trusting your supervisor. "
</details>

*   Loay hoay hàng giờ để giải quyết vấn đề nhưng ko ghi chép lại
*   Ko để tâm đến việc thực hiện code review
*   Viết quá nhiều (hoặc quá ít) comment cho code
*   Ko dành thời gian hướng dẫn những dev khác trong team
*   Bỏ qua error messages
*   Tối ưu hoá code trước khi hoàn thành những đoạn code khác
*   Ko nắm rõ những gì mình đang sử dụng: text editors, command line v.vv..
*   Tối ưu hóa code hay là code dễ đọc. Bỏ ý định tối ưu hóa đi

### Chỉnh sửa kế hoạch "Think Big, Start Small, Learn Fast" để hoàn thành trong 1 tháng

### **Think Big:** Mục tiêu lớn là:

*   Tìm việc lập trình trở lại trong vòng 1 tháng.
*   Nâng cao trình độ tiếng Anh để giao tiếp và học hỏi hiệu quả.
*   Xây dựng kênh TikTok thu hút lượng người theo dõi nhất định.

### **Start Small:** Bắt đầu từ những bước nhỏ:

*   **Tuần 1:**
    *   **Lập trình:** Ôn tập kiến thức lập trình cơ bản, tìm hiểu các công nghệ mới. Dành 4-5 tiếng mỗi ngày để luyện tập.
    *   **Tiếng Anh:** Bắt đầu với các bài học tiếng Anh cơ bản, tập trung vào kỹ năng nghe và nói. Dành 2-3 tiếng mỗi ngày để học.
    *   **TikTok:** Nghiên cứu các kênh TikTok thành công trong lĩnh vực nhiếp ảnh, tìm hiểu về thuật toán và cách tạo nội dung thu hút. Dành 1-2 tiếng mỗi ngày để nghiên cứu và lên kế hoạch.
*   **Tuần 2:**
    *   **Lập trình:** Tham gia các cộng đồng lập trình, tìm kiếm việc làm phù hợp với kỹ năng và kinh nghiệm. Dành 4-5 tiếng mỗi ngày để tìm việc và ôn luyện.
    *   **Tiếng Anh:** Tham gia các khóa học tiếng Anh trực tuyến hoặc offline, luyện tập giao tiếp với người bản ngữ. Dành 2-3 tiếng mỗi ngày để học.
    *   **TikTok:** Bắt đầu tạo nội dung cho kênh TikTok, tập trung vào chất lượng hình ảnh và nội dung hấp dẫn. Dành 2-3 tiếng mỗi ngày để sáng tạo nội dung.
*   **Tuần 3:**
    *   **Lập trình:** Tham gia các buổi phỏng vấn, thể hiện kỹ năng và kinh nghiệm. Dành 4-5 tiếng mỗi ngày để ôn luyện và chuẩn bị cho phỏng vấn.
    *   **Tiếng Anh:** Tham gia các hoạt động giao tiếp tiếng Anh, luyện tập kỹ năng nghe nói. Dành 2-3 tiếng mỗi ngày để học.
    *   **TikTok:** Đăng tải video lên kênh TikTok, tương tác với người xem và phân tích hiệu quả nội dung. Dành 2-3 tiếng mỗi ngày để quản lý kênh.
*   **Tuần 4:**
    *   **Lập trình:** Nhận việc lập trình phù hợp, bắt đầu làm việc và tiếp tục học hỏi nâng cao kỹ năng. Dành 8 tiếng mỗi ngày cho công việc.
    *   **Tiếng Anh:** Tiếp tục học tiếng Anh để nâng cao trình độ, giao tiếp hiệu quả trong công việc. Dành 1-2 tiếng mỗi ngày để học.
    *   **TikTok:** Duy trì đăng tải video, tối ưu nội dung và phát triển kênh. Dành 1-2 tiếng mỗi ngày để quản lý kênh.

| **Thời gian** | **Hoạt động** |
| --- | --- |
| **Tuần 1** |   |
| Ngày 1: | **Tìm việc lập trình**: Tìm hiểu thị trường việc làm, cập nhật hồ sơ LinkedIn. |
| Ngày 2-5: | **Học tiếng Anh**: Học từ vựng mới, luyện ngữ pháp, và thực hành giao tiếp. |
| Ngày 6-7: | **Tạo video TikTok**: Chọn một chủ đề, quay video, và chỉnh sửa. |
| **Tuần 2** |   |
| Ngày 8-10: | **Tìm việc lập trình**: Liên hệ với các công ty hoặc tham gia cộng đồng lập trình. |
| Ngày 11-14: | **Học tiếng Anh**: Tham gia lớp học trực tuyến hoặc xem video học. |
| Ngày 15-18: | **Tạo nội dung TikTok**: Tìm hiểu về xu hướng, tạo video mới. |
| **Tuần 3** |   |
| Ngày 19-21: | **Học tiếng Anh**: Thực hành giao tiếp tiếng Anh qua các cuộc trò chuyện hoặc video học. |
| Ngày 22-25: | **Tạo video TikTok**: Tạo nội dung mới cho kênh. |
| Ngày 26-28: | **Tìm việc lập trình**: Tiếp tục tìm hiểu vị trí việc làm, chuẩn bị cho phỏng vấn. |
| **Tuần 4** |   |
| Ngày 29-30: | **Tổng kết và điều chỉnh**: Xem lại kế hoạch, đánh giá tiến độ, và điều chỉnh nếu cần thiết. |

### **Learn Fast:** Tập trung học hỏi, cải thiện liên tục:

*   Luôn cập nhật kiến thức mới về lập trình, tiếng Anh và TikTok.
*   Tham gia các khóa học, hội thảo để nâng cao kỹ năng.
*   Tìm kiếm mentor hoặc cộng đồng để học hỏi kinh nghiệm.
*   Phân tích kết quả và điều chỉnh kế hoạch để đạt hiệu quả tối ưu.

### Triển khai từng đầu mục 

Để hoàn thành kế hoạch "Think Big, Start Small, Learn Fast" trong vòng 1 tháng, bạn cần tập trung vào những mục tiêu ngắn hạn và hành động cụ thể. Dưới đây là một số điều chỉnh cho từng mục tiêu:

#### **Tìm kiếm việc làm:**

*   **Mục tiêu ngắn hạn:** Tìm kiếm và ứng tuyển ít nhất 10 vị trí lập trình phù hợp mỗi tuần.
*   **Hành động:**
    *   Cập nhật hồ sơ LinkedIn và các trang web tuyển dụng.
    *   Tham gia các hội nhóm lập trình trên mạng xã hội.
    *   Gửi email ứng tuyển trực tiếp đến các công ty quan tâm.
    *   Tham gia các buổi phỏng vấn xin việc.
    *   Tận dụng các mối quan hệ cá nhân để giới thiệu bản thân với các nhà tuyển dụng tiềm năng.
*   **Lưu ý:**
    *   Tập trung vào các vị trí phù hợp với kỹ năng và kinh nghiệm của bạn.
    *   Chuẩn bị kỹ lưỡng cho các buổi phỏng vấn xin việc.
    *   Thể hiện sự nhiệt tình và mong muốn học hỏi trong các buổi phỏng vấn.

##### **Tìm hiểu thị trường việc làm:**

##### **1\. Thu thập thông tin:**

*   **Website tìm việc:** Tham khảo các website uy tín như VietnamWorks, TopCV, JobStreet, Indeed, LinkedIn,... để cập nhật thông tin về các vị trí tuyển dụng, mức lương, kỹ năng cần thiết,...
*   **Báo cáo thị trường:** Đọc các báo cáo thị trường việc làm của các tổ chức uy tín như Nielsen, Vietnam Report, TopCV,... để nắm bắt xu hướng chung của thị trường, ngành nghề hot, kỹ năng cần thiết,...
*   **Mạng xã hội:** Tham gia các nhóm, hội nhóm nghề nghiệp trên Facebook, LinkedIn để trao đổi thông tin, học hỏi kinh nghiệm và cập nhật thông tin tuyển dụng.
*   **Sự kiện:** Tham gia các hội thảo, tọa đàm về thị trường việc làm để gặp gỡ chuyên gia, nhà tuyển dụng và cập nhật thông tin mới nhất.

##### **2\. Phân tích thông tin:**

*   **Phân tích nhu cầu tuyển dụng:** Xác định các ngành nghề, vị trí công việc có nhu cầu tuyển dụng cao, kỹ năng cần thiết cho từng vị trí.
*   **Phân tích mức lương:** So sánh mức lương của các vị trí công việc khác nhau, mức lương trung bình của ngành nghề, khu vực,...
*   **Phân tích xu hướng:** Xác định xu hướng phát triển của thị trường việc làm, ngành nghề hot, kỹ năng cần thiết trong tương lai,...

#### **Xếp hạng các công ty:**

##### **Tiêu chí xếp hạng:**

*   **Mức lương và phúc lợi:** Mức lương cơ bản, thưởng, phụ cấp, bảo hiểm, các chế độ đãi ngộ khác,...
*   **Cơ hội phát triển:** Cơ hội thăng tiến, học hỏi, phát triển kỹ năng, tham gia các dự án,...
*   **Môi trường làm việc:** Văn hóa công ty, môi trường làm việc năng động, sáng tạo, cởi mở, tôn trọng nhân viên,...
*   **Thương hiệu và uy tín:** Uy tín của công ty trên thị trường, thương hiệu được công nhận, đánh giá cao bởi khách hàng và đối tác,...
*   **Sự ổn định:** Tình hình tài chính của công ty, khả năng phát triển bền vững, ít biến động,...

##### **Ví dụ cụ thể:**

*   **Top 10 công ty công nghệ được đánh giá tốt nhất tại Việt Nam:** FPT Software, VNG, Viettel, CMC, TMA Solutions, MISA, VNPT Technology, VinCSS, PVS, Base.vn.
*   **Top 10 công ty tài chính được đánh giá tốt nhất tại Việt Nam:** Vietcombank, BIDV, Techcombank, VPBank, ACB, MB, Sacombank, VietinBank, HDBank, OCB.
*   **Top 10 công ty FMCG được đánh giá tốt nhất tại Việt Nam:** Unilever, P&G, Nestle, Vinamilk, Coca-Cola, PepsiCo, Masan, Acecook Vietnam, TH True Milk, Mondelez Kinh Do.

#### **Học tiếng Anh:**

*   **Mục tiêu ngắn hạn:** Nâng cao vốn từ vựng và ngữ pháp tiếng Anh cơ bản.
*   **Hành động:**
    *   Học tiếng Anh ít nhất 2 tiếng mỗi ngày.
    *   Sử dụng các ứng dụng học tiếng Anh như Duolingo, Memrise, Hello English,...
    *   Xem phim và nghe nhạc tiếng Anh có phụ đề tiếng Việt.
    *   Tham gia các câu lạc bộ tiếng Anh hoặc khóa học tiếng Anh online.
    *   Luyện tập giao tiếp tiếng Anh với người bản ngữ online hoặc trực tiếp.
*   **Lưu ý:**
    *   Tập trung vào những chủ đề tiếng Anh liên quan đến công việc và mục tiêu của bạn.
    *   Sử dụng nhiều phương pháp học tập khác nhau để tránh nhàm chán.
    *   Luyện tập giao tiếp tiếng Anh thường xuyên để cải thiện khả năng nghe, nói và phản xạ.

#### **Kênh TikTok:**

*   **Mục tiêu ngắn hạn:** Thu hút 1000 người theo dõi cho kênh TikTok của bạn.
*   **Hành động:**
    *   Quay và đăng tải ít nhất 5 video TikTok chất lượng mỗi tuần.
    *   Phân tích hiệu quả của các video TikTok đã đăng tải và điều chỉnh nội dung cho phù hợp với người xem.
    *   Tương tác với người xem bằng cách trả lời bình luận và tin nhắn.
    *   Tham gia các trào lưu TikTok.
    *   Hợp tác với các TikToker khác để tăng lượng người theo dõi.
    *   Chạy quảng cáo cho kênh TikTok của bạn (nếu có ngân sách).
*   **Lưu ý:**
    *   Tạo nội dung độc đáo và thu hút người xem.
    *   Đăng tải video TikTok thường xuyên và đúng giờ.
    *   Tương tác với người xem một cách tích cực và chân thành.
    *   Sử dụng các hashtag phù hợp để tăng khả năng hiển thị của video TikTok.

#### **Lưu ý chung:**

*   Chia nhỏ mục tiêu lớn thành những mục tiêu nhỏ hơn và dễ quản lý hơn.
*   Lập kế hoạch cụ thể cho từng ngày và theo dõi tiến độ của bạn.
*   Sử dụng các công cụ và ứng dụng để hỗ trợ bạn học tập và làm việc.
*   Tìm kiếm sự giúp đỡ từ bạn bè, gia đình hoặc mentor nếu bạn cần.
*   Giữ cho bản thân luôn có động lực và lạc quan.

Hoàn thành kế hoạch "Think Big, Start Small, Learn Fast" trong 1 tháng là một thử thách, nhưng hoàn toàn có thể đạt được nếu bạn nỗ lực và kiên trì. Hãy nhớ rằng, điều quan trọng nhất là bạn phải hành động và học hỏi không ngừng.

Chúc bạn thành công!
