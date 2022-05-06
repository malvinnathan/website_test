
// initialize the connection to mongodb
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//MongoDB URL for mongdb connection 
const MONGO_URL = "mongodb+srv://lievaron:wmXYDDnh38dwP0Yg@cluster0.8okme.mongodb.net/database?retryWrites=true&w=majority";


mongoose.connect(MONGO_URL || `mongodb://localhost/server`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: "database"
})

var db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});
db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" +
        db.port);
});



require('./irt');
require('./drawbar');
require('./spring');
require('./steer');
