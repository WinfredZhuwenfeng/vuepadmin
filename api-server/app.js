/*
* @Author: Winfred
* @Date:   2018-07-07 19:36:46
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-09 15:03:51
*/

'use strict';
const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()

// 处理预检，CORS 默认支持 get
// 其他需要单独处理
app.use((req, res, next) => {
  // 如果请求方法是 options ，则我认为是浏览器的非简单预检请求
  if (req.method.toLowerCase() === 'options') {
    // 处理预检请求的响应
    // return 的目的是不让代码继续往后执行了
    return res
      .status(200)
      .set('Access-Control-Allow-Origin', '*')
      // .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .end()
  }

  // 非预检请求直接跳过该中间件的处理
  next()
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(router)
app.listen(3000,()=>{console.log('running...')})