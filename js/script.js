

$(document).ready(function(){
	//$("#submit-btn").click(changeBackground);

	//CREATE ARRAY
	var city = ["New York City", "San Francisco", "Los Angeles", "Austin", "Sydney"];

	//FOR VAR
	for (var i=0; i<city.length; i++){
						//USE THIS VALUE TO ESTABLISH ALL POSSIBLE VALUES
						//FROM THE ARRAY
	   $('<option/>').val(city[i]).html(city[i]).appendTo('#city-type');
	   console.log($('<option/>').val(city[i]));
	}

	//Now defining changeBackground
	$("#city-type").change(changeBackground); 

	function changeBackground(evt){
		evt.preventDefault();
		var city = $('#city-type').find(":selected").text();
		// console.log(city);

		//Create if / else if / else conditionals to control the flow of your application
		//multiple string values to execute if/else if statement code
		//Get the first element from an attribute name using $.attr()

		//"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		if (city == "NY"||city == "New York City"||city == "NYC"){
			$("body").attr("class","nyc");
		}

		//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		else if (city=="SF"||city=="San Francisco"||city=="Bay Area"){
			$("body").attr("class","sf");
		}
		//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		else if (city == "LA"	|| city == "Los Angeles"	||city == "LAX"){
			$("body").attr("class","la");
		}
		//"Austin" or "ATX" make the background of the page austin.jpg
		else if (city == "Austin" || city == "ATX"){
			$("body").attr("class","austin");
		}
		//"Sydney" or "SYD" make the background of the page sydney.jpg
		else if (city == "Sydney" || city == "SYD"){
			$("body").attr("class","sydney");
		}
	}

});
