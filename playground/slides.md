---
theme: ./
lineNumbers: true
---

# Foo

Lorem Ipsum

## Bar

Lorem Ipsum

### Baz

Lorem Ipsum

#### Qux

Lorem Ipsum

--- slide

# Hey

--- slide
title: Hey

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---

# Code

Use code snippets and get the highlighting directly!

## Hey

```ts {all|2-5|all}
interface User {
	id: number;
	firstName: string;
	lastName: string;
	role: string;
}

function updateUser(id: number, update: Partial<User>) {
	const user = getUser(id);
	const newUser = { ...user, ...update };
	saveUser(id, newUser);
}
```
