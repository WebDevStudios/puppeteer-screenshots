# Puppeteer Screenshots <!-- omit in toc -->

Take automated screenshots of webpages at multiple viewports.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. Your Success is Our Mission."></a>

---

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Install](#install)
- [Usage](#usage)
- [:octocat: Contributing](#octocat-contributing)

---

## Introduction

At WebDevStudios, before we ship 🚀 websites we (usually) take before and after screenshots. These screenshots are used in our portfolio and for historical purposes. This simple app was created so we could knock this chore out quickly.

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
yarn
```

---

## Usage

Before getting started, you'll need create a list of webpages that you want Puppeteer to take screenshots of.

1. Open `src/config.js` in your code editor.
2. Edit the list, giving each item a name and url. You can add as many items as you want!

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
yarn start
```

Screenshots will appear in the `/screenshots` directory:

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
```

---

## :octocat: Contributing

WebDevStudios welcomes contributions via [Discussions](https://github.com/WebDevStudios/puppeteer-screenshots/discussions), [Issues](https://github.com/WebDevStudios/puppeteer-screenshots/issues), or [Pull Requests](https://github.com/WebDevStudios/puppeteer-screenshots/pulls). Stay safe 🍻
