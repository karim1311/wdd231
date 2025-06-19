const dateControl = document.querySelector('input[type="hidden"]')

const d = new Date()
// array of months to return the months as a name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

dateControl.value  = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
// dateControl.value  = `${d}`
// console.log(dateControl.value)

import {loantypes} from '../data/loantypes.mjs'
// console.log(loantypes);


// LOAD CLIENTS
// const clients =  localStorage.getItem('clients')
const clients = JSON.parse(localStorage.getItem('clients'))
// console.log(clients)

function loadClients(clients){
    const select = document.getElementById('clientSelect')
    select.innerHTML =  `<option value="" id="clientId">Select a client </option>`

    
    clients.forEach(x => {
        const option = document.createElement('option')
        option.value = x.id
        option.textContent = `${x.name}`
        select.appendChild(option)
        // console.log(x.id)
    })
}

loadClients(clients)

// LOAD LOAN TYPES
function loadLoanTypes(loantypes){
    const select = document.getElementById('loanSelect')
    select.innerHTML =  `<option value="" id="loanType">Select a loan type </option>`

    
    loantypes.forEach(x => {
        const option = document.createElement('option')
        option.value = x.id
        option.textContent = `${x.description}`
        select.appendChild(option)
        // console.log(option)
    })
}

loadLoanTypes(loantypes)

// SAVE LOAN IN LOCALSTORAGE
const loans = JSON.parse(localStorage.getItem('loans')) || []
console.log(loans)

document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault()

    const client_id = document.getElementById('clientSelect').value
    const loan_type = document.getElementById('loanSelect').value
    const amount =  document.getElementById('amount').value
    const payments = document.getElementById('payments').value
    const protection = document.getElementById('protection').value
    const first_payment = document.getElementById('firstPayDate').value

    // JSON.stringify(client_id)
    console.log(client_id)

    // const loans = JSON.parse(localStorage.getItem('clientes')) || []
    const newLoan = {
        id: Date.now(),
        client_id,
        loan_type,
        amount,
        payments,
        protection,
        first_payment
    }

    loans.push(newLoan)
    localStorage.setItem('loans', JSON.stringify(loans))

    alert('loan saved')
    this.reset()
})

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
        // console.log(x)
        const card = document.createElement('div')
        card.classList.add("membership")
        let description = document.createElement('p')
        description.textContent = `${x.description} loan`
        const p = document.createElement('button')
        p.textContent = `Learn More`
        p.classList.add('learn-more')
        card.appendChild(description)
        card.appendChild(p)
        // Add an event listener to each division on the page
        p.addEventListener('click', () => showStuff(x))
        showHere.appendChild(card)
    })
}

displayItems(loantypes)

// POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED
function showStuff(x){
    mytitle.innerHTML = x.description
    myinfo.innerHTML = `Interest: ${x.interest}%`
    mydialog.showModal()
}


