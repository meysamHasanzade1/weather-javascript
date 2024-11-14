let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let getWeather = ()=>{
    let cityValue = cityRef.value
    if(cityValue.length == 0){
        result.innerHTML =`<h3 class="msg">Please enter a city name<h3>`
    }
    else{
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        fetch(url)
        .then((resp)=> resp.json())
        .then((date) =>{
           
            result.innerHTML = `
            <h2>${date.name}</h2>
            <h4 class="weather">${date.weather[0].main}</h4>
            <h4 class="desc">${date.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${date.weather[0].icon}.png">
            <h1>${date.main.temp} &#176;</h1>
            <div class="temp-container">
              <div>
                 <h4 class="title">min</h4>
                 <h4 class="temp">${date.main.temp_min}</h4>
              </div>
               <div>
                 <h4 class="title">max</h4>
                 <h4 class="temp">${date.main.temp_max}</h4>
              </div>
            </div>`
        })
        .catch(()=>{
            result.innerHTML=`<h3 class="msg">City not found`
        })
    }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load",getWeather);