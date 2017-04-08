$(document).ready(function(){
var zipCode;
var appIdNum = "API KEY"
var url;
//variables for outputing data
var temperature;
var temperatureF;
var location;
var weatherId;

//create functions for picture
function defaultWeather(){
		$('#picture').attr('src','images/default.jpg');
}
function cloudy(){
		$('#picture').attr('src','images/cloudy.jpg');
}
function drizzle(){
		$('#picture').attr('src','images/drizzle.jpg');
}
function rain(){
		$('#picture').attr('src','images/rain.jpg');
}
function snow(){
		$('#picture').attr('src','images/snow.jpg');
}
function sunny(){
		$('#picture').attr('src','images/sunny.jpg');
}
function windy(){
		$('#picture').attr('src','images/windy.jpg' );
}

//On enter of input
$('#submit').keypress(function(event){

	var keycode = (event.which ? event.which : event.which);
	if(keycode == '13'){
		alert('You pressed a "enter" key in textbox');
	}
	event.stopPropagation();
});


//On Click
	$('#submit').click(function(){
		run();
	});


function run(){
		zipCode = $('#zipCode').val();
	 	url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&APPID="+ appIdNum;

			$.getJSON(url, function(weather){
				//get location
				location = weather.name;
				//get temperature from Kelvin to Fahrenheit
				temperature = weather.main.temp - 273;
				temperatureF = (9/5) * temperature + 32;
				//get weatherId from Array of openweathermap api.
					$(weather.weather).each(function(index, value){
						weatherId = value.id;
					});
				});
		$('#temperature').html(temperatureF.toFixed(0));
		$('#location').html(location);

		// call function to change weather picture based on weatherId returned from API
		if (weatherId > 199 && weatherId < 235){
				sunny();
		} else if (weatherId > 299 && weatherId < 320){
				rain();
		} else if (weatherId > 499 && weatherId < 532){
				drizzle();
		}else if (weatherId > 599 && weatherId < 623){
				snow();
		}else if (weatherId > 699 && weatherId < 783){
				defaultWeather();
		}else if (weatherId == 800){
				sunny();
		}else if (weatherId > 800 && weatherId < 805){
				cloudy();
		}else if (weatherId > 899 && weatherId < 907){
				defaultWeather();
		}else if (weatherId > 949 && weatherId < 963){
				defaultWeather();
		} else {
				defaultWeather();
		};
		console.log(weatherId);
		;}

});
