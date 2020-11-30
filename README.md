# Puppeteer Screenshots

Take automated screenshots of webpages at multiple viewports.

## 🔧 Install

Clone the repo:

```bash
git clone git@github.com:gregrickaby/puppeteer-screenshots.git
```

Install dependencies

```bash
yarn
```

## 💻 Usage

First, edit the list of pages you want to take screenshots of and save the file.

```js
// src/webPages.js
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

Next, run the script:

```bash
yarn start
```

Finally, screenshots will appear in the `src/screenshots` directory:

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

## :octocat: Contributing

Feedback contributions via Github Issues and Pull Requests are welcome. 🍻
