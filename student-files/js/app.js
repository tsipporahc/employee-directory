            // variables //
            const searchContainer = document.querySelector('.search-container'); // search bar
            const bodyContainer = document.querySelector('body'); //body
            const modalContainer = document.createElement('div'); // modal div
            const galleryContainer = document.querySelector('#gallery'); // gallery div
            const cards = document.getElementsByClassName('card'); // card div
            const modal = document.getElementsByClassName('modal'); // modal div
            const closeBtn = document.getElementById('modal-close-btn'); // close btn


        /* Search Container to hold search bar */
            searchContainer.insertAdjacentHTML('beforeend', `
            <form action="#" method="get">
                <input type="search" id="search-input" class="search-input" placeholder="Search...">
                <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
            </form>`);

            const searchInput = document.getElementById('search-input');

            searchInput.addEventListener('keyup', (e) => {
                let searchValue = e.target.value.toLowerCase();
                console.log(searchValue);
                let names = document.querySelectorAll('#name');
                console.log(names);
                names.forEach(name => {
                    if (name.textContent.toLowerCase().includes(searchValue)) {
                        name.parentNode.parentNode.style.display = 'block';
                    } else {
                        name.parentNode.parentNode.style.display = 'none';
                    }
                })
            })
  
            
    
       /* Setting Modal Container to hold modal popups */
       modalContainer.className = 'modal-container';
       modalContainer.style.display = 'none';
       modalContainer.insertAdjacentHTML('beforeend', '');
       bodyContainer.appendChild(modalContainer);

        /* Navigation Button */
       modalContainer.insertAdjacentHTML('beforeend', `
        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
        `);




        /* EVENT LISTENERS */

        // click listener on gallery that selects a card and shows matching modal //
        galleryContainer.addEventListener('click',  (e) => {
            if (e.target !== galleryContainer) {
                const clickedCard = e.target.closest('.card');
                
                clickedCard.setAttribute('Selected', '');
                modalContainer.style.display = '';

                for (let i =0; i< cards.length; i++) { 
                    if(cards[i].hasAttribute('Selected')) {
                    modal[i].style.display = 'block';
                    modal[i].setAttribute('Selected', '');
                    clickedCard.removeAttribute('Selected');
                    } else {
                    modal[i].style.display = 'none';
                    }
                }
            }

        })



                /* Navigation Buttons Functionality */
                const prevBtn = document.getElementById('modal-prev');
                const nextBtn = document.getElementById('modal-next');
    
                const modalBtnContainer = document.querySelector('.modal-btn-container');
    
                modalBtnContainer.addEventListener('click', (e) => {
                console.log(e);
                    if (e.target == prevBtn) {
                        for (let i=0; i<modal.length; i++) {
                            if (modal[i].hasAttribute('Selected')) {
                                modal[i].style.display = 'none';
                                modal[i].removeAttribute('Selected','');
                                console.log(i);

                                i -= 1;
                                modal[i].style.display = 'block';
                                modal[i].setAttribute('Selected','');
                                console.log(modal[i]);
                                console.log(i);
                                return i;
                            }

                                if (i=0) {
                                    modal[i + 10].style.display = 'block';
                                    modal[i].setAttribute('Selected','');

                                } 
                                
                            
                        }
                    }  


                    if (e.target == nextBtn) {
                        for (let i=0; i<modal.length; i++) {
                            if (modal[i].hasAttribute('Selected')) {
                                modal[i].style.display = 'none';
                                modal[i + 1].style.display = 'block';
                                modal[i + 1].setAttribute('Selected','');
                            }
                        }
                    } 
    
                })

        


            
        // close button on modal // 
        modalContainer.addEventListener('click', (e) => {
            if (e.target.closest('.modal-close-btn')) {
                modalContainer.style.display = "none";
                }
            })

            

   
        // close modal by clicking outside of modal //
        window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none'; 
            }
        })