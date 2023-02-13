const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `mongodb+srv://johnkennady220:jADZAvTf2KX4lr0J@cluster0.afdpskn.mongodb.net/?retryWrites=true&w=majority${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}
