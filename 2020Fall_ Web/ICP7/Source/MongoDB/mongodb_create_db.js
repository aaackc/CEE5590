

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
    var dbase = db.db("mydb");
    if (err) throw err;
    console.log("Database created!");
    db.close();
});