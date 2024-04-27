//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
let container=document.querySelector("#container");
let input=document.getElementById("input");
let btn=document.getElementById("btn");
btn.addEventListener("click",fetchApi);
    function fetchApi() {
      let city=input.value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6df4263113869cae68c9d17256b60711&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description
      let date=new Date();

      let display = `        
                    <p id="city">${data.name},${data.sys.country}</p>
                    <p id="date">${date}</p>
                    <h1 id="degree">${data.main.temp}°F</h1>
                    <p id="description">${data.weather[0].description}</p>
                    <p id="minmax">${data.main.temp_max}°F/${data.main.temp_min}°F</p>`
      
      container.innerHTML=display;


})
.catch(error => {
  console.error('Error fetching weather data:', error);
});

  }