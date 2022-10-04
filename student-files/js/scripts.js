/*
* Treehouse Techdegree:
* FSJS Project 5 - Public API Requests
* scripts.js */

const bodyContainer = document.querySelector('body');
const modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
modalContainer.style.display = 'none';
modalContainer.insertAdjacentHTML('beforeend', '');
bodyContainer.appendChild(modalContainer);

/* FETCH FUNCTIONS
 * fetch random employee data through API request
 */
async function fetchData (url) {
fetch (url)
    .then(response => response.json())
    .then(data => {
        const dataResultsArray = data.results;
        generateModal(dataResultsArray)
        generateCard(dataResultsArray)
        generateButtons()
        

})
}

 Promise.all([
    fetchData ('https://randomuser.me/api/?results=12&nat=US')
])  


/* HELPER FUNCTIONS */

/* Generate Employee Cards 
 * display cards with employee info on page
 * @param {array of objects} data - emplyoyee data
 * @param {array of objects} employee - employee data
 */
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


/* Generate Modal Popup 
 * display employee info on modal
 * @param {array of objects} data - emplyoyee data
 * @param {array of objects} employee - employee data 
 */
function generateModal(data) {

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


               //Setting Modal Container to hold modal popups
               const modalContainer = document.querySelector('.modal-container');
               modalContainer.insertAdjacentHTML('beforeend', `
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

    /* EVENT LISTENERS */

    // close button on modal // 
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.addEventListener('click', (e) => {
        if (e.target.closest('.modal-close-btn')) {
            modalContainer.style.display = "none";

            for (let i =0; i<modal.length; i++) {
                modal[i].removeAttribute('Selected','');
                modal[i].style.display = 'none';
                cards[i].removeAttribute('Selected','');
                }
        }
    })

    // close modal by clicking outside of modal //
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
                modalContainer.style.display = 'none';

                for (let i =0; i<modal.length; i++) {
                modal[i].removeAttribute('Selected','');
                modal[i].style.display = 'none';
                cards[i].removeAttribute('Selected','');


                }
            }
        })

}




/* Generate Navigation Buttons
 * display previous and next buttons on modal
*/

function generateButtons() { 
    modalContainer.insertAdjacentHTML('beforeend', `
        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div> 
    `);


    /* EVENT LISTENERS */

        /* click listener on gallery that selects a card and shows matching modal */
        const galleryContainer = document.querySelector('#gallery'); // gallery div
        const prevBtn = document.getElementById('modal-prev');
        const nextBtn = document.getElementById('modal-next');
        galleryContainer.addEventListener('click',  (e) => {
            prevBtn.style.visibility = 'visible';
            nextBtn.style.visibility = 'visible';
            if (e.target !== galleryContainer) {
                const clickedCard = e.target.closest('.card');
                const modalContainer = document.querySelector('.modal-container');
                clickedCard.setAttribute('Selected', '');
                modalContainer.style.display = '';

                for (let i =0; i< cards.length; i++) { 
                    if(cards[i].hasAttribute('Selected')) {
                    modal[i].style.display = 'block';
                    modal[i].setAttribute('Selected', '');
                    //clickedCard.removeAttribute('Selected');
                    } else {
                    modal[i].style.display = 'none';
                    }
                }
            }

        }) // end of gallery event listener



        /* Button Functionality */
        const modalBtnContainer = document.querySelector('.modal-btn-container');
        
        modalBtnContainer.addEventListener('click', (e) => {
            
            if (e.target == prevBtn) {
                nextBtn.style.visibility = 'visible';
                for (let i=0; i<modal.length; i++) {
        
                    if (modal[i].hasAttribute('Selected')) {
                        modal[i].removeAttribute('Selected','');
                        modal[i].style.display = 'none';
                        cards[i].removeAttribute('Selected');
                            
                            if (i > 1 ) {

                            modal[i-1].style.display = 'block';
                            modal[i-1].setAttribute('Selected','');
                            } else {
                                modal[0].style.display = 'block';
                                modal[0].setAttribute('Selected','');
                                prevBtn.style.visibility = 'hidden';
                            }   
                    }  
                }
            }  


            if (e.target == nextBtn) {
                prevBtn.style.visibility = 'visible'; 
                for (let i=0; i<modal.length; i++) {
                    if (modal[i].hasAttribute('Selected')) {
                        modal[i].removeAttribute('Selected','');
                        modal[i].style.display = 'none';
                        cards[i].removeAttribute('Selected');
                        i += 1;                            

                        if (i <= 10 ) {
                            modal[i].style.display = 'block';
                            modal[i].setAttribute('Selected','');
                            } else {
                                console.log('do something');
                                modal[11].style.display = 'block';
                                modal[11].setAttribute('Selected','');
                                nextBtn.style.visibility = 'hidden';
                        }                        
                    }  
                }
            }    
        })

} 













