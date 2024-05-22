
const key = "2b8022f9b52863428575ebe46d8180ad";


function showScreen(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}



async function searchCity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( res => res.json())
    
    showScreen(dados)
    
}


function buttomClicked() {
    const city = document.querySelector(".city-input").value;
    searchCity(city)
}

