function AppearFromTop() {
    let container = document.querySelector(".container");

    container.classList.add('appear-top');
    container.addEventListener('animationend', () => {
        container.classList.remove('appear-top');
    })
};

function AppearFromLeft() {
    let card_remy = document.querySelector('.card.remy');

    card_remy.classList.add('appear-left');
    card_remy.addEventListener('animationend', () => {
        card_remy.classList.remove('appear-left');
    })
};

function AppearFromRight() {
    let card_sophie = document.querySelector('.card.sophie');

    card_sophie.classList.add('appear-right');
    card_sophie.addEventListener('animationend', () => {
        card_sophie.classList.remove('appear-right');
    })
};

function FadeOut(e) {
    let image = document.getElementById(e);

    image.style.transition = '.5s ease-out';
}