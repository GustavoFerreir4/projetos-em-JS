// Configura a tecla 'Enter' como "acionador" do botão de submit:
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter'){
        var btnclick = document.querySelector('div#button');
        btnclick.click();
    }
});

// Lança a requisição Fetch, com os valores das variáveis e manipula-os na div "WeatherInfo":
function getWeatherInfo(){
    var citytxt = window.document.querySelector("input#city-name");
    var city = citytxt.value;
    var apiKey = "f29161e47b016e22aa18cf75b61f5523"
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br` 
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var WeatherInfo = document.querySelector("div#weather-info")
        var WindSpeed = data.wind.speed*1.60934
        WindSpeed = WindSpeed.toFixed(2)
        var Cloud = data.weather[0].description

        var CloudPic = Cloud

        switch (CloudPic){
            case "céu limpo":
                CloudPic = "Media/png-clouds-clear-sky.png"
            break

            case "nublado":
                CloudPic = "Media/png-clouds-nublado.png"
            break

            case "nuvens dispersas":
                CloudPic = "Media/png-clouds-parcialmente-nublado.png"
            break

            default:
                CloudPic = "Não Identificado"
            break

        }
        

        WeatherInfo.innerHTML = `
            <div id="condition">
                <div id="CloudCondition">
                    <h1>${city}</h1>
                    <img src=${CloudPic}>
                    <p>${Cloud}</p>
                </div>
                <h2>${data.main.temp}°</h2>
                <p>Máx. ${data.main.temp_max}° - Min. ${data.main.temp_min}°</p>
                <div id="Humidity-Wind">
                    <img src="media/humidity.png">
                    <p>${data.main.humidity}%</p>
                    <img src="media/wind.png">
                    <p>${WindSpeed} Km/h</p>
                </div>
            </div>
        ` 
    } )
}

 
