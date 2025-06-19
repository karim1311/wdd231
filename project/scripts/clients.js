// import {clients} from '../data/clients.mjs'
// console.log(clients)

// ----------- GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#showHere")



const clients = JSON.parse(localStorage.getItem('clients')) || []

document.getElementById('formClient').addEventListener('submit', function(e) {
    e.preventDefault()

    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const status =  'active'

    // const clients = JSON.parse(localStorage.getItem('clientes')) || []
    const newClient = {
        id: Date.now(),
        name,
        phone,
        status
    }

    clients.push(newClient)
    localStorage.setItem('clients', JSON.stringify(clients))

    alert('client saved')
    this.reset()
})

// GET A REFERENCE TO THE HTML DIALOG ELEMENT
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myinfo = document.querySelector("#mydialog p")
const myStatus = document.querySelector("#status")
const myclose = document.querySelector("#mydialog button")
myclose.addEventListener("click", () => mydialog.close())

// ------------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(clients){
    clients.forEach(x => {
        // build the card element
       console.log(x)
        const card = document.createElement('div')
        card.classList.add("membership")
        let name = document.createElement('p')
        name.textContent = `${x.name}`

        const p = document.createElement('button')
        p.textContent = `More Info`
        p.classList.add('learn-more')
        card.appendChild(name)

        card.appendChild(p)
        // Add an event listener to each division on the page
        p.addEventListener('click', () => showStuff(x))
        showHere.appendChild(card)
    }) // end loop
} // end function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(clients)

console.log(clients)

function showStuff(x){
    mytitle.innerHTML = x.name
    myinfo.innerHTML = `Phone: ${x.phone}`
    myStatus.innerHTML = `Status: ${x.status}`
    mydialog.showModal()
}