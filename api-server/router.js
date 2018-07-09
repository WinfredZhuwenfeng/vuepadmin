/*
* @Author: Winfred
* @Date:   2018-07-07 19:36:28
* @Last Modified by:   Winfred
* @Last Modified time: 2018-07-09 22:28:58
*/

'use strict';

const express = require('express')
const handler = require('./handler')
const router = express.Router()

router.get('/',(req,res) => {
	res.send('hello world')
})

router
	.get('/heros',handler.query)
	.get('/heros/:id',handler.queryOne)
	.post('/heros',handler.creat)
	.patch('/heros/:id',handler.update)
	.delete('/heros/:id',handler.delete)

module.exports = router
