
/* FETCH FUNCTIONS */
//async function fetchData (url) {
fetch ('https://randomuser.me/api/?results=12&nat=US')
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        const dataResultsArray = data.results;
        generateCard(dataResultsArray);
        generateModal(dataResultsArray)

})
//}

/* Promise.all([
    fetchData ('https://randomuser.me/api/?results=12&nat=US')
])  */


/* HELPER FUNCTIONS */

// display cards with employee info
function generateCard(data) {
    console.log(data);
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

// display employee info on modal
function generateModal(data) {
    console.log(data);

    data.map(employee => {
        let employeeDOB = employee.dob.date;
        let date = new Date(employeeDOB);
        let dobMonth = date.getMonth() + 1;
        let dobDate = date.getDate(); // put zero in front
        let dobYear = date.getFullYear();

        if (dobMonth < 10) {
            dobMonth = '0' + dobMonth;
        }

        if (dobDate < 10) {
            dobDate = '0' + dobDate;
        }

        const bodyContainer = document.querySelector('body');
        const modalContainer = document.querySelector('.modal-container');
        modalContainer.insertAdjacentHTML('afterbegin', `
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${employee.picture.medium}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                        <p class="modal-text">${employee.email}</p>
                        <p class="modal-text cap">${employee.location.city}, ${employee.location.state}</p>
                        <hr>
                        <p class="modal-text">${employee.cell}</p>
                        <p class="modal-text">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
                        <p class="modal-text">Birthday: ${dobMonth}/${dobDate}/${dobYear}</p>
                    </div>
                </div> 
                  
            `);
            bodyContainer.appendChild(modalContainer);            
        
    })
    


}





