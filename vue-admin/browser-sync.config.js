/*
* @Author: Winfred
* @Date:   2018-07-09 15:52:06
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-09 23:35:40
*/

'use strict';
var browserSync = require('browser-sync').create()
var proxy = require('http-proxy-middleware') // require('http-proxy-middleware');

/**
 * Configure proxy middleware
 */
var jsonPlaceholderProxy = proxy('/api', {
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