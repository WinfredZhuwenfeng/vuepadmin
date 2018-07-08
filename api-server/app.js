/*
* @Author: Winfred
* @Date:   2018-07-07 19:36:46
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-08 00:38:47
*/

'use strict';
const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(router)
app.listen(3000,()=>{console.log('running...')})