let userInput = document.querySelector(".citySearch");
let cityList = document.querySelector(".searchedCities");
let search = document.querySelector("#searchBtn");
let cityName = document.querySelector("#city");
let temperature = document.querySelector("#temp");
let humidity = document.querySelector("#humi");
let uvIndex = document.querySelector("#uv");

let queryURL = "https://api.openweathermap.org/data/2.5/onecall";
let apiKey = "b9908f20e2e77c95667780cf5ea0df21";

userInput = $(".citySearch").value;

//$("#searchBtn").on("click", function () {
  $.ajax({
    url: queryURL + userInput + apiKey,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
//});
