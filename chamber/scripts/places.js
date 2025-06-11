import {places} from '../data/places.mjs'
console.log(places)

// ----------- GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#allplaces")

// ------------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(places){
    places.forEach(x => {
        // build the card element
        const thecard = document.createElement('div')
        // build the photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.image_url}`
        thephoto.alt = x.name
        thephoto.loading = 'lazy'
        thecard.appendChild(thephoto)
        // build the title element
        const title = document.createElement('h2')
        title.innerText = x.name
        thecard.appendChild(title)
        // build the address element
        const address = document.createElement('address')
        address.innerText = x.address
        thecard.appendChild(address)
        // build the description element
        const desc = document.createElement('p')
        desc.innerText = x.description
        thecard.appendChild(desc)
        // build the button element
        const button = document.createElement('button')
        button.innerText = 'Learn More'
        thecard.appendChild(button)
        
        showHere.appendChild(thecard)
    }) // end loop
} // end function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(places)