const inputField = document.getElementById("city-el");
const searchbtn = document.getElementById("search");
const apiKey= "20fe150d1c984ee797d90906232801";
const options = {method: 'GET'};
const weatherLogCity = document.getElementById("weather-city");
const weatherLogDetails = document.getElementById("weather-data");
const weatherCondition = document.getElementById("weather-condition");

inputField.addEventListener("keyup", e =>{          // Listening Enter Click in Input
  if(e.key == "Enter" && inputField.value != ""){
    console.log(inputField.value); //Conforming Enter Click 
    requestApi(inputField.value);  //Calling API
  }
});

searchbtn.addEventListener('click', function(){ //Listening Submit Button Click
  console.log(inputField.value);
  requestApi(inputField.value);
})

function requestApi(city){     // For making API Request
  apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  console.log(apiURL); //Conforming URL Concatination
  document.querySelector('.hero h1').style= "display: none";
  document.getElementById('weather-wrapper').style= "visibility: visible";
  fetchData();
}

function fetchData(){              // For Retriving Data From API Request URL
  fetch(apiURL, options).then(res => res.json())
  .then(result => renderDetails(result))
  .catch(err => console.error(err)); //To Handle Error
}

function renderDetails(info){  //For Updating Data in HTML
  console.log(info);
  weatherLogCity.innerHTML=`<h1>${info.location.name}, </h1>
                            <p>${info.location.region}, ${info.location.country}</p>
                            <h2>${info.current.temp_c}°C<h2>`;
  weatherLogDetails.innerHTML=`<p>Feels Like: ${info.current.feelslike_c}°C</p>
                              <p>Humidity: ${info.current.humidity}%</p>
                              <p>Clouds: ${info.current.cloud}%</p>
                              <p>Precipitation: ${info.current.precip_mm}mm</p>
                              <p>Pressure: ${info.current.pressure_mb}mb</p>
                              <p>Wind Speed: ${info.current.wind_mph}mph (${info.current.wind_dir})</p>`
  weatherCondition.innerHTML=`<h1>${info.current.condition.text}</h1>
                              <img src="${info.current.condition.icon}" alt="Weather Condition Icon">`;
}
