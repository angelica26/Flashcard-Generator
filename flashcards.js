var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");
var inquirer = require("inquirer");

var nj = new BasicCard("What is the capital of New Jersey?","Trenton")

var cheese = new ClozeCard("Gouda is a type of cheese", "cheese")

//choosing which flashcard...
inquirer.prompt([

  {
    type: "list",
    name: "cardType",
    message: "What type of flashcard would you like?",
    choices: ["Basic", "Cloze"]
  }

]).then(function(user) {

  // If basic card...
  if (user.cardType === "Basic") {
		
		inquirer.prompt([

		  {
		    type: "input",
		    name: "basic",
		    message: nj.front,
		  }
		]).then(function(user) {

  // what to do if question is correct or incorrect...
  if (user.basic === nj.back) {
  	console.log("correct!")
  }

  else {
  	console.log("wrong")
  }

  });  
 
 // if Cloze card....
   
  }
  else if (user.cardType === "Cloze") {
	  inquirer.prompt([

			  {
			    type: "input",
			    name: "cloze",
			    message: cheese.partial,
			  }
		]).then(function(user) {

	  // what to do if question is correct or incorrect...
		  if (user.cloze === cheese.cloze ) {
		  	console.log("correct!")
		  }

		  else {
		  	console.log("wrong")
		  }

	  });  	
  }
});