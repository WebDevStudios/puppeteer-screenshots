/**
 * List of web pages to screenshot.
 */
module.exports = {
  options: {
    fullPage: true,
    waitUntil: 'networkidle2'
  },
  devices: {
    desktop: {
      viewportWidth: 1920,
      viewportHeight: 1080,
      deviceScaleFactor: 1
    },
    tablet: {
      device: 'iPad Pro'
    },
    mobile: {
      device: 'iPhone X'
    }
  },
  pages: [
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
}
