


/* FETCH FUNCTIONS */
fetch ('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        return data.results})
    
    .then(generateCard)
    //.then(generateModal)

 // returns data of only one employee

/* HELPER FUNCTIONS */

function generateCard(data) {
    data.map(employee => {
        const galleryContainer = document.querySelector('#gallery');
        galleryContainer.insertAdjacentHTML('beforeend', `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${employee.picture.thumbnail}" alt="profile picture">
            </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                    
                    <p class="card-text">${employee.email}</p>
                    <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
                </div>
            </div>`); 
    })

}

/* function generateModal(data) {
    data.map(employee => {
        console.log(employee.name.first)
        
        const bodyContainer = document.querySelector('body');
            const modalContainer = document.createElement('div');
            modalContainer.className = 'modal-container';
            modalContainer.style.display = 'none';
            modalContainer.insertAdjacentHTML('beforeend', `
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
            `);
            bodyContainer.appendChild(modalContainer);
        

    })

} */


