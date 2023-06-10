'use strict';
const changeCurrentButton = () => {
    const containerBtn = document.querySelector('.container__btn');
    const btns = containerBtn.querySelectorAll('.btn');

    containerBtn.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn')) {
            // Remove class 'active'
            btns.forEach(btn => btn.classList.remove('active'));
        }
        // Add class 'active' only one click
        event.target.classList.add('active');
    });
}
changeCurrentButton();

const submit = (event) => {
    event.preventDefault();
    const body = document.querySelector('body');
    const containerBtn = document.querySelector('.container__btn');
    const selectedRating = containerBtn.querySelector('.btn.active');

    if (selectedRating) {
        const container = document.querySelector('.container');
        const containerState = document.createElement('div');
        containerState.classList.add('container-state');

        const selectedId = selectedRating.dataset.id;

        containerState.innerHTML =
            `
            <span class="container-state--icon"></span>
            <p class="container-state__rating">You selected ${selectedId} out of 5</p>
            <h2 class="container-state__heading">Thank you!</h2>
            <p class="container-state__paragraph">
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
        `;

        body.appendChild(containerState);

        // Applies the 'show' class to the state container after a short delay
        setTimeout(() => {
            containerState.classList.add('show');
        }, 10);

        container.style.opacity = '0';

        // Applies the 'show' class to the main container after a short delay
        setTimeout(() => {
            container.style.display = 'none'; // Hides the main container
            container.style.opacity = ''; // Removes the opacity property
            containerState.style.opacity = '';
        }, 500);

    } else {
        alert('Please select a rating before submitting!');
    }
}

document.querySelector('.container--btn-submit').addEventListener('click', submit);