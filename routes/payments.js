
var express               = require("express"),
    mongoose              = require("mongoose"),

    bodyParser            = require("body-parser"),


	methodOverride  = require("method-override")

var nodemailer = require('nodemailer');
var flash = require("connect-flash");

var multer  = require('multer');
var cloudinary = require('cloudinary').v2; //media upload



const router = express.Router();


router.get("/payments" ,function(req,res){
	
	 res.render("portal_intern/payments");
});










module.exports =router;