	var APPID = "4409cc84190b23cb86522e4265e9c1bf";
	var temp;
	var loc;

window.onload = function(){
temp = document.getElementById("temperature");
loc = document.getElementById("location");
// initially setting the values to something
// var weather = {};
// weather.temp = "45";
// weather.loc = "Dallas";
// update(weather);
}

function update(weather){
			loc.innerHTML = weather.loc;
			temp.innerHTML = weather.temp;
}


// function updateByZip(zip){
// 	var url= "http://api.openweathermap.org/data/2.5/weather?" + "zip=" + zip + "&APPID=" + APPID;
// 	sendRequest(url);
// }
//
// function sendRequest(url){
// 	var xmlhttp = new XMLHttpRequest(), json;
// 	xmlhttp.onreadystatechange = function() {
// 			if(xmlhttp.readyState === 0 || xmlhttp.readyState === 4){
// 					json = JSON.parse(xmlhttp.responseText);
// 					console.log(json);
// 		 var data = JSON.parse(xmlhttp.responseText);
// 		 var weather = {};
//  		 weather.temp = data.main.temp;
// 	 weather.loc = data.name;
// 		 update(weather);
// 		}
//  	};
// 	xmlhttp.open('GET',url,true);
// 	xmlhttp.send();
// }


function test(){
	var xmlhttp = new XMLHttpRequest(),
	 json;
	xmlhttp.onreadystatechange = function() {
					json = xmlhttp.responseText;
					console.log(json);
		// var data = JSON.parse(xmlhttp.responseText);
		// var weather = {};
	// 			// weather.temp = data.main.temp;
	// 			// weather.loc = data.name;
	// 			// update(weather);

	};
	xmlhttp.open('GET',"http://api.openweathermap.org/data/2.5/weather?zip=75067&APPID=4409cc84190b23cb86522e4265e9c1bf",true);
	xmlhttp.send();
}
