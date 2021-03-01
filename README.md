# Puppeteer Screenshots <!-- omit in toc -->

A simple script for taking automated screenshots of webpages at multiple viewports.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. Your Success is Our Mission."></a>

---

## Table of Contents <!-- omit in toc -->

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
- [Contributing :octocat:](#contributing-octocat)

---

## Prerequisites

- [Node](https://nodejs.org/en/)

---

## Install

Clone the repo:

```bash
git clone git@github.com:WebDevStudios/puppeteer-screenshots.git
```

Change directories:

```bash
cd puppeteer-screenshots
```

Install the dependencies:

```bash
npm i
```

---

## Usage

1. Open `src/config.js`
2. Add your webpages along with a name and url:

```js
// src/config.js
module.exports = [
  {
    name: 'homepage',
    url: 'https://webdevstudios.com/'
  },
  {
    name: 'blog',
    url: 'https://webdevstudios.com/blog/'
  },
  {
    name: 'contact',
    url: 'https://webdevstudios.com/contact/'
  }
]
```

3. Run the script:

```bash
npm start
```

Individual screenshots will appear in the `/screenshots` directory along with a `.zip`.

```text
/screenshots
├── /desktop
│   ├── blog.png
│   ├── contact.png
│   └── homepage.png
├── /mobile
│   ├── blog.png
│   ├── contact.png
│   └── homepage.png
├── /tablet
│   ├── blog.png
│   ├── contact.png
│   └── homepage.png
│ screenshots.zip
```

---

## Contributing :octocat:

WebDevStudios welcomes contributions via [Discussions](https://github.com/WebDevStudios/puppeteer-screenshots/discussions), [Issues](https://github.com/WebDevStudios/puppeteer-screenshots/issues), or [Pull Requests](https://github.com/WebDevStudios/puppeteer-screenshots/pulls). Stay safe 🍻
