const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `mongodb+srv://kandy:TWzOXXvb108QoD4E@cluster0.dw17smr.mongodb.net/?retryWrites=true&w=majority${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}
