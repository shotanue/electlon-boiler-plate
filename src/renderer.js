// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let fs = require('fs')
const Store = require('electron-store');
const store = new Store();
const app = require('electron').remote.app;
