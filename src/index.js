function showDayAndDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  return `${day}, ${month}/${now.getDate()}/${now.getFullYear()}`;
}

function showToday() {
  let today = showDayAndDate();
  let currentDay = document.querySelector(".current-day");
  return (currentDay.innerHTML = `${today}`);
}

function formatHour() {
  let hour = now.getHours();
  if (hour < 10) {
    return `0${hour}`;
  } else {
    return `${hour}`;
  }
}

function formatMinute() {
  let minutes = now.getMinutes();
  if (minutes < 10) {
    return `0${minutes}`;
  } else {
    return `${minutes}`;
  }
}

function getTimeStamp() {
  let hour = formatHour();
  let minute = formatMinute();
  return `${hour}:${minute}`;
}

function showTime() {
  let timeNow = getTimeStamp();
  let currentTime = document.querySelector(".current-time");
  currentTime.innerHTML = `${timeNow}`;
}

function showCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-city-input");
  let city = document.querySelector(".city-name");
  city.innerHTML = `${cityName.value}`;

  let apiKey = "d8ff107024b5046c2e87dae3bfcbbb12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let searchCityTemp = Math.round(response.data.main.temp);
  let cityTemp = document.querySelector("#search-city-temp");
  cityTemp.innerHTML = `${searchCityTemp}`;
}

function clickCurrentBtn(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayCoordinatesTemp);
}

function displayCurrentTemp(response) {
  let tempDisplay = document.querySelector(".current-temp");
  let currentTemp = Math.round(response.data.main.temp);
  let locationDisplay = document.querySelector(".city-name");
  let currentLocation = response.data.name;
  tempDisplay.innerHTML = `${currentTemp}`;
  locationDisplay.innerHTML = `${currentLocation}`;
}

function displayCoordinatesTemp(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "d8ff107024b5046c2e87dae3bfcbbb12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayCurrentTemp);
}

let now = new Date();

let cityForm = document.querySelector("#search-city-form");
cityForm.addEventListener("submit", showCity);

let cityFormTwo = document.querySelector("#search-city-form-two");
cityFormTwo.addEventListener("submit", showCity);

let currentTempButton = document.querySelector(".current-location-btn");
currentTempButton.addEventListener("click", clickCurrentBtn);

showTime();
showToday();
