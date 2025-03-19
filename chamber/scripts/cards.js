const url = 'data/members.json'

const cards = document.querySelector('#cards')

async function getCompaniesData() {
    const response = await fetch(url)
    const data = await response.json()
    // console.table(data.companies) // temporary testing
    displayCompanies(data.companies) // note that you reference the companies array of the JSON data object, not just the object

    console.log(data)
}

getCompaniesData()

const displayCompanies = (companies) => {
    // card build goes here
    companies.forEach((company) => {
        // create elements to add to the div.cards element
        let card = document.createElement('section')
        let name = document.createElement('h2')
        let address = document.createElement('p')
        let phone = document.createElement('p')
        let portrait =  document.createElement('img')

        // Build the h2 content out to show the company's name
        name.textContent = `${company.name}`
        address.textContent = `${company.address}`
        phone.textContent = `${company.phone}`
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', company.iconfilename)
        portrait.setAttribute('alt', `Image of ${company.name}`)
        portrait.setAttribute('loading', 'lazy')
        // portrait.setAttribute('width', '')
        // portrait.setAttribute('height', '440')

        // Append the section(card) with the created elements
        card.appendChild(portrait)
        card.appendChild(name)
        card.appendChild(address)
        card.appendChild(phone)

        cards.appendChild(card)
    })
}


// TOGGLE BETWEEN GRID AND LIST
const gridbutton = document.querySelector("#grid")
const listbutton = document.querySelector("#list")
const display = document.querySelector("article")

gridbutton.addEventListener("click", () => {
    display.classList.add("grid")
    display.classList.remove("list")
})

listbutton.addEventListener("click", showList)

function showList() {
    display.classList.add("list")
    display.classList.remove("grid")
}