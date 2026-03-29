const apiKey = "df36bcb7e5a14e7aae822851261403";
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value;
  cityInput.value = "";

  if (city === "") {
    alert("Please enter a city");
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
    );
    const data = await response.json();
    cityName.textContent = data.location.name;
    temperature.textContent = "Temperature: " + data.current.temp_c + "°C";
    description.textContent = "Weather: " + data.current.condition.text;
  } catch (error) {
    console.log(error);
    alert("City not found!");
  }
}
