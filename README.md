# Puppeteer Screenshots <!-- omit in toc -->

A simple script for taking automated screenshots of webpages at multiple viewports.

[![WebDevStudios. Your Success is Our Mission.](https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png)](https://webdevstudios.com/contact/)

---

## Table of Contents <!-- omit in toc -->

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)

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
2. Add webpages along with a name and url:

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

Individual screenshots (and a `.zip`) will appear in the `/screenshots` directory.

```text
├── screenshots
│   ├── desktop
│   │   ├── blog.png
│   │   ├── contact.png
│   │   └── homepage.png
│   ├── mobile
│   │   ├── blog.png
│   │   ├── contact.png
│   │   └── homepage.png
│   └── tablet
│       ├── blog.png
│       ├── contact.png
│       └── homepage.png
├── screenshots.zip
```

---

## Contributing

WebDevStudios welcomes contributions via [Issues](https://github.com/WebDevStudios/puppeteer-screenshots/issues) and [Pull Requests](https://github.com/WebDevStudios/puppeteer-screenshots/pulls). Stay safe 🍻
