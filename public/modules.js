const request = require('request');
const fetch = require('node-fetch');
const fs = require('fs')

global.window.request = request;
global.window.fetch = fetch;
global.window.fs = fs;

