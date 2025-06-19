// NAVIGATION
const hamburguerElement = document.querySelector('#myButton')
const navElement = document.querySelector('#animateme')

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open')
    hamburguerElement.classList.toggle('open')
})


// FOOTER MODIFICATION DATE
// select elements for the footer dates
const year = document.getElementById('currentyear')
const modified = document.querySelector('#lastModified')

// use the date object
const today = new Date()

year.innerHTML = `© ${today.getFullYear()} Culiacán Chamber of Commerce`

modified.innerHTML = `Last modification: ${document.lastModified}`


// miliseconds to days constant = 1000 ms/s * 60 s/m * 69 m/h * 24 h/day
// const msToDays = 86400000
// // today's date
// const theDateToday = new Date()

// // save in localstorage the visit
// localStorage.setItem("last-visit", theDateToday)

// // processing
// let daysBetweenLastVisit = new Date.UTC(today)

// console.log(Date.now())
// localStorage.setItem("lastVesitedTime", JSON.stringify(new Date()));

// var time = localStorage.getItem("lastVesitedTime");
// var lastVisitedTime = JSON.parse(time);
// var now =new Date();
// var diffDays =now.getDate() - lastVisitedTime.getDate(); 
// const visitsDisplay = document.querySelector('.timeBetween');
// visitedDisplay.innerText=diffDays + " days"