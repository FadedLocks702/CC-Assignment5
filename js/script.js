

$(document).ready(function(){
	//$("#submit-btn").click(changeBackground);

	//CREATE ARRAY
	var city = ["NYC", "SF", "LA", "ATX", "SYD"];

	//FOR VAR
	for (var i=0; i<city.length; i++){
						//Discovered online that this is an all encompassing
						//value for all available arrays.
	   $('<option/>').val(city[i]).html(city[i]).appendTo('#city-type');
	   console.log($('<option/>').val(city[i]));
	}

	//Now defining changeBackground
	$("#city-type").change(changeBackground); 

	function changeBackground(evt){
		evt.preventDefault();
		var city = $('#city-type').find(":selected").text();
		// console.log(city);

		//Create if / else if / else conditionals to control the of your application
		//Use $.attr() function to update html classes

		//"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		if (city == "NYC"){
			$("body").attr("class","nyc");
		}

		//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		else if (city=="SF"){
			$("body").attr("class","sf");
		}

		//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		else if (city == "LA"){
			$("body").attr("class","la");
		}

		//"Austin" or "ATX" make the background of the page austin.jpg
		else if (city == "ATX"){
			$("body").attr("class","austin");
		}

		//"Sydney" or "SYD" make the background of the page sydney.jpg
		else if (city == "SYD"){
			$("body").attr("class","sydney");
		}
		
		//The Default!!!
		else {
			$("body").attr("class","");
		}
	}

});
