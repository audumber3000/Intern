var mongoose = require("mongoose");





var interninfo_finals = new mongoose.Schema({
	Name:String,
    Contact : String,
	Email : String,
	
	Internship : String,
	Qualification : String,
	CollegeName:String,
	CollegeCity:String,
	CollegeState:String,
	Year : String,
	ApplicationID : String,
	Accepted : String,
	Selected: String,
	Completed :String,
	Rejected : String,
	ApplyDate:String,
	Skills : String,
	Session : String,
	InternID : String,
	Task1 : String,
	Task1_ans : String,
	Task2 : String,
	Task3 : String,
	Task4 : String,
	Task1_link: String,
	Task4_link : String,
	
	Task1_date:String,
	Task2_date:String,
	Task3_date:String,
	Task4_date:String,
	profile_img:String,

	
   
 

});

module.exports = mongoose.model("interninfo_finals", interninfo_finals);