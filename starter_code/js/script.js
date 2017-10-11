

$(document).ready(function(){
// Call $.val() on inputs to get the string value of your user's input

$("#submit-btn").click(changeBackground);

function changeBackground(evt){
	evt.preventDefault();
	var f = $('#city-type').val();
	alert(f);

	if (f == "NYC"){
		$("body").attr("class","nyc");
	} 

	else if (f == "SF"){
		$("body").attr("class","sf");
	}

	else if (f == "LA"){
		$("body").attr("class","la");
	}

	else if (f == "Austin"){
		$("body").attr("class","austin");
	}

	else if (f == "Sydney"){
		$("body").attr("class","sydney");
	}

	else {
		$("body").attr("body");
	}
}


//Store user input in var city

//Use .submit() or $.click to figure out when the user clicks the "submit" button

//Create if / else if / else conditionals to control the flow of your application

//Write at least six different lines of pseudocode and 
//display them inline as JavaScript comments

//Prevent a page refresh using the evt.preventDefault() function

//Use the $.ready() handler to delay your code from executing 
//until all DOM assets have been loaded

//Get the first element from an attribute name using $.attr()

//Use the || operator in your conditionals to allow for 
//multiple string values to execute if/else if statement code
});



//If a user submits:

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg
// Take a look at what your final product should look like before and after: