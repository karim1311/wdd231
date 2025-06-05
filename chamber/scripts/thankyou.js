// THANK YOU MEMBERSHIP FORM APPLICATION RESULTS
const myInfo = new URLSearchParams(window.location.search)
console.log(myInfo)

document.querySelector('#results').innerHTML = `
<p>Thank you for applying to ${myInfo.get('membership')} Membership Level</p>
<p><b>First Name:</b> ${myInfo.get('first')}</p>
<p><b>Last Name:</b> ${myInfo.get('last')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Business Name: ${myInfo.get('organization')}</p>
<p>Sent at: ${myInfo.get('timestamp')}</p>
`