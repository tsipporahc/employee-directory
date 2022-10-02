
/* FETCH FUNCTIONS */
fetch ('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        return data.results})
    
    .then(generateEmail)

 // returns data of only one employee

/* HELPER FUNCTIONS */

function generateEmail(data) {
    for (let i =0; i<data.length; i++) {
    data.map(employee => {
        console.log(employee.location.city);

        const email = document.querySelectorAll('[class$=text]');
        email[i].innerHTML = `${employee.email}`;
        console.log(email[i].innerHTML);
        
        const name = document.querySelector('#name');
        name.innerHTML = `${employee.name.first} ${employee.name.last}`;
        
        const location = document.querySelector('.card-text.cap');
        location.innerHTML = `${employee.location.city}, ${employee.location.state}`;
        
        const img = document.querySelector('.card-img');
        img.src = `${employee.picture.thumbnail}`;
    })
    }

}

