const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const mongoConnection = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://mailforapi123:uy3w7AUiuO4sms2c@cluster0.e59mvey.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnection;
