---
title: "Blog"
layout: default
---
# Blog

Welcome to the Blog. Below are the latest posts.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small style="color:#666; margin-left:8px;">— {{ post.date | date: "%b %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
