---

title: "GitHub Cheatsheet (2025)"
layout: default
date: 2025-11-22
categories: cheatsheet github
-----------------------------

# GitHub Cheatsheet (2025)

Easy commands and tips for kids aged 11 to 15 ⚡

---

## Quick terms (one line each)

* **Repo** = project folder on GitHub.
* **Commit** = save your work.
* **Branch** = safe copy to try things.
* **Fork** = your copy of someone else’s repo.
* **Pull request** = ask to add your changes to another repo.
* **Issue** = a task, bug, or idea.

---

## Basic Git commands (use in Terminal / Command Prompt)

**Start a new repo locally**

```bash
git init
```

**Clone a repo from GitHub**

```bash
git clone https://github.com/username/repo.git
```

**Check status of files**

```bash
git status
```

**Save changes (3 steps)**

```bash
git add .
git commit -m "Short clear message"
git push
```

**Pull latest changes from GitHub**

```bash
git pull
```

---

## Branching (safe experiments)

**Create and switch to a new branch**

```bash
git checkout -b new-feature
```

**Switch back to main**

```bash
git checkout main
```

**Merge a branch into main**

```bash
git checkout main
git merge new-feature
```

**Delete a branch (after merge)**

```bash
git branch -d new-feature
```

---

## Helpful history and fixes

**See commit history**

```bash
git log --oneline
```

**See what changed in files**

```bash
git diff
```

**Undo last commit but keep changes staged**

```bash
git reset --soft HEAD~1
```

**Discard all local changes (use carefully)**

```bash
git reset --hard
git checkout -- .
```

**Save your work quickly and switch branch**

```bash
git stash
git stash pop
```

---

## Working with remotes (GitHub)

**Add a remote (link local repo to GitHub)**

```bash
git remote add origin https://github.com/username/repo.git
```

**Push main branch (first push)**

```bash
git push -u origin main
```

---

## Tags and releases

**Create a tag**

```bash
git tag v1.0
git push origin v1.0
```

---

## GitHub features you should know (short)

* **Issues**: report bugs or add ideas.
* **Pull requests**: review and merge code from others.
* **Actions**: automatic tasks like tests and deploys.
* **Pages**: free websites from your repo.
* **Projects**: Kanban boards to plan work.
* **Discussions**: chat and Q&A inside a repo.
* **Codespaces**: online coding environment.
* **Copilot**: AI helper that suggests code.

---

## Short tips (real useful)

* Write short commit messages that explain the change.
* Use branches for every new feature.
* Read README first when you find a new project.
* Star repos you like to save them.
* Use issues to ask for help.
* Keep secrets out of repos (no passwords or API keys).

---

## Commands to copy for test projects

Try this simple flow in a new folder:

```bash
mkdir my-test
cd my-test
git init
echo "# My Test" > README.md
git add README.md
git commit -m "Add README"
# create remote on GitHub, then:
git remote add origin https://github.com/yourname/my-test.git
git push -u origin main
```

---

## Final quick checklist

* [ ] Create repo on GitHub
* [ ] Clone locally or use web editor
* [ ] Make a branch for new work
* [ ] Commit often with clear messages
* [ ] Open a pull request to merge changes
* [ ] Use GitHub Pages to show projects
