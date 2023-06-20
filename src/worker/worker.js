const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const setting = require('../config.js');

const chrome = require('selenium-webdriver/chrome');

let driver = new Builder().forBrowser(Browser.CHROME).build();
