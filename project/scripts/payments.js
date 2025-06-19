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


const loans = JSON.parse(localStorage.getItem('loans'))


const select = document.getElementById('clientSelect')
const tableBody = document.getElementById('loansBody')

select.addEventListener('change', () => {



    const selectedClient = select.value
    
    console.log(selectedClient)

    tableBody.innerHTML = ''

    if (selectedClient){

        const clientLoans = loans.filter(l => l.client_id === selectedClient)
    
        if (clientLoans.length > 0){
            clientLoans.forEach(loan  => {
                const row = document.createElement('tr')
    
                const cellId = document.createElement('td')
                cellId.textContent = loan.id

                const cellAmount = document.createElement('td')
                cellAmount.textContent = loan.amount
                
    
                row.appendChild(cellId)
                row.appendChild(cellAmount)
                tableBody.appendChild(row)
            })
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 2;
        cell.textContent = 'Este cliente no tiene préstamos.';
        row.appendChild(cell);
        tableBody.appendChild(row);
    }

    }






})