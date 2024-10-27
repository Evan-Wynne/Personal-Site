/* JavaScript (script.js) */
function openAccount() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Account opening process started for: ${email}`);
    } else {
        alert('Please enter your email address');
    }
}

function contactSales() {
    alert('Contacting sales...');
}



