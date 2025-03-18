const url = 'data/members.json'

const cards = document.querySelector('#cards')

async function getCompaniesData() {
    const response = await fetch(url)
    const data = await response.json()
    // console.table(data.companies) // temporary testing
    displayCompanies(data.companies) // note that you reference the companies array of the JSON data object, not just the object
}

getCompaniesData()

const displayCompanies = (companies) => {
    // card build goes here
    companies.forEach((company) => {
        // create elements to add to the div.cards element
        let card = document.createElement('section')
        let name = document.createElement('h2')
        let portrait =  document.createElement('img')

        // Build the h2 content out to show the company's name
        name.textContent = `${company.name}`
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', company.iconfilename)
        portrait.setAttribute('alt', `Image of ${company.name}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height', '440')

        // Append the section(card) with the created elements
        card.appendChild(name)
        card.appendChild(portrait)

        cards.appendChild(card)
    })
}