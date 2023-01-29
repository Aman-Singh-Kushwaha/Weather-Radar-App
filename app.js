const searchbtn = document.getElementById("search");
const apiKey= "20fe150d1c984ee797d90906232801";
const options = {method: 'GET'};

searchbtn.addEventListener('click', function(){
  let city = document.getElementById("city-el").value;
  console.log(city);
  const url =`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  console.log(url);
  fetch(url, option)
  .then(response => response.json())
  .then(response => render())
  .catch(err => console.error(err));
})

const weatherLogCity = document.getElementById("weather-city");

function render(){
  console.log(response)
  document.getElementById("weather-wrapper").style={display: flex};
  weatherLogCity.innerHTML=``

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