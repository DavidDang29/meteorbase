

 const gender = $(".js-gender").val();
 const birth = $(".js-birth").val();
 const lifestyle = $(".js-lifestyle").val();
 const ocd = $(".js-ocd").val();
 const music =$(".js-music").val();
 const subFree =$(".js-subFree").val();
 const sleepHab =$(".js-sleepHab").val();
 const sleepTime =$(".js-sleepTime").val();
 const personality =$(".js-personality").val();
 const pet =$(".js-pet").val();
 const petYes =$(".js-petYes").val();
 const animal =$(".js-animal").val();
 const color =$(".js-color").val();
 const hobby =$(".js-hobby").val();
 const movie =$(".js-movie	").val();
 const cook =$(".js-cook").val();
 const sex =$(".js-sex").val();


 //console.dir(item);
 //UserInfo.insert(item);

Template.myprofile.helpers({
	mydata:function(){
		console.log("getting mydata");
	   const val =  QuizResults.findOne({userId:Meteor.userId()});
	   console.dir(val); 
	   return [val];
	   // return QuizResults.find();
	}
})