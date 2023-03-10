const express = require("express");
const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const bodyParser = require("body-parser");




const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connect = () => {
  mongoose
    .connect(dbConfig.DB_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

require('./routes/auth')(app);
require('./routes/users')(app);
require('./routes/comments')(app);
require('./routes/videos')(app);


module.exports = app.listen(serverConfig.PORT, () => {
    connect();
    console.log("Application has started on the port ", serverConfig.PORT);
})