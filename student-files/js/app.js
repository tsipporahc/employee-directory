/*
* Treehouse Techdegree:
* FSJS Project 5 - Public API Requests
* app.js */
            
const searchContainer = document.querySelector('.search-container'); // search bar
const cards = document.getElementsByClassName('card'); // card div
const modal = document.getElementsByClassName('modal'); // modal div
const closeBtn = document.getElementById('modal-close-btn'); // close btn


/* Search Container to hold search bar */
searchContainer.insertAdjacentHTML('beforeend', `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search Name...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`);

/* Search Bar Functionality*/
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', (e) => {
    let searchValue = e.target.value.toLowerCase();
    let names = document.querySelectorAll('#name');
    names.forEach(name => {
        if (name.textContent.toLowerCase().includes(searchValue)) {
            name.parentNode.parentNode.style.display = 'block';
            } else {
            name.parentNode.parentNode.style.display = 'none';
            }
    })
})