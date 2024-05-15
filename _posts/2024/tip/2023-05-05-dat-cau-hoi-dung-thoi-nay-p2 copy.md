---
layout: post
title: 'Understanding Prompts!'
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
date: 2024-05-17 10:01:10 +0700
permalink: coding/dat-cau-hoi-dung-thoi-hien-dai-4-0-p2
skip_toc: true
---

## **Understanding Prompts: The Key to Effective Interaction with Large Language Models**

What exactly is a prompt? In the context of large language models (LLMs), a prompt is far more than just a simple question. It's a versatile tool that can trigger various behaviors in these models, and its effectiveness depends heavily on its structure and wording.

**Dimensions of a Prompt:**

*   **Call to action:** A prompt is primarily a cue that instructs the LLM to generate a response. This response can take many forms, such as text, code, or structured data.
    *   **Example:** "Write a poem about autumn."
*   **Contextual information:** A prompt can provide background information to help the LLM understand the desired output.
    *   **Example:** "Summarize this article about climate change, focusing on its impact on agriculture."
*   **Persona guidance:** A prompt can instruct the LLM to adopt a specific persona or role.
    *   **Example:** "Act as a financial advisor and recommend investment strategies for a young professional."
*   **Temporal aspect:** Prompts can be immediate (affecting the current response) or persistent (influencing future interactions).
    *   **Example:** "From now on, always provide a detailed explanation for your answers."
*   **Information elicitation:** Prompts can be used to request information from the user, leading to a more interactive conversation.
    *   **Example:** "What are your dietary restrictions?"
*   **Memory aid:** Prompts can remind the LLM of previous interactions or information.
    *   **Example:** "Remember that I prefer a formal writing style."

**Prompt Engineering: Crafting Effective Prompts**

Understanding these dimensions is crucial for prompt engineering – the process of crafting effective prompts to achieve desired results from LLMs.

*   **Patterns and Specificity:** LLMs are trained on massive datasets and learn to predict the next word based on patterns. If your prompt contains strong patterns (e.g., "Mary had a little..."), the LLM is likely to follow that pattern. However, by being specific and providing detailed context, you can steer the LLM away from generic responses and towards more tailored outputs.
    *   **Example:** Instead of asking "Tell me about Paris," you could ask "Describe the architectural style of the Eiffel Tower."
*   **Structure and Format:** Providing clear structure and format in your prompt can help guide the LLM's output.
    *   **Example:** If you want a summary of an article, you can include bullet points or headings in your prompt to indicate the desired structure.
*   **Iteration and Experimentation:** It's important to be patient and experiment with different prompt formulations. The more you interact with the LLM, the better you'll understand its capabilities and limitations, allowing you to refine your prompts for optimal results.

**Conclusion:**

Prompt engineering is a powerful tool that allows you to unlock the full potential of LLMs. By understanding the various dimensions of prompts and applying effective techniques, you can create prompts that elicit accurate, relevant, and informative responses from these models. Remember, the more precise and contextually rich your prompt, the better the LLM will be able to understand and fulfill your request.

## Everyone Can Program with Prompts

 Lệnh (Prompt) không chỉ đơn thuần là câu hỏi hay mệnh lệnh cho ChatGPT, chúng còn là công cụ lập trình của bạn. Bạn không cần phải là lập trình viên để tận dụng điều này. Hãy nghĩ đến việc cung cấp cho ChatGPT một bộ hướng dẫn, giống như một trợ lý cá nhân. Hãy xem cách hoạt động của nó:

**Ví dụ: Tạo một Danh sách Giá Trị Phân Cách bằng Dấu Phẩy (CSV)**

1.  **Hướng dẫn ban đầu:**
    *   Chúng ta bắt đầu bằng cách nói với ChatGPT, "Mỗi khi bạn tạo kết quả đầu ra, hãy chuyển nó thành một danh sách giá trị phân tách bằng dấu phẩy." Điều này đặt ra quy tắc cơ bản để định dạng dữ liệu.
2.  **Đầu vào và Đầu ra:**
    *   Sau đó, chúng ta cung cấp cho ChatGPT thông tin đầu vào: "Tên tôi là Jules White và tôi đang dạy một khóa học về kỹ thuật nhắc lệnh (prompt engineering)."
    *   ChatGPT phản hồi bằng danh sách CSV: "Name, Course, Jules White, Prompt Engineering."
3.  **Tinh chỉnh chương trình:**
    *   Chúng tôi nhận thấy ChatGPT đã đưa ra các giả định về các cột. Vì vậy, chúng tôi cung cấp thêm hướng dẫn: "Từ bây giờ, các cột phải là NAME, COURSE, và ROLE."
    *   Chúng tôi lặp lại đầu vào và bây giờ ChatGPT sẽ xuất ra: "NAME, COURSE, ROLE, Jules White, Prompt Engineering, Teacher."
4.  **Thêm độ phức tạp:**
    *   Chúng tôi có thể hướng dẫn thêm cho ChatGPT: "Ngoài đầu vào của tôi, hãy tạo thêm các ví dụ phù hợp với định dạng CSV."
    *   Bây giờ, đầu ra trở nên phức tạp hơn, bao gồm các hàng bổ sung với các ví dụ liên quan.

**Những điểm chính:**

*   **Lập trình đối thoại:** Quá trình này mang tính tương tác. Chúng ta đưa ra hướng dẫn, xem kết quả và tinh chỉnh lại hướng dẫn của mình. Giống như đang trò chuyện với ChatGPT, hướng dẫn nó hướng tới kết quả mong muốn.
*   **Xây dựng một chương trình:** Mỗi hướng dẫn chúng ta thêm vào giống như một dòng mã trong một chương trình. Theo thời gian, chúng ta xây dựng một tập hợp các quy tắc mà ChatGPT tuân theo để xử lý đầu vào của chúng ta và tạo ra kết quả mong muốn.
*   **Vượt ra ngoài Hỏi & Đáp:** Lệnh (Prompt) có thể được sử dụng để tạo ra các cấu trúc phức tạp, tạo ra nhiều kết quả đầu ra và thậm chí mô phỏng các tình huống hoặc vai trò cụ thể (như một chuyên gia dinh dưỡng hoặc một nhân vật lịch sử).
