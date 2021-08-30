
var express               = require("express"),
    mongoose              = require("mongoose"),

    bodyParser            = require("body-parser"),


	methodOverride  = require("method-override")

var nodemailer = require('nodemailer');
var flash = require("connect-flash");

var multer  = require('multer');
var cloudinary = require('cloudinary').v2; //media upload
var Interninfo_final = require("../models/Interinfo");



const router = express.Router();




// const Interninfo_final = mongoose.model('Interinfo_final', Interninfo);



router.get("/blogs", function(req, res){
	
		
    res.render("portal_intern/blogs");
});

router.get("/social", function(req, res){
	
		
	Interninfo_final.find({}, function (err, one_detail) {
          if (err){
            console.log("something went wrong!!!")
          }else{
      console.log(one_detail)
			   res.render("portal_intern/social", {intern:one_detail});
          
          }
});
   
	
		
    
});



 
	
	
	
	
	
	
		
    











module.exports =router;