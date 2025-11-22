---
title: "GitHub Cheatsheet (2025)"
layout: default
date: 2025-11-22
categories: cheatsheet github
---
![Cheatsheet Banner](/assets/cheatsheet-banner.png)

# GitHub Cheatsheet (2025)
Easy commands and tips for kids aged 11 to 15 ⚡

---

## Quick terms (one line each)
- **Repo** = project folder on GitHub.  
- **Commit** = save your work.  
- **Branch** = safe copy to try things.  
- **Fork** = your copy of someone else’s repo.  
- **Pull request** = ask to add your changes to another repo.  
- **Issue** = a task, bug, or idea.

---

## Basic Git commands (use in Terminal / Command Prompt)

**Start a new repo locally**
```bash
git init
Clone a repo from GitHub

git clone https://github.com/username/repo.git


Check status of files

git status


Save changes (3 steps)

git add .
git commit -m "Short clear message"
git push


Pull latest changes from GitHub

git pull

Branching (safe experiments)

Create and switch to a new branch

git checkout -b new-feature


Switch back to main

git checkout main


Merge a branch into main

git checkout main
git merge new-feature


Delete a branch (after merge)

git branch -d new-feature

Helpful history and fixes

See commit history

git log --oneline


See what changed in files

git diff


Undo last commit but keep changes staged

git reset --soft HEAD~1


Discard all local changes (use carefully)

git reset --hard
git checkout -- .


Save your work quickly and switch branch

git stash
git stash pop

Working with remotes (GitHub)

Add a remote (link local repo to GitHub)

git remote add origin https://github.com/username/repo.git


Push main branch (first push)

git push -u origin main

Tags and releases

Create a tag

git tag v1.0
git push origin v1.0

GitHub features you should know (short)

Issues — report bugs or add ideas.

Pull requests — review and merge code from others.

Actions — automatic tasks like tests and deploys.

Pages — free websites from your repo.

Projects — Kanban boards to plan work.

Discussions — chat and Q&A inside a repo.

Codespaces — online coding environment.

Copilot — AI helper that suggests code.

Short tips (real useful)

Write short commit messages that explain the change.

Use branches for every new feature.

Read README first when you find a new project.

Star repos you like to save them.

Use issues to ask for help.

Keep secrets out of repos (no passwords or API keys).

Commands to copy for test projects

Try this simple flow in a new folder:

mkdir my-test
cd my-test
git init
echo "# My Test" > README.md
git add README.md
git commit -m "Add README"
# create remote on GitHub, then:
git remote add origin https://github.com/yourname/my-test.git
git push -u origin main

Final quick checklist

 Create repo on GitHub

 Clone locally or use web editor

 Make a branch for new work

 Commit often with clear messages

 Open a pull request to merge changes

 Use GitHub Pages to show projects


> **Important**: The image path `/assets/cheatsheet-banner.png` is used above. If you want a banner:
> - Upload your screenshot or banner image to `assets/cheatsheet-banner.png` (Add file → Upload files).  
> - If you do not upload an image, remove the `![Cheatsheet Banner]...` line from the post.

---

# STEP B — Update `blog.md` to list posts automatically

1. Edit `blog.md` (Add file → Create new file if missing, or Click file then pencil to edit)  
2. Replace its content with the exact block below and commit as `Update blog page to list posts`:

**`blog.md` content (copy/paste)**
```yaml
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


