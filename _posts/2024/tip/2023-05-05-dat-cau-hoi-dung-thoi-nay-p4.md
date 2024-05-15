---
layout: post
title: 'Đặt câu hỏi đúng thời 4 chấm 0. Gemini, chat gpt,... !! [Phần 4] Thấu hiểu "Prompt" - Chìa khóa mở ra sức mạnh AI!'
author: sal
categories: [ Coding 💻 ]
tags: [ tips,tool ]
image: assets/images/2023/lap-trinh/avts/javascript-come-back-avt.webp
lazyimages: "enabled"
isGithubComments: false
excerpt: Hãy tưởng tượng ChatGPT như một "đầu bếp AI" siêu đẳng, có thể giúp bạn hiện thực hóa mọi ý tưởng ẩm thực, dù là phức tạp nhất!
adsense: "enabled"
keywords:
  - Tasker
  - Chia sẻ profile tasker
  - Tối ưu Tasker
  - Tasker là gì?
  - Android Automation
  - Shortcuts android
date: 2024-04-19 10:01:10 +0700
permalink: coding/dat-cau-hoi-dung-thoi-hien-dai-4-0-p5
skip_toc: true
---

## Format of the Ask for Input Pattern

 Khi làm việc với các mô hình ngôn ngữ lớn (LLM), chúng ta thường cung cấp cho chúng một tập hợp các quy tắc hoặc hướng dẫn để định hướng đầu ra của chúng. Hãy nghĩ về những quy tắc này như việc lập trình LLM. Một thách thức phổ biến là làm cho LLM đợi đầu vào của chúng ta trước khi áp dụng các quy tắc này. Đây là lúc mẫu "yêu cầu đầu vào" trở nên hữu ích.

**Mẫu Yêu cầu Đầu vào:**

Mẫu này hướng dẫn LLM lắng nghe các quy tắc của bạn, sau đó tạm dừng và yêu cầu rõ ràng đầu vào của bạn trước khi tiếp tục. Nó giống như nói với LLM, "Đã hiểu! Bây giờ, bạn muốn tôi làm gì với những quy tắc này?"

**Tại sao sử dụng nó?**

*   **Kiểm soát:** Mẫu này cung cấp cho bạn nhiều quyền kiểm soát hơn đối với tương tác.
*   **Hiệu quả:** Nó ngăn LLM tạo ra các đầu ra không cần thiết.
*   **Trải nghiệm tương tác:** Nó cho phép các tương tác mượt mà hơn, tự nhiên hơn với LLM.

**Ví dụ: Mẫu Phương pháp Thay thế**

Hãy tưởng tượng bạn muốn LLM tạo ra các phương pháp thay thế cho một nhiệm vụ nhất định. Nếu không có mẫu "yêu cầu đầu vào", LLM có thể nhảy cóc và tự nghĩ ra một nhiệm vụ cho bạn:

Bạn: Bất cứ khi nào tôi yêu cầu một lời nhắc, hãy liệt kê các phương pháp thay thế và viết lời nhắc cho mỗi phương pháp. LLM: Chắc chắn rồi, đây là ba lựa chọn thay thế để sắp xếp một chiếc bàn lộn xộn...

Nhưng, bằng cách thêm "hãy hỏi tôi về nhiệm vụ đầu tiên" vào cuối lời nhắc của bạn, bạn sẽ lấy lại quyền kiểm soát:

Bạn: Bất cứ khi nào tôi yêu cầu một lời nhắc, hãy liệt kê các phương pháp thay thế và viết lời nhắc cho mỗi phương pháp. Hãy hỏi tôi về nhiệm vụ đầu tiên. LLM: Chắc chắn rồi, hãy bắt đầu. Nhiệm vụ đầu tiên là gì?

**Định dạng:**

Mẫu rất đơn giản:

\ Hãy hỏi tôi về \.

Thay thế \ bằng đầu vào cụ thể mà bạn muốn, chẳng hạn như "câu hỏi", "thành phần" hoặc "mục tiêu".

**Thêm ví dụ:**

*   "Từ bây giờ, tôi sẽ dán chuỗi email vào cuộc trò chuyện của chúng ta. Bạn sẽ tóm tắt các điểm của mỗi người trong chuỗi email... Hãy hỏi tôi về chuỗi email đầu tiên."
*   "Từ bây giờ, hãy dịch bất cứ điều gì tôi viết thành một loạt âm thanh và hành động của một con chó... Hãy hỏi tôi về điều đầu tiên cần dịch."

**Lưu ý quan trọng:**

Mặc dù mẫu này rất hiệu quả, nhưng nó có thể không hoạt động hoàn hảo mọi lúc do tính chất hơi ngẫu nhiên của LLM.

## Combining Patterns
 **Kết hợp các mẫu: Xây dựng lời nhắc phức tạp**

Chìa khóa để tạo ra các lời nhắc mạnh mẽ cho các mô hình ngôn ngữ lớn (LLM) nằm ở việc kết hợp nhiều mẫu. Thay vì tập trung vào một mẫu duy nhất để giải quyết vấn đề, chúng ta nên xác định những mẫu nào giải quyết các khía cạnh cụ thể của vấn đề và sau đó tích hợp chúng. Cách tiếp cận này cho phép chúng ta xây dựng các lời nhắc phức tạp để giải quyết các nhiệm vụ phức tạp.

**Ví dụ minh họa**

1.  **Kết hợp "Yêu cầu đầu vào" và "Cung cấp các lựa chọn thay thế":**
    *   **Mục tiêu:** Giúp người dùng quyết định điểm đến kỳ nghỉ.
    *   **Lời nhắc:** "Bạn muốn đi nghỉ ở đâu? Ba ưu tiên hàng đầu của bạn về khí hậu, hoạt động và ngân sách là gì? Dựa trên đầu vào của bạn, tôi sẽ cung cấp một vài lựa chọn thay thế có thể phù hợp."
2.  **Kết hợp "Nhân vật" và "Trò chơi":**
    *   **Mục tiêu:** Tạo một trò chơi phiêu lưu dựa trên văn bản hấp dẫn.
    *   **Lời nhắc:** "Bạn là một thuật sĩ thông thái hướng dẫn một nhà thám hiểm trẻ tuổi vượt qua một ngục tối nguy hiểm. Mô tả khung cảnh, đưa ra thử thách và cung cấp các lựa chọn ảnh hưởng đến kết quả của câu chuyện."

**Mẫu mở rộng dàn ý**

Do những hạn chế của LLM về kích thước đầu vào và đầu ra, chúng ta thường cần chia nhỏ các tác vụ lớn thành các phần nhỏ hơn. Mẫu mở rộng dàn ý là một kỹ thuật hữu ích cho việc này.

1.  **Tạo dàn ý:** Bắt đầu bằng cách tạo dàn bài gồm các gạch đầu dòng cho toàn bộ dự án.
2.  **Mở rộng các phần:** Chọn một gạch đầu dòng cụ thể và yêu cầu LLM mở rộng nó thành một dàn bài chi tiết hơn.
3.  **Quy trình lặp lại:** Lặp lại bước 2 cho đến khi bạn đạt được mức độ chi tiết mong muốn.

**Tại sao Outlines lại hữu ích**

*   **Tín hiệu theo ngữ cảnh:** Bạn có thể sao chép và dán các phần của dàn ý trở lại lời nhắc để cung cấp ngữ cảnh cho LLM.
*   **Cấu trúc và tổ chức:** Dàn ý giúp bạn dễ dàng xem các phần của dự án khớp với nhau như thế nào.

**Định dạng của mẫu mở rộng dàn ý**

1.  **Nhân vật:** "Hoạt động như một công cụ mở rộng dàn ý."
2.  **Hướng dẫn:** "Tạo một dàn ý gạch đầu dòng dựa trên đầu vào mà tôi cung cấp cho bạn và sau đó hỏi tôi xem bạn nên mở rộng gạch đầu dòng nào."
3.  **Định dạng đầu ra:** "Tạo một dàn ý mới cho gạch đầu dòng mà tôi chọn."
4.  **Lặp lại:** "Cuối cùng, hãy hỏi tôi xem nên mở rộng gạch đầu dòng nào tiếp theo."
5.  **Yêu cầu ban đầu:** "Hãy hỏi tôi về những gì cần phác thảo."

**Ví dụ:**

> Hoạt động như một công cụ mở rộng dàn ý. Tạo một dàn ý gạch đầu dòng dựa trên đầu vào mà tôi cung cấp cho bạn và sau đó hỏi tôi xem bạn nên mở rộng gạch đầu dòng nào. Mỗi gạch đầu dòng có thể có tối đa 3-5 gạch đầu dòng con. Các gạch đầu dòng nên được đánh số bằng mẫu [A-Z].[i-v].[* đến ****]. Tạo một dàn ý mới cho gạch đầu dòng mà tôi chọn. Cuối cùng, hãy hỏi tôi xem nên mở rộng gạch đầu dòng nào tiếp theo. Hãy hỏi tôi về những gì cần phác thảo.

## Menu Actions Pattern
 **Mô hình Menu Hành động**

Mô hình Menu Hành động là một công cụ mạnh mẽ trong kỹ thuật nhắc lệnh, đặc biệt hữu ích cho các cuộc trò chuyện hoặc nhiệm vụ dài. Nó giống như một menu tùy chỉnh trong các tương tác văn bản của bạn, cho phép bạn kích hoạt các hành động cụ thể mà không cần phải gõ lại các nhắc lệnh dài dòng nhiều lần.

**Cách hoạt động:**

1.  **Xác định Hành động:** Đầu tiên, bạn tạo một danh sách các hành động, mỗi hành động đại diện cho một tập hợp các hướng dẫn cho mô hình ngôn ngữ (LLM). Hãy nghĩ về nó như lập trình một ứng dụng nhỏ trong cuộc trò chuyện của bạn.
2.  **Cụm từ Kích hoạt:** Gán một cụm từ hoặc từ khóa duy nhất cho mỗi hành động. Đây là những gì bạn sẽ gõ để kích hoạt hành động.
3.  **Phản hồi LLM:** Khi bạn nhập cụm từ kích hoạt, LLM sẽ thực hiện các hướng dẫn tương ứng, tạo ra kết quả mong muốn.

**Ví dụ: Mở rộng Đề cương & Tạo Văn bản**

Hãy tưởng tượng bạn đang soạn thảo một bài báo. Menu của bạn có thể trông như thế này:

*   **expand \[số gạch đầu dòng\]:** Mở rộng điểm đề cương được chỉ định với nhiều chi tiết hơn.
*   **write \[số gạch đầu dòng\] \[số đoạn văn\]:** Viết văn bản cho điểm đề cương được chỉ định bằng cách sử dụng số đoạn văn đã cho.

Bạn có thể tương tác như sau:

*   Bạn: expand 3.5.2
    *   LLM: (Cung cấp các điểm phụ chi tiết dưới 3.5.2)
*   Bạn: write 3.5.2 2
    *   LLM: (Tạo hai đoạn văn bản cho điểm 3.5.2)

**Lợi ích:**

*   **Hiệu quả:** Tinh giản các tác vụ lặp đi lặp lại.
*   **Rõ ràng:** Giảm sự mơ hồ trong hướng dẫn.
*   **Chia sẻ Kiến thức:** Cho phép các nhóm cộng tác và xây dựng thư viện hành động chung.
*   **Tùy chỉnh:** Điều chỉnh các tương tác của bạn theo nhu cầu cụ thể.
*   **Giảm Lỗi:** Khi một hành động được xác định chính xác, bạn có thể tái sử dụng nó mà không gặp lỗi.

## Fact Check List Pattern
Chúng ta thường nghe trên các phương tiện truyền thông rằng các mô hình ngôn ngữ lớn của ngân hàng có thể mắc nhiều lỗi, đưa ra thông tin sai lệch và không bao giờ thừa nhận sai lầm của mình. Tuy nhiên, điều này bỏ qua mục đích thực sự của công cụ. Chúng không nhất thiết phải là công cụ để trả lời câu hỏi, mặc dù đôi khi chúng có thể làm điều đó rất chính xác. Đôi khi chúng tạo ra những thứ trông giống như câu trả lời nhưng thực tế không chính xác. Miễn là chúng ta hiểu rằng chúng thực sự để tạo văn bản và đôi khi văn bản chúng tạo ra có thể trả lời chính xác cho chúng ta và đôi khi sẽ mắc lỗi. Miễn là chúng ta nhận ra rằng chúng ta có thể sử dụng các công cụ này một cách hiệu quả.

Bây giờ, một điều chúng ta có thể làm là sử dụng các gợi ý để hỗ trợ chúng ta xác định sự thật mà công cụ đưa vào kết quả đầu ra của nó và sự thật nào thực sự quan trọng, sau đó chúng ta có thể tiếp tục và kiểm tra lại chúng.

Một trong những điều xảy ra khi làm việc với đầu ra từ các công cụ này là do đầu ra trông rất thực tế, rất giống con người, rất thuyết phục nên chúng ta cho rằng nó là sự thật và khi nó tạo ra một lượng lớn văn bản, có thể khó phát hiện ra tất cả các giả định và sự thật khác nhau đã được đưa vào văn bản mà chúng ta thực sự cần theo dõi và kiểm tra lại. Bất cứ điều gì bạn nhận được từ một trong những mô hình này, bạn cần phải chịu trách nhiệm và đảm bảo rằng bạn đã kiểm tra kỹ lưỡng và thực sự tin tưởng nó.

**Chúng ta làm gì để hỗ trợ nỗ lực đảm bảo đầu ra chính xác và thực tế?**

Chúng ta có thể sử dụng mô hình danh sách kiểm tra sự thật để giúp chúng ta tìm ra những sự thật thực sự có trong kết quả đầu ra và cần được theo dõi.

**Ví dụ:**

Tôi đã lấy công cụ mở rộng dàn ý của chúng tôi. Giả sử chúng ta có thể mở rộng dàn ý và tạo văn bản cho bất kỳ gạch đầu dòng nào trong dàn ý, và chúng ta có thể tạo văn bản cho một số mục và chúng ta có một toàn bộ hệ thống menu để có thể làm điều này.

Bây giờ, một trong những điều chúng tôi muốn có thể làm là khi chúng tôi tạo văn bản cho một phần của dàn ý, tôi muốn biết những gì tôi cần theo dõi và kiểm tra thực tế tại thời điểm đó để đảm bảo rằng tôi không trình bày thông tin không chính xác.

Nếu chúng ta nhìn vào điều này, cách chúng ta có thể làm điều này là với mô hình danh sách kiểm tra gói thực tế. Chúng ta nói rằng, bất cứ khi nào bạn xuất ra văn bản, hãy tạo một tập hợp các sự thật có trong kết quả đầu ra. Tập hợp các sự thật nên được chèn vào cuối kết quả đầu ra (bạn có thể đặt chúng ở bất cứ đâu bạn muốn). Tập hợp các sự thật phải là những sự thật cơ bản có thể làm suy yếu tính xác thực của kết quả đầu ra nếu bất kỳ sự thật nào trong số đó không chính xác. Tôi đang thiết lập một bộ hướng dẫn mới cho mô hình ngôn ngữ lớn nói rằng, bất cứ khi nào bạn tạo văn bản, hãy cung cấp cho tôi tập hợp các sự thật tương ứng mà văn bản phụ thuộc vào. Đó là cách tôi có thể tiếp tục và theo dõi chúng và kiểm tra chúng.

Bây giờ tôi sẽ sử dụng chương trình mở rộng dàn ý của chúng tôi mà chúng tôi đã viết và yêu cầu chương trình viết một đoạn văn cho Mục 3.5.2.2. Phần này là những cân nhắc để lựa chọn phong cách phù hợp và nó tạo ra toàn bộ đoạn văn bản cho tôi. Sau đó, nó tạo ra một tập hợp các sự thật cơ bản ở đây là những sự thật có trong đoạn văn. Ví dụ: phong cách viết có thể bao gồm từ kỹ thuật đến sáng tạo đến hướng dẫn. Có những thứ khác như nội dung hướng dẫn có thể áp dụng phong cách rõ ràng và từng bước.

Bây giờ đoạn văn này mà tôi đã chọn để nó viết, nó có rất nhiều sự thật khác nhau, có thể chúng đúng, có thể không, nhưng đó không phải là điều tôi phải lo lắng nhiều về việc đi vào trích xuất và chỉ nhìn chằm chằm vào văn bản vì bây giờ tôi có một danh sách những thứ cần theo dõi. Ít nhất, tôi cần xem danh sách này và theo dõi các mục này hoặc thực sự tự mình kiểm tra trực quan chúng theo kiến thức của riêng tôi, đó là mức tối thiểu. Bây giờ tôi có một thanh tối thiểu, ít nhất những điều này tôi cần phải tiếp tục và theo dõi và nó đang gắn cờ cho tôi, đây là một số điều bạn cần phải đi và kiểm tra.

Điều khác tôi có thể làm là tôi có thể so sánh danh sách này với đoạn văn ở trên. Bất kỳ người nào có thể đang sử dụng một trong những công cụ này đều có thể so sánh. Đây là danh sách các sự thật bên dưới. Đây là văn bản thực tế ở trên có đầy đủ danh sách các sự thật không, có những câu trong văn bản ở trên bị thiếu bên dưới không và nếu có, đó có thể là những điều mà tôi cũng muốn tiếp tục và theo dõi. Bằng cách kiểm tra và so sánh hai danh sách, chúng ta có thể thấy nó có thực sự trích xuất đầy đủ tất cả các sự thật quan trọng hay không và điều đó sẽ gợi ý cho chúng ta và khiến chúng ta suy nghĩ về điều này thực sự nói lên điều gì và những sự thật cơ bản đối với nó là gì. Chỉ cần hành động so sánh các sự thật với văn bản mà nó tạo ra sẽ giúp chúng ta có suy nghĩ về tính chính xác của những gì được tạo ra.

Điều tiếp theo tôi có thể làm là tôi có một thanh tối thiểu, ít nhất tôi cần phải đi và kiểm tra ở mức tối thiểu, tôi cần phải đi và kiểm tra danh sách các sự thật mà nó tạo ra và theo dõi và đảm bảo rằng chúng là chính xác. Nếu bất kỳ điều nào trong số đó là không chính xác, thì có lẽ có một lỗi trong văn bản ở trên. Sau đó, nếu tôi nhận thấy rằng có điều gì đó trong văn bản ở trên thông qua so sánh này cũng không có trong các sự thật, tôi có thể thêm điều đó vào danh sách của mình và kiểm tra nó. Đây là một công cụ có thể giúp chúng ta có thói quen kiểm tra thực tế đầu ra. Nó có thể đúng, nhưng chúng ta vẫn không biết chắc chắn cho đến khi chúng ta thực sự theo dõi đầy đủ nó. Điều này cung cấp cho chúng ta một số công cụ để giúp chúng ta biết rằng có những điều cần theo dõi, ít nhất là theo dõi những điều này, và sau đó là hai, để giúp chúng ta cung cấp cho chúng ta một công cụ mà chúng ta có thể đi và so sánh với những gì nó tạo ra để xem có phải là danh sách tối thiểu những điều tôi đã theo dõi và đủ tốt không. Hoặc chúng là tất cả những thứ khác có trong văn bản đó mà có lẽ tôi nên suy nghĩ kỹ hoặc theo dõi.

Bây giờ, nó không đảm bảo rằng chúng ta sẽ đưa ra câu trả lời đúng. Chúng ta có thể nghĩ rằng nó vẫn chính xác khi không phải vậy, ngay cả khi chúng ta theo dõi những sự thật đó, có thể có một số giả định ẩn nhưng nó tốt hơn nhiều so với việc chúng ta chỉ đọc một loạt văn bản mà không có hỗ trợ hoặc kích thích để suy nghĩ thông qua quá trình kiểm tra thực tế. Mô hình danh sách kiểm tra thực tế là thứ giúp chúng ta có thói quen kiểm tra kết quả đầu ra, kiểm tra tính xác thực của nó và có một định dạng giúp chúng ta dễ dàng trích xuất và so sánh thông tin và các sự thật như vậy với những gì thực sự đúng bằng cách sử dụng các nguồn bên ngoài khác.

**Định dạng của Mô hình Danh sách Kiểm tra Thực tế**

Để sử dụng mô hình này, lời nhắc của bạn nên đưa ra các câu lệnh ngữ cảnh cơ bản sau:

Tạo một tập hợp các sự thật có trong kết quả đầu ra.

Tập hợp các sự thật nên được chèn vào VỊ TRÍ trong kết quả đầu ra.

Tập hợp các sự thật phải là những sự thật cơ bản có thể làm suy yếu tính xác thực của kết quả đầu ra nếu bất kỳ sự thật nào trong số đó không chính xác.

Bạn sẽ cần thay thế VỊ TRÍ bằng một nơi thích hợp để đặt các sự thật, chẳng hạn như "ở cuối kết quả đầu ra".

**Ví dụ:**

Bất cứ khi nào bạn xuất ra văn bản, hãy tạo một tập hợp các sự thật có trong kết quả đầu ra. Tập hợp các sự thật nên được chèn vào cuối kết quả đầu ra. Tập hợp các sự thật phải là những sự thật cơ bản có thể làm suy yếu tính xác thực của kết quả đầu ra nếu bất kỳ sự thật nào trong số đó không chính xác.
## Tail Generation Pattern
 Khi tham gia vào các cuộc trò chuyện dài với một mô hình ngôn ngữ lớn (LLM), đôi khi LLM sẽ quên mất "luật chơi". Nó có thể quên mục tiêu tổng thể hoặc nhiệm vụ cụ thể đang thực hiện. Để giảm thiểu điều này, chúng ta có thể sử dụng "mẫu tạo đuôi" để nhắc nhở định kỳ cho LLM về mục đích của nó.

**Cách thức hoạt động của Mẫu tạo đuôi:**

1.  **Phần đuôi:** Chúng ta tạo ra một cụm từ hoặc câu ngắn gọn (phần đuôi) để gắn vào cuối đầu ra của LLM.
2.  **Chức năng nhắc nhở:** Phần đuôi đóng vai trò như một lời nhắc nhẹ nhàng về các quy tắc, mục tiêu của nhiệm vụ hoặc định dạng mong muốn của đầu ra.
3.  **Củng cố liên tục:** Bằng cách liên tục tạo ra phần đuôi này, chúng ta củng cố ngữ cảnh và ngăn LLM đi chệch khỏi hướng dự định.

**Ví dụ:**

Giả sử chúng ta đang sử dụng LLM để động não các khẩu hiệu tiếp thị sáng tạo. Phần đuôi của chúng ta có thể là: "Vui lòng tạo thêm ba tùy chọn khẩu hiệu, tập trung vào \[tính năng chính của sản phẩm\]." Phần đuôi này không chỉ nhắc nhở LLM về nhiệm vụ (tạo khẩu hiệu) mà còn nhấn mạnh một khía cạnh cụ thể mà chúng ta muốn làm nổi bật.

**Kết hợp với các mẫu khác:**

Mẫu tạo đuôi có thể được kết hợp hiệu quả với các kỹ thuật khác:

*   **Mẫu Phương pháp thay thế:** Sau khi LLM tạo ra các tùy chọn, phần đuôi sẽ nhắc nó đề xuất các phương pháp thay thế cho cùng một nhiệm vụ.
*   **Mẫu Yêu cầu đầu vào:** Phần đuôi nhắc LLM yêu cầu thêm đầu vào hoặc làm rõ từ người dùng.

**Ví dụ về lời nhắc (Tích hợp các mẫu):**

"Hãy đóng vai trò là trợ lý viết. Tinh chỉnh và xây dựng dựa trên văn bản tôi cung cấp. Sau mỗi lần tinh chỉnh, hãy đề xuất hai cách thay thế để cải thiện văn bản hơn nữa. Cuối cùng, hãy hỏi xem có lĩnh vực cụ thể nào mà tôi muốn bạn tập trung vào hay không."

**Lợi ích của việc tạo đuôi:**

*   **Duy trì ngữ cảnh:** Đảm bảo LLM vẫn tập trung vào nhiệm vụ trong suốt cuộc trò chuyện.
*   **Tăng cường tính nhất quán:** Giúp LLM tạo ra đầu ra phù hợp với các quy tắc và mục tiêu đã thiết lập.
*   **Tạo điều kiện cho các cuộc trò chuyện dài:** Cho phép các tương tác hiệu quả và mạch lạc hơn trong các cuộc đối thoại kéo dài.

**Cân nhắc chính:**

*   **Vị trí đuôi:** Thông thường, phần đuôi được đặt ở cuối đầu ra của LLM, nhưng có thể cần thử nghiệm để có vị trí tối ưu.
*   **Nội dung đuôi:** Phần đuôi phải ngắn gọn và liên quan trực tiếp đến các mục tiêu và quy tắc của nhiệm vụ.
## Semantic Filter Pattern

 **Mô hình ngôn ngữ lớn và Bộ lọc ngữ nghĩa**

Các mô hình ngôn ngữ lớn (LLM) thực sự xuất sắc trong việc xử lý văn bản và hiểu các mẫu ngôn ngữ. Trước đây, việc phân tích văn bản một cách hiệu quả đòi hỏi sự can thiệp của con người. Giờ đây, LLM đã tiếp quản nhiệm vụ này, thay đổi cách chúng ta xử lý và thao tác với văn bản.

Một mẫu mạnh mẽ mà LLM vượt trội là "bộ lọc ngữ nghĩa". Bộ lọc này hoạt động như một cái sàng đối với văn bản, loại bỏ hoặc giữ lại thông tin dựa trên ý nghĩa hoặc các phẩm chất cụ thể mà chúng ta xác định.

**Các trường hợp sử dụng bộ lọc ngữ nghĩa:**

*   **Bảo vệ quyền riêng tư:** Loại bỏ thông tin nhận dạng cá nhân (PII) như tên, địa chỉ hoặc số an sinh xã hội khỏi tài liệu.
*   **Làm sạch dữ liệu:** Lọc ra thông tin không liên quan hoặc dư thừa khỏi bộ dữ liệu.
*   **Kiểm duyệt nội dung:** Xác định và loại bỏ nội dung có hại hoặc không phù hợp khỏi các nền tảng trực tuyến.
*   **Giấu tên hồ sơ bệnh án:** Loại bỏ các chi tiết có thể nhận dạng bệnh nhân khỏi báo cáo y tế.
*   **Vệ sinh dữ liệu tài chính:** Loại bỏ thông tin tài chính nhạy cảm trước khi chia sẻ báo cáo.

**Ví dụ: Loại bỏ ngày tháng khỏi văn bản**

Hãy minh họa bằng một ví dụ đơn giản. Chúng tôi sẽ sử dụng một bộ lọc ngữ nghĩa để xóa ngày tháng khỏi mục nhập Wikipedia về Đại học Vanderbilt:

*   **Lời nhắc:** "Lọc thông tin này để loại bỏ tất cả ngày tháng và viết lại văn bản càng ít càng tốt để khắc phục các vấn đề do việc xóa ngày tháng gây ra."

LLM sẽ phân tích văn bản, hiểu ngày tháng là gì và xóa tất cả các trường hợp đồng thời viết lại văn bản ở mức tối thiểu để duy trì tính mạch lạc. Ví dụ: "thành lập năm 1873" có thể trở thành "thành lập vào thế kỷ 19."

**Ví dụ: Loại bỏ thông tin y tế nhạy cảm**

Hãy khám phá một ví dụ phức tạp hơn. Chúng tôi sẽ lọc một hồ sơ y tế giả để loại bỏ bất kỳ thông tin nào tiết lộ bệnh nhân bị tiểu đường:

*   **Lời nhắc:** "Lọc thông tin bên dưới để loại bỏ bất kỳ thông tin nào giúp ai đó biết được bệnh nhân bị tiểu đường. Đầu tiên, hãy giải thích thông tin bạn sẽ xóa và cách thông tin đó có thể giúp ai đó biết được bệnh nhân bị tiểu đường, sau đó cung cấp thông tin đã lọc."

LLM sẽ xác định và giải thích việc loại bỏ các chi tiết như khiếu nại chính về tăng cảm giác khát và mệt mỏi, đề cập đến lượng đường trong máu cao, chẩn đoán bệnh tiểu đường loại 2 và thuốc Metformin. Sau đó, nó viết lại hồ sơ để loại trừ thông tin nhạy cảm này.

**Mẫu bộ lọc ngữ nghĩa**

Mẫu rất đơn giản:

1.  Chỉ thị cho LLM "lọc thông tin này."
2.  Cung cấp các quy tắc ngữ nghĩa về những gì cần loại bỏ dựa trên ý nghĩa hoặc mục đích.

Sau đó, LLM sẽ phân tích văn bản, áp dụng các quy tắc và tạo ra kết quả đã lọc.

**Những lưu ý quan trọng:**

*   Bộ lọc ngữ nghĩa không phải là hoàn hảo và có thể yêu cầu kiểm tra bổ sung cho các ứng dụng quan trọng.
*   Hiệu quả của bộ lọc phụ thuộc vào độ rõ ràng và chính xác của các quy tắc ngữ nghĩa.
*   LLM tiếp tục phát triển, cải thiện khả năng hiểu và lọc văn bản hiệu quả.

## Course Conclusion & Thank You

 Xin cảm ơn tất cả các bạn đã tham gia [khóa học về kỹ thuật gợi ý (prompt engineering)](https://www.coursera.org/learn/prompt-engineering/home/info). Tôi hy vọng các bạn đã được truyền cảm hứng từ những ví dụ đa dạng mà chúng ta đã khám phá, từ việc tạo ra những câu chuyện hấp dẫn đến việc viết mã, thậm chí là sáng tác nhạc. Đây mới chỉ là khởi đầu của những gì có thể đạt được.

Hãy nhớ rằng, sức mạnh thực sự của các mô hình ngôn ngữ lớn nằm ở sự sáng tạo của con người. Chính những ý tưởng sáng tạo và cách sử dụng độc đáo của các bạn đối với các công cụ này mới mang lại những kết quả thú vị nhất.

**Ví dụ:**

*   Hãy tưởng tượng sử dụng mô hình ngôn ngữ để tạo ra các kế hoạch tập luyện cá nhân hóa dựa trên mục tiêu và dữ liệu sức khỏe của mỗi người.
*   Hoặc nghĩ về việc tạo ra một gia sư ảo có thể điều chỉnh phong cách giảng dạy phù hợp với sở thích học tập của từng học sinh.
*   Các bạn thậm chí có thể phát triển một hệ thống dịch các tài liệu pháp lý phức tạp sang ngôn ngữ đơn giản, giúp mọi người đều có thể tiếp cận được.

Đây chỉ là một vài ví dụ về cách bạn có thể tận dụng sức mạnh của các mô hình ngôn ngữ để giải quyết các vấn đề thực tế và tạo ra những tác động có ý nghĩa.

Tôi khuyến khích các bạn hãy tò mò, thử nghiệm và vượt qua những giới hạn của những gì có thể. Đừng nản lòng trước những ví dụ tiêu cực mà bạn có thể thấy trên mạng. Thay vào đó, hãy tập trung vào tiềm năng đáng kinh ngạc mà những công cụ này mang lại cho sự thay đổi tích cực.

Hãy nghĩ về ChatGPT như một phương tiện sáng tạo mới, giống như vẽ tranh hoặc điêu khắc. Nó là một công cụ có thể giúp bạn thể hiện ý tưởng, đưa trí tưởng tượng vào cuộc sống và khám phá những khả năng mới.

Để kết thúc, tôi muốn chia sẻ một số lời khuyên từ chính ChatGPT:

1.  **Thực hành:** Bạn càng thử nghiệm và sử dụng các mô hình ngôn ngữ, bạn sẽ càng trở nên giỏi hơn trong việc tạo ra các gợi ý hiệu quả.
2.  **Cập nhật kiến thức:** Kỹ thuật gợi ý là một lĩnh vực phát triển nhanh chóng. Hãy theo dõi những nghiên cứu và phát triển mới nhất để luôn đi trước thời đại.
3.  **Hợp tác:** Chia sẻ ý tưởng của bạn, học hỏi từ người khác và cùng nhau làm việc để vượt qua những giới hạn của những gì có thể.
4.  **Luôn nhớ đến đạo đức:** Sử dụng những công cụ mạnh mẽ này một cách có trách nhiệm và đạo đức để đảm bảo chúng mang lại lợi ích cho toàn xã hội.

Xin cảm ơn các bạn một lần nữa vì đã tham gia. Tôi rất mong chờ những gì các bạn sẽ tạo ra!
