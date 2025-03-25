const url = 'data/members.json'

const cards = document.querySelector('#cards')

async function getCompaniesData() {
    const response = await fetch(url)
    const data = await response.json()


    // console.table(data.companies) // temporary testing
    const goldsilvercompanies = data.companies.filter((company) => company.membershiplevel > 1) 

    // shuffle array
    const shuffledCompanies = goldsilvercompanies.sort(() => 0.3 - Math.random())

    // get sub-array of first n elements after shuffled
    let selected = shuffledCompanies.slice(0,3)

    console.log(selected)
    displayCompanies(selected) // note that you reference the companies array of the JSON data object, not just the object

    console.log(data)
}

getCompaniesData()

const displayCompanies = (companies) => {
    // card build goes here
    companies.forEach((company) => {
        // create elements to add to the div.cards element
        let card = document.createElement('section')
        let name = document.createElement('h2')
        let email = document.createElement('p')
        let phone = document.createElement('p')
        let urlp = document.createElement('p')
        let url = document.createElement('a')
        let portrait =  document.createElement('img')

        // Build the h2 content out to show the company's name
        name.textContent = `${company.name}`
        email.textContent = `${company.email}`
        phone.textContent = `${company.phone}`
        url.textContent = `${company.websiteurl}`
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', company.iconfilename)
        portrait.setAttribute('alt', `Image of ${company.name}`)
        portrait.setAttribute('loading', 'lazy')
        // portrait.setAttribute('width', '')
        // portrait.setAttribute('height', '440')
        url.setAttribute('href', company.websiteurl)

        // Append the section(card) with the created elements
        card.appendChild(name)
        card.appendChild(portrait)
        // card.appendChild(email)
        card.appendChild(urlp)
        urlp.appendChild(url)
        card.appendChild(phone)

        cards.appendChild(card)
    })
}
