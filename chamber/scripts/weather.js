const currentTemp = document.querySelector('#current-temp')
let currentTempForecast = document.querySelector('.current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')
const highestTemp = document.querySelector('#highest-temp')
const lowestTemp = document.querySelector('#lowest-temp')
const humidity = document.querySelector('#humidity')
const sunrise = document.querySelector('#sunrise')
const sunset = document.querySelector('#sunset')


// forecast
const forecastCard = document.querySelector('.forecast-text')


async function apiFetch() {
    try {
        // openweatherapi url
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=24.80&lon=-107.38&units=metric&appid=8200f5153a1ec94c419b46c12f847e8f`
        
        const response = await fetch(url)
        if(response.ok) {
            const data = await response.json()
            console.log(data)
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch()

function displayResults(data) {
    currentTemp.innerHTML = `<strong>${Math.round(data.main.temp)}&deg;</strong> C`
    currentTempForecast.innerHTML = `<strong>${Math.round(data.main.temp)}&deg; C</strong>`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
    captionDesc.textContent = `${data.weather[0].description}`
    highestTemp.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;`
    lowestTemp.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`

    let sr = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-MX")

    let s = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-MX")
    
    sunrise.innerHTML = `Sunrise: ${sr.substring(0,4)}am`
    sunset.innerHTML = `Sunset: ${s.substring(0,4)}pm`

}


async function hourlyForecast() {
    try{
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=24.80&lon=-107.38&units=metric&appid=8200f5153a1ec94c419b46c12f847e8f`

        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            let uniqueForecastDays = []
            let fiveDaysForecast = data.list.filter(forecast => {
                let forecastDate = new Date(forecast.dt_txt).getDate()
                if(!uniqueForecastDays.includes(forecastDate) && uniqueForecastDays.length<=1){
                    return uniqueForecastDays.push(forecastDate)
                }
            })

            displayForecast(fiveDaysForecast)
            console.log(fiveDaysForecast)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

hourlyForecast()

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const displayForecast = (forecastDays) => {
    forecastDays.forEach((forecastDay) => {
        let date = new Date(forecastDay.dt_txt).getDay()
        // create elements to add to the card element
        let day =  document.createElement('p')
        let temp =  document.createElement('span')


        day.textContent = `${weekdays[date]}: `
        temp.innerHTML = `<strong>${Math.round(forecastDay.main.temp)}&deg;C</strong>`
        forecastCard.appendChild(day)
        day.appendChild(temp)

    })
}