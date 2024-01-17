---
layout: post
lazyimages: "enabled"
title:  "Viết một trợ lý ảo nói Tiếng Việt sử dụng ChatGPT hoặc Bard Google - Python"
author: sal
categories: [ Coding 💻 ]
tags: [ python, lập trình ]
image: assets/images/2023/lap-trinh/avts/tro-ly-ao-chatgpt.webp
# rating: 4.5
isGithubComments: true
permalink: lap-trinh/assistant-chatgpt-vietnamese
excerpt: Chat openai hiện đang là chủ đề hot trên thế giới. Mình khá lười bấm keyboard và đọc chữ, nên mình đã viết một đoạn code nhỏ lấy giọng nói của mình từ micro, và trả lời câu hỏi của mình sử dụng api của openai
description: Chat openai hiện đang là chủ đề hot trên thế giới. Mình khá lười bấm keyboard và đọc chữ, nên mình đã viết một đoạn code nhỏ lấy giọng nói của mình từ micro, và trả lời câu hỏi của mình sử dụng api của openai.
adsense: "enabled"
keywords:
  - chat openai
  - python cơ bản
  - python3
  - bot gpt
  - lập trình python
  - python
  - trí tuệ nhân tạo
  - trợ lí ảo
date: 2024-01-14 01:14:24 +0700
---

**Mục tiêu**

Chatbot dùng micro laptop sẽ nhận thông tin và trả lời câu hỏi của người dùng nói bằng tiếng Việt, sử dụng API chat gpt 3.5 của ChatGPT (account chat gpt free) hoặc Bard Google.

**Yêu cầu**

*   Chatbot phải có thể nhận diện giọng nói của người dùng.
*   Chatbot phải có thể hiểu và trả lời các câu hỏi của người dùng bằng tiếng Việt.
*   Chatbot phải sử dụng API của ChatGPT và Bard Google để trả lời các câu hỏi của người dùng.
*   **YC phụ:** chatbot hoạt động càng nhanh càng tốt

**Thiết kế**

Chatbot sẽ được thiết kế theo mô hình sau:

```bash
Micro laptop
|
|
+-- Nhận dạng giọng nói
|
|
+-- Xử lý ngôn ngữ tự nhiên
|
|
+-- API ChatGPT hoặc API Bard Google
|
|
+-- Trả lời người dùng

```

**Nhận dạng giọng nói**

Nhận dạng giọng nói sẽ được thực hiện bằng cách sử dụng thư viện SpeechRecognition: [https://pypi.org/project/SpeechRecognition/](https://pypi.org/project/SpeechRecognition/) của Python. Thư viện này cung cấp các chức năng để nhận dạng giọng nói của người dùng từ âm thanh đầu vào.

**Xử lý ngôn ngữ tự nhiên**

Xử lý ngôn ngữ tự nhiên sẽ được thực hiện bằng cách sử dụng thư viện NLTK: [https://www.nltk.org/](https://www.nltk.org/) của Python. Thư viện này cung cấp các chức năng để phân tích và hiểu ngôn ngữ tự nhiên.

**API ChatGPT**

API ChatGPT sẽ được sử dụng để trả lời các câu hỏi của người dùng mà có thể trả lời bằng cách tạo văn bản. Ví dụ, nếu người dùng hỏi "Thủ đô của Việt Nam là gì?", ChatGPT sẽ trả lời "Thủ đô của Việt Nam là Hà Nội".

**API Bard Google**

API Bard Google sẽ được sử dụng để trả lời các câu hỏi của người dùng mà không thể trả lời bằng cách tạo văn bản. Ví dụ, nếu người dùng hỏi "Số điện thoại của tổng đài điện lực là gì?", Bard Google sẽ trả lời "Số điện thoại của tổng đài điện lực là 1900 545454".

**Cài đặt**

Python là ngôn ngữ phổ biến, nhiều người hỗ trợ, dễ code dễ bảo trì. Python có rất nhiều tác dụng như dựng backend, crawler scrapy,...

Để cài đặt chatbot, cần cài đặt các thư viện sau:

```python
import openai
import os
from gtts import gTTS
import speech_recognition as sr
from playsound import playsound
from pydub import AudioSegment
from pydub.playback import play
import time
from time import strftime
import yaml

```
**Chức năng chuyển văn bản thành âm thanh**

```python
def speak(data):
    global is_speaking
    try:
        # Chuyển đổi văn bản thành giọng nói
        audio = gTTS(remove_word(remove_word(data, "Thomas"), "thomas"), lang='vi')
        audio.save(str(path_file_temp))
        playsound(path_file_temp)
    except Exception as e:
        print(e)
    finally:
        print("Chuyển đổi văn bản thành giọng nói")

    return True

```

**Chạy**

Để chạy chatbot, cần khởi động chương trình sau:

<script src="https://gist.github.com/NhamNgocTuanAnh/260ebc0e582d10224d8acc0ba5a0b01f.js"></script>

```console
python chatbot.py

```

bạn có thể chạy trên jupyter python còn lập trình python mình dùng pycharm là ide của python trên windows và python tải trên pythonorg.
**Ví dụ**

Dưới đây là một ví dụ về cách chatbot trả lời câu hỏi của người dùng:

```bash
Người dùng: Thủ đô của Việt Nam là gì?
Chatbot: Thủ đô của Việt Nam là Hà Nội.
```

**Tương lai**

Chatbot có thể được cải thiện bằng cách sử dụng các kỹ thuật sau:

*   Sử dụng các mô hình ngôn ngữ lớn hơn, chẳng hạn như Megatron-Turing NLG.
*   Sử dụng các mô hình học máy tiên tiến hơn, chẳng hạn như học máy tăng cường.
*   Sử dụng các dữ liệu huấn luyện lớn hơn và đa dạng hơn.




