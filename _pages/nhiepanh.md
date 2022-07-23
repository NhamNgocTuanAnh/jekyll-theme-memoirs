---
layout: page
# title:
permalink: /nhiepanh
comments: false
# image: assets/images/screenshot.jpg
imageshadow: true
---

  <p style="text-align:center; ">
    <picture>
      <source type="image/webp" srcset="../../assets/images/nhiepanh/dam-me-nhiep-anh.webp">
      <source type="image/jpeg" srcset="../../assets/images/nhiepanh/dam-me-nhiep-anh.jpg">
      <img src="../../assets/images/nhiepanh/dam-me-nhiep-anh.jpg" alt="Nhiếp ảnh cuộc sống">
    </picture><br>
  </p>

{% for page in site.pages %}
  {% if page.categories contains 'Nhiếp ảnh' %}
    <div class="item">
      <h3><a href="{{ page.url }}">
        {{ page.title }}
      </a></h3>

      <p>{{page.description}}</p>
    </div>
  {% endif %}
{% endif %}
