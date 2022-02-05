
function k2f(kelvinTemp) {
    return kelvinTemp * 1.8 - 459.67
}

async function getZipCode() {
    let zipcode = document.getElementById("zip-entry-field").value;
    let res = await fetch("https://api.zippopotam.us/us/" + zipcode);
    let data = await res.json();
    let place = data['places'][0]['place name'];
    let lon = data['places'][0]['longitude'];
    let lat = data['places'][0]['latitude'];
    const weatherKey = "2382c8d4b1427550568671c0d8ed1de2"; 

    let weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}`);
    let weatherData = await weatherRes.json();
    let temperature = k2f(parseFloat(weatherData['main']['temp'])).toFixed(2);
    let tempMessage = "Temperature: " + temperature;
    document.getElementById("place-name").innerHTML = place;
    document.getElementById("temperature").innerHTML = tempMessage;

}

