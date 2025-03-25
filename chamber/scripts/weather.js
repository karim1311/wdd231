const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')
const highestTemp = document.querySelector('#highest-temp')
const lowestTemp = document.querySelector('#lowest-temp')
const humidity = document.querySelector('#humidity')
const sunrise = document.querySelector('#sunrise')
const sunset = document.querySelector('#sunset')


async function apiFetch() {
    try {
        // openweatherapi url
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=24.80&lon=-107.38&units=metric&appid=8200f5153a1ec94c419b46c12f847e8f`
        
        const response = await fetch(url)
        if(response.ok) {
            const data = await response.json()
            // console.log(data)
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
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
    captionDesc.textContent = `${data.weather[0].description}`
    highestTemp.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;`
    lowestTemp.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    sunrise.innerHTML = `Sunrise: `
    sunset.innerHTML = `Sunset:`
}


async function hourlyForecast() {
    try{
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=24.80&lon=-107.38&units=metric&appid=8200f5153a1ec94c419b46c12f847e8f`

        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            // displayForecast(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

hourlyForecast()

const displayForecast = (days) => {
    days.forEach((dayOfWeek) => {
        // create elements to add to the card element
        let day =  document.createElement('p')
        let temp =  document.createElement('span')


        day.textContent = `${dayOfWeek}`
    })
}