// // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={f496613ef21e33a3c3afa2f568f0823c
// // }

// (async () => {
//   const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=45.267136&lon=19.833549&appid=f496613ef21e33a3c3afa2f568f0823c");  
//   const currentWeather = await response.json();
//   console.log(currentWeather)
//   })();

async function getWeatherForecast () {
  const API_KEY = "f496613ef21e33a3c3afa2f568f0823c";
  const LAT = 45.267136;
  const LON = 19.833549;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`; // za formatiranje koristiti backticks "`"
  
  const response = await fetch(URL);
  const data = await response.json();
const forecastList = data.list 
}
getWeatherForecast();

function formatList(list) {
  const formatedList = list.map(weather => {
    return {
      ...weather, // sve propertije koje imas iz ovoga ubaci u listu
      date_time: new Date(weather.dt_txt)
    };
  });
getUniqueDays(formatedList);

  // console.log(formatedList[0].date_time.getDate());
//   console.log(formatList);
//   const uniqueList = formatList.
// }
}

function getUniqueDays(list) {
  const days = {};
  for(const weather in list) {
    const key = weather.date_time.getDate();
    day[key] = weather;
  }

  const daysList = Object.values(days);
  daysList.sort((a,b) => a.date_time - b.date_time);
  displayWeatherData(daysList);
}

function displayWeatherData(days) {
  const dayNames= [
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const boxes = document.querySelectorAll(".box");
  for(let i = 0; i < boxes.length; i++){
    const dayDisplay = boxes[i].getElementsByTagName['h3'][0];
    const tempDisplay = boxes[i].querySelector("#temp");

    tempDisplay.innerHTML = days[i].main.temp;
    dayDisplay.innerHTML = days[i].date_time.getDay();

  }
}