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
  weatherLogDetails.innerHTML=`<p>Feels Like : ${info.current.feelslike_c}</p>
                              <p>Humidity: ${info.current.humidity}%</p>
                              <p>Clouds in Sky:${info.current.cloud}%</p>
                              <p>Precipitation(in mm):${info.current.precip_mm}</p>
                              <p>Pressure(in millibars):${info.current.pressure_mb}</p>
                              <p>Wind Speed(mph): ${info.current.wind_mph}( ${info.current.wind_dir} )</p>`
  weatherCondition.innerHTML=`<h2>${info.current.condition.text}<h2>
                              <img src="${info.current.condition.icon}" alt="Weather Coontion Icon">`;
}

// document.getElementById('getApi').addEventListener('click', getApi);
// const apiId= 'e2d2fe2c76f848a2b1570500222607';
// function getApi() {
//     var CityName = document.getElementById('cityName').value;
// console.log(CityName)
// const url = `http://api.weatherapi.com/v1/current.json?key=${apiId}&q=${CityName}&aqi=yes`;
// console.log(url);
// fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         let output = `
//             <div>
//                 <div style="color:black; width:10rem; background-color:white; border-radius: 10px;" class="p-3">        
//                     <p class="m-0" style="font-width:bold; font-size:2rem;">${data.location.name}</p>
//                     <p class="m-0" style="font-width:bold; font-size:4rem;"> ${data.current.temp_c}<sup>°C</sup></p>
//                 </div>
//             </div>
//             `;
//         console.log('printing data', data);
//         document.getElementById('output').innerHTML = output;
//     }).catch((err) => console.log(err))
// }