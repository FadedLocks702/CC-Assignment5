
//Prevent a page refresh using the evt.preventDefault() function
$(document).ready(function(){

//Use .submit() or $.click to figure out when the user clicks the "submit" button
$("#submit-btn").click(changeBackground);

function changeBackground(evt){
	//Use the $.ready() handler to delay your code from executing 
	//until all DOM assets have been loaded
	evt.preventDefault();
	// Call $.val() on inputs to get the string value of your user's input
	//Store user input in var city
	var city = $('#city-type').val();
	//Need this alert to tell me this would work
	alert(city);
	console.log("Submit them cities");

//Create if / else if / else conditionals to control the flow of your application
//Use the || operator in your conditionals to allow for 
//multiple string values to execute if/else if statement code
//Get the first element from an attribute name using $.attr()

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
	
	if (city == "NYC"	||	city == "New York City"||	city == "New York"){
		$("body").attr("class","nyc");
	} 
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
	else if (city == "SF"	||city == "San Francisco"	||city == "Bay Area"){
		$("body").attr("class","sf");
	}
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
	else if (city == "LA"	|| city == "Los Angeles"	||city == "LAX"){
		$("body").attr("class","la");
	}
// "Austin" or "ATX" make the background of the page austin.jpg
	else if (city == "Austin" || city == "ATX"){
		$("body").attr("class","austin");
	}
// "Sydney" or "SYD" make the background of the page sydney.jpg
	else if (city == "Sydney" || city == "SYD"){
		$("body").attr("class","sydney");
	}
// Back to the default state?
	else {
		$("body").attr("body");
	}



}

});
