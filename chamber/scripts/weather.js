const dotenv = require('dotenv')

dotenv.config()

const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')
const highestTemp = document.querySelector('#highest-temp')
const lowestTemp = document.querySelector('#lowest-temp')
const humidity = document.querySelector('#humidity')
const sunrise = document.querySelector('#sunrise')
const sunset = document.querySelector('#sunset')

// openweatherapi url
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=${process.env.OPENWEATHER}`

console.log(url)

async function apiFetch() {
    try {
        const response = await fetch(url)
        if(response.ok) {
            const data = await response.json()
            console.log(data)
            // displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch()