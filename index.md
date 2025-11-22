---
title: "Yogendra's GitHub Blog"
layout: default
---

# Welcome
Welcome to this learning space. This website shares easy guides, fun projects, and helpful tips for beginners who want to explore GitHub, coding, and creativity online.

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
