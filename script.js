async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = 'YOUR_API_KEY'; // Get it from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  
  if (data.cod !== 200) {
    document.getElementById("result").innerText = "City not found!";
    return;
  }

  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const resultText = `Weather in ${city}: ${temp}°C, ${desc}`;
  document.getElementById("result").innerText = resultText;

  // Voice Output
  const speakText = new SpeechSynthesisUtterance(resultText);
  window.speechSynthesis.speak(speakText);
}
