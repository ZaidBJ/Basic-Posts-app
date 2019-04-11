var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Post");

var postSchema= new mongoose.Schema({
  Title:{ type:String},Description:{ type:String},timestamp: { type: Date, default: Date.now}

});



var Post=mongoose.model('user',postSchema);

module.exports = Post;
