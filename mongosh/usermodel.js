const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = new mongoose.Schema({
      name: String,
      usename:String,
      email:String
});

// model create

module.exports = mongoose.model("user", userSchema);
