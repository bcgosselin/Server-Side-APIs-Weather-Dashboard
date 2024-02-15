
// need Geocoding API to convert city names to lattitude and longitude
// use id userText to plug into geocoding API//might not need
//http://api.openweathermap.org/geo/1.0/direct?q=$('.userInput')&limit=5&appid={API key}



// need weather map API to pull temp wind humidity and emoji for current
//

$('.sButton').on("click", function getForecast() {
    var userInput = $('.userText').val();
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&appid=8d0559dcdc2fc933fe6e461791fc0b68';

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                });
            }
        })
        .catch(function(error) {
            console.error('Error fetching forecast:', error);
        });
});

//need // need weather map API to pull temp wind humidity and emoji for 5 day forecast