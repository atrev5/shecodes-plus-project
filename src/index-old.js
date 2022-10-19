let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
function cityInfo() {
  let city = prompt("Enter a city name");
  return city;
}

function getOutputString(cityName) {
  let tempInFahrenheit = Math.round(convertCelsiusToFahrenheit(weather[cityName].temp));
  return `It is currently ${weather[cityName].temp}°C (${tempInFahrenheit}°F) in ${cityName} with a humidity of ${weather[cityName].humidity}%`;
}

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}


function enterCity() {
  let cityName = cityInfo().toLowerCase();

  let outputString = `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`;
  switch (cityName) {
    case "paris":
      outputString = getOutputString(cityName);
      alert(outputString);
      break;
    case "tokyo":
      outputString = getOutputString(cityName);
      alert(outputString);
      break;
    case "lisbon":
      outputString = getOutputString(cityName);
      alert(outputString);
      break;
    case "san francisco":
      outputString = getOutputString(cityName);
      alert(outputString);
      break;
    case "oslo":
      outputString = getOutputString(cityName);
      alert(outputString);
      break;
    default:
      alert(outputString);
  }

  // if (cityName === "paris") {
  //   alert(`${weather[cityName].temp}`)
  // } else if (cityName === "tokyo") {
  //   alert(`${weather[cityName].temp}`);
  // }
}

enterCity();
