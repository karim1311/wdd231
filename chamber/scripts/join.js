const dateControl = document.querySelector('input[type="hidden"]')

const d = new Date()
// array of months to return the months as a name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

dateControl.value  = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
// dateControl.value  = `${d}`
console.log(dateControl.value)

import {memberships} from '../data/memberships.js'
// console.log(memberships);

// --------------------- GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#showHere")
// GET A REFERENCE TO THE HTML DIALOG ELEMENT
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myinfo = document.querySelector("#mydialog p")
const myclose = document.querySelector("#mydialog button")
myclose.addEventListener("click", () => mydialog.close())

// -------------------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data){
    // console.log(data)
    data.forEach(x => {
        console.log(x)
        const card = document.createElement('div')
        card.classList.add("membership")
        let name = document.createElement('p')
        name.textContent = `${x.name} Membership Level`
        const p = document.createElement('button')
        p.textContent = `Learn More`
        p.classList.add('learn-more')
        card.appendChild(name)
        card.appendChild(p)
        // Add an event listener to each division on the page
        p.addEventListener('click', () => showStuff(x))
        showHere.appendChild(card)
    })
}

displayItems(memberships)

// POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED
function showStuff(x){
    mytitle.innerHTML = x.name
    myinfo.innerHTML = `${x.description}`
    mydialog.showModal()
}


