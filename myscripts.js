let celsiusButton = document.getElementById("celsiusClick");
let fahrenheitButton = document.getElementById("fahrenheitClick");
let temperatureSymbol = document.getElementById("temperatureSymbol");
let temperatureNumber = document.getElementById("temperatureNumber");

let temperatures = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 , 30, 31, 32, 33, 34]


let randomTemperature = temperatures[Math.floor(Math.random() * temperatures.length)];
    
temperatureNumber.innerText = randomTemperature;



celsiusButton.addEventListener("click", selectCelsius);
fahrenheitClick.addEventListener("click", selectFahrenheit);




function addCSymbol() {
    temperatureSymbol.innerText = " ";
    temperatureSymbol.innerText = "℃";
}

function addFSymbol() {
    temperatureSymbol.innerText = " ";
    temperatureSymbol.innerText = "℉";
}

function convertToFa() {
    var nr = temperatureNumber.innerText;
    var convertedNumber = (nr * 1.8) + 32;
    temperatureNumber.innerText = convertedNumber;
}

function convertToCe(){
    var nr = temperatureNumber.innerText;
    var convertedNumber = (nr - 32) / 1.8;
    temperatureNumber.innerText = convertedNumber;
}



function selectCelsius() {
    if (celsiusButton.className !== "selected_unit") {
        (celsiusButton.className = "selected_unit") && (fahrenheitButton.className = "unselected_unit") && addCSymbol();
    }
    convertToCe();
}

function selectFahrenheit() {
    if (fahrenheitButton.className !== "selected_unit") {
        (fahrenheitButton.className = "selected_unit") && (celsiusButton.className = "unselected_unit") && addFSymbol();
    }
    convertToFa();
}
















// var oldApi =  "https://fcc-weather-api.glitch.me/api/current?lat=-41.2&lon=174.7"; 
// var displayTemperature = document.getElementById("displayTemperature");
// var newApi = "https://jsonplaceholder.typicode.com/todos/1";
// var urlRoot = "https://jsonplaceholder.typicode.com/todos/";
// var wellingtonLink = getData(newApi); 
// var elRefresh = document.getElementById("refresh");
// var search = document.getElementById('search');
// elRefresh.addEventListener("click", function(){
//     getData(urlRoot + search.value);
// });


// // ce face getData? 

// // function getData(url) {
// //     var request = new XMLHttpRequest () 
// //     // asta e standard? 
// //     request.open("GET", url)
// //     request.onload = function() {
// //         var weather = JSON.parse(request.responseText)
// //         console.log(request)
// //         console.log(request.responseText)
// //         console.log(weather)
// //     }
// //     request.send()
// // }

// function getData(url) {
//     fetch(url).then(function (raspuns){
//         raspuns.json().then(updateWeather)
//     })
// }





// function updateWeather (data) {
//     displayTemperature.innerText = data.title;
// }

// // assincrons sincron / asincron