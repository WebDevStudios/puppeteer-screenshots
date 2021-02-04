# Puppeteer Screenshots <!-- omit in toc -->

Take automated screenshots of webpages at multiple viewports.

---

## Table of Contents <!-- omit in toc -->

- [🔧 Install](#-install)
- [💻 Usage](#-usage)
- [:octocat: Contributing](#octocat-contributing)

---

## 🔧 Install

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

## 💻 Usage

Before getting started, you'll need create a list of webpages that you want Puppeteer to take screenshots of.

1. Open `src/config.js`
2. Edit the list giving each object a name and url. (Add as many items as you want!)

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
