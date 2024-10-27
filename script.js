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


// JavaScript File: script.js
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

