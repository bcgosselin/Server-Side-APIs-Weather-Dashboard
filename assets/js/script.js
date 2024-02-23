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
                        
                        displayFWeather(results);
                    });
                }
            });

    });

    function displayCWeather(data) {
        // var cDate = ???
        var cCity = data.name;
        var cTemp = data.main.temp;
        var cWind = data.wind.speed;
        var cHumidity = data.main.humidity;
        var cSymbol = data.weather[0].icon;
        var cIcon = 'https://openweathermap.org/img/wn/' + cSymbol + '@2x.png';

        document.getElementById('cCity').textContent = cCity;
        document.getElementById('cTemperature').textContent = cTemp + ' °F';
        document.getElementById('cWindSpeed').textContent = cWind + ' MPH';
        document.getElementById('cHumidity').textContent = cHumidity + '%';
        document.getElementById('cWeatherIcon').src = cIcon;
        
        // console.log(cCity, cTemp, cWind, cHumidity, cSymbol, cIcon);
    }

    function displayFWeather(results) {
        var f1Date = results.list[2].dt_txt;
        var f2Date = results.list[10].dt_txt;
        var f3Date = results.list[18].dt_txt;
        var f4Date = results.list[26].dt_txt;
        var f5Date = results.list[34].dt_txt;

        var f1Temp = results.list[2].main.temp;
        var f2Temp = results.list[10].main.temp;
        var f3Temp = results.list[18].main.temp;
        var f4Temp = results.list[26].main.temp;
        var f5Temp = results.list[34].main.temp;

        var f1Wind = results.list[2].wind.speed;
        var f2Wind = results.list[10].wind.speed;
        var f3Wind = results.list[18].wind.speed;
        var f4Wind = results.list[26].wind.speed;
        var f5Wind = results.list[34].wind.speed;

        var f1Humidity = results.list[2].main.humidity;
        var f2Humidity = results.list[10].main.humidity;
        var f3Humidity = results.list[18].main.humidity;
        var f4Humidity = results.list[26].main.humidity;
        var f5Humidity = results.list[34].main.humidity;

        var f1Symbol = results.list[2].weather[0].icon;
        var f1Icon = 'https://openweathermap.org/img/wn/' + f1Symbol + '@2x.png';
        var f2Symbol = results.list[10].weather[0].icon;
        var f2Icon = 'https://openweathermap.org/img/wn/' + f2Symbol + '@2x.png';
        var f3Symbol = results.list[18].weather[0].icon;
        var f3Icon = 'https://openweathermap.org/img/wn/' + f3Symbol + '@2x.png';
        var f4Symbol = results.list[26].weather[0].icon;
        var f4Icon = 'https://openweathermap.org/img/wn/' + f4Symbol + '@2x.png';
        var f5Symbol = results.list[34].weather[0].icon;
        var f5Icon = 'https://openweathermap.org/img/wn/' + f5Symbol + '@2x.png';

        document.getElementById('f1Date').textContent = f1Date;
        document.getElementById('f1Temperature').textContent = f1Temp + ' °F';
        document.getElementById('f1WindSpeed').textContent = f1Wind + ' MPH';
        document.getElementById('f1Humidity').textContent = f1Humidity + '%';
        document.getElementById('f1WeatherIcon').src = f1Icon;

        document.getElementById('f2Date').textContent = f2Date;
        document.getElementById('f2Temperature').textContent = f2Temp + ' °F';
        document.getElementById('f2WindSpeed').textContent = f2Wind + ' MPH';
        document.getElementById('f2Humidity').textContent = f2Humidity + '%';
        document.getElementById('f2WeatherIcon').src = f2Icon;

        document.getElementById('f3Date').textContent = f3Date;
        document.getElementById('f3Temperature').textContent = f3Temp + ' °F';
        document.getElementById('f3WindSpeed').textContent = f3Wind + ' MPH';
        document.getElementById('f3Humidity').textContent = f3Humidity + '%';
        document.getElementById('f3WeatherIcon').src = f3Icon;

        document.getElementById('f4Date').textContent = f4Date;
        document.getElementById('f4Temperature').textContent = f4Temp + ' °F';
        document.getElementById('f4WindSpeed').textContent = f4Wind + ' MPH';
        document.getElementById('f4Humidity').textContent = f4Humidity + '%';
        document.getElementById('f4WeatherIcon').src = f4Icon;

        document.getElementById('f5Date').textContent = f5Date;
        document.getElementById('f5Temperature').textContent = f5Temp + ' °F';
        document.getElementById('f5WindSpeed').textContent = f5Wind + ' MPH';
        document.getElementById('f5Humidity').textContent = f5Humidity + '%';
        document.getElementById('f5WeatherIcon').src = f5Icon;

    console.log(f1Date, f1Temp, f1Wind, f1Humidity, f1Symbol, f1Icon);
    };

});