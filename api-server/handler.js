/*
 * @Author: Winfred
 * @Date:   2018-07-07 19:36:38
 * @Last Modified by:   Winfred
 * @Last Modified time: 2018-07-08 21:21:10
 */

// 'use strict';
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// 查询所有
exports.query = (req, res) => {
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		const db = client.db(dbName);
		// Get the documents collection
		const collection = db.collection('documents');
		collection.find({}).toArray(function(err, docs) {
			assert.equal(err, null);
			res.status(200).set({"Access-Control-Allow-Origin":"*"}).json(docs)
			client.close();
		});
	});
}
	//查询一个
exports.queryOne = (req, res) => {
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		const db = client.db(dbName);
		// Get the documents collection
		const collection = db.collection('documents');
		const id = new ObjectID(req.params.id)
		console.log(id)
		collection.find({
			'_id': id
		}).toArray(function(err, docs) {
			assert.equal(err, null);
			res.status(200).json(docs)
			client.close();
		});
	});
}
	//更新
exports.update = (req, res) => {
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		const db = client.db(dbName);
		const collection = db.collection('documents');
		const id = new ObjectID(req.params.id)
		console.log(id)
		collection.updateOne({
			'_id': id
		}, {
			$set: req.body
		}, function(err, result) {
			assert.equal(err, null);
			res.json("Updated Complete")
			console.log("Updated Complete");
		});
	});
}
	//创建
exports.creat = (req, res) => {
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		const db = client.db(dbName);
		const collection = db.collection('documents');
		collection.insertMany([req.body], function(err, result) {
			assert.equal(err, null);
			// assert.equal(3, result.result.n);
			// assert.equal(3, result.ops.length);
			console.log("Inserted 3 documents into the collection");
			res.json(result.ops[0])
			client.close();
		});

	});
}
	//删除
exports.delete = (req, res) => {
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		const db = client.db(dbName);
		const collection = db.collection('documents');
		const id = new ObjectID(req.params.id)
		console.log(id)
		collection.deleteOne({
			'_id': id
		}, function(err, result) {
			assert.equal(err, null);
			assert.equal(1, result.result.n);
			console.log("Removed Completed");
			res.json('ok')
			client.close();
		});
	});
}