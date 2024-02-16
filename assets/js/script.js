
// need Geocoding API to convert city names to lattitude and longitude
// use id userText to plug into geocoding API//might not need
//http://api.openweathermap.org/geo/1.0/direct?q=$('.userInput')&limit=5&appid={API key}



// need weather map API to pull temp wind humidity and emoji for current
//
$(document).ready(function() {
    var apiKey = '8d0559dcdc2fc933fe6e461791fc0b68';

    $('#sButton').on("click", function(event) {
        event.preventDefault();

        var encodeURLComponent = $('#userText').val();
        var apiCWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURLComponent + '&lang=en&units=imperial&appid=' + apiKey;
        var apiFWeather = 'https://api.openweathermap.org/data/2.5/forecast?q=' + encodeURLComponent + '&lang=en&units=imperial&appid=' + apiKey;
        
        fetch(apiCWeather)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log(data);
                        
                        displayCWeather(data);
                    });
                }
            });

        fetch(apiFWeather)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(results) {
                        console.log(results);
                        
                        // displayfWeather(results);
                    });
                }
            });

    });

    function displayCWeather(data) {
        // var cDate = ???
        var city = data.name;
        var cTemp = data.main.temp;
        var cWind = data.wind.speed;
        var cHumidity = data.main.humidity;
        // var cSymbol = data.weather[0];
        console.log(city, cTemp, cWind, cHumidity, /*cSymbol*/);
    }

    // function displayfWeather

});


//need // need weather map API to pull temp wind humidity and emoji for 5 day forecast