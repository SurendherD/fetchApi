//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

function callApi(){

 /* fetch("https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=6df4263113869cae68c9d17256b60711&units=metric")
  .then(res=>{
    res.json();
  })
  .then(data=>{
    console.log(data);
    //let display=`<p></p>`
  })*/

    // Function to fetch weather data from OpenWeatherMap API
    function fetchWeatherData() {
      const apiKey = '6df4263113869cae68c9d17256b60711'; // Replace 'YOUR_API_KEY' with your actual API key
      const city = 'Bengaluru'; // You can change the city to any desired location

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
.then(response => response.json())
.then(data => {
  console.log('Weather data:', data); // Log the entire data object
  // Extract relevant weather information
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  console.log('Temperature:', temperature); // Log temperature
  console.log('Weather description:', weatherDescription); // Log weather description

  // Display weather information on the webpage
  const weatherInfoElement = document.getElementById('weather-info');
  weatherInfoElement.innerHTML = `<p>Temperature: ${temperature}°C</p>
                                  <p>Description: ${weatherDescription}</p>`;
})
.catch(error => {
  console.error('Error fetching weather data:', error);
});

  }

}

callApi();