/*
* @Author: Winfred
* @Date:   2018-07-09 15:52:06
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-09 16:55:53
*/

'use strict';
var browserSync = require('browser-sync').create()
var proxy = require('http-proxy-middleware') // require('http-proxy-middleware');

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy('http://127.0.0.1:8080', {
  target: 'http://127.0.0.1:3000',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
  pathRewrite:{
  	'^/api':''
  }
})

/**
 * Add the proxy to browser-sync
 */
browserSync.init({
  server: {
    baseDir: './',
    
    middleware: [jsonPlaceholderProxy]
  },
  port: 8080,
  startPath: '/'
})

console.log('[DEMO] Server: listening on port 8080')
console.log('[DEMO] Opening: http://localhost:8080/users')