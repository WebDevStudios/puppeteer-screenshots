'use strict'
process.setMaxListeners(100)
const puppeteer = require('puppeteer')
const config = require('./config.js')

/**
 * When this file is called, loop over and take screenshots.
 */
for (var i = 0; i < config.length; i++) {
  doDesktopScreenCapture(config[i]['url'], config[i]['name'])
  doTabletScreenCapture(config[i]['url'], config[i]['name'])
  doMobileScreenCapture(config[i]['url'], config[i]['name'])
}

/**
 * Take a screenshot at desktop viewport.
 *
 * @author WebDevStudios
 * @param {string} url       The URL of the webpage we want to capture.
 * @param {string} siteName  The name of the webpage we want to capture.
 */
async function doDesktopScreenCapture(url, siteName) {
  let browser = null
  try {
    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setDefaultTimeout()
    await page.goto(url, {timeout: 60000})
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1
    })
    await page.screenshot({
      path: `./screenshots/desktop/${siteName}.png`,
      fullPage: true,
      waitUntil: 'networkidle2'
    })
    await page.close()
  } catch (e) {
    console.error(e)
  } finally {
    await browser.close()
    console.log(`Finished desktop ${url}`)
  }
}

/**
 * Take a screenshot at tablet viewport.
 *
 * @author WebDevStudios
 * @param {string} url       The URL of the webpage we want to capture.
 * @param {string} siteName  The name of the webpage we want to capture.
 */
async function doTabletScreenCapture(url, siteName) {
  let browser = null
  try {
    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.emulate(puppeteer.devices['iPad Pro'])
    await page.goto(url, {timeout: 60000})
    await page.screenshot({
      path: `./screenshots/tablet/${siteName}.png`,
      fullPage: true,
      waitUntil: 'networkidle2'
    })
    await page.close()
  } catch (e) {
    console.error(e)
  } finally {
    await browser.close()
    console.log(`Finished tablet ${url}`)
  }
}

/**
 * Take a screenshot at mobile viewport.
 *
 * @author WebDevStudios
 * @param {string} url       The URL of the webpage we want to capture.
 * @param {string} siteName  The name of the webpage we want to capture.
 */
async function doMobileScreenCapture(url, siteName) {
  let browser = null
  try {
    browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.emulate(puppeteer.devices['iPhone X'])
    await page.goto(url, {timeout: 60000})
    await page.screenshot({
      path: `./screenshots/mobile/${siteName}.png`,
      fullPage: true,
      waitUntil: 'networkidle2'
    })
    await page.close()
  } catch (e) {
    console.error(e)
  } finally {
    await browser.close()
    console.log(`Finished mobile ${url}`)
  }
}
