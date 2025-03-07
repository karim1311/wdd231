const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")

hamButton.addEventListener('click',()=>{
    navigation.classList.toggle('open')
    hamButton.classList.toggle('open')
})

// select elements for the footer dates
const year = document.getElementById('currentyear')
const modified = document.querySelector("#lastModified")


// use the date object
const today = new Date()

year.innerHTML = `© ${today.getFullYear()}`

modified.innerHTML = `Last modified: ${document.lastModified}`