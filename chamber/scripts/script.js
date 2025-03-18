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

