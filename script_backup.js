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

let city = prompt("Enter a city");
city = city.toLowerCase().trim();

if (weather[city] !== undefined) {
  let fahrenheit = Math.round((weather[city].temp * 9) / 5 + 32);

  alert(
    `It is currently ${Math.round(
      weather[city].temp
    )}°C (${fahrenheit}°F) in ${city} with a humidity of ${Math.round(
      weather[city].humidity
    )}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}.`
  );
}
