var express =require('express');
var app =express();
var BodyParser= require("body-parser");
var Post =require('./posts')
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs');
app.listen("3100",function(){
  console.log("Server running");
})
app.get("/",function(req,res){
  res.render("index")
});

app.post("/create",function(req,res){
Post.create({Title:req.body.title,Description:req.body.desc},function(err,post){

})
  res.redirect("/posts");
})

app.get("/posts",function(req,res){
  Post.find({},function(err,posts){


    res.render("post",{post:posts})
  })
});


app.get("/posts/:id",function(req,res){
Post.find({_id:req.params.id},function(err,post)
{
  res.render("post_detail",{post:post[0]});
})

});

app.get("/delete/:id",function(req,res){
  Post.remove({_id:req.params.id},function(err,result)
{

  res.redirect("/posts")
})
});


app.get("/update/:id",function(req,res){
  Post.findOne({_id:req.params.id},function(err,post)
{
res.render("post_update",{post:post})

})

});

app.post("/update/:id",function(req,res){
  Post.findOneAndUpdate({_id:req.params.id},{'$set':{Title:req.body.title,Description:req.body.desc}},function(err,post)
{
  res.redirect("/posts")
})
});
