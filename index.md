---
title: "Home"
layout: default
---

# Welcome
Intro text...

## Latest posts

<ul>
  {% for post in site.posts limit:3 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small style="color:#666; margin-left:8px;">— {{ post.date | date: "%b %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>

<p><a href="/blog">See all posts</a></p>

---
title: "Yogendra's GitHub Blog"
---
## Latest posts

<ul>
  {% for post in site.posts limit:3 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small style="color:#666; margin-left:8px;">— {{ post.date | date: "%b %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>

<p><a href="/blog">See all posts</a></p>

�
