function AppearFromTop() {
    let container = document.getElementsByClassName('container');

    for (let i = 0; i < container.length; i++) {
        container[i].style.animation = 'none';

        setTimeout(function () {
            container[i].style.animation = 'appear-from-top 2s ease';
        }, 100);
    }
};

function AppearFromLeft() {
    let card_remy = document.getElementsByClassName('card remy');

    for (let i = 0; i < card_remy.length; i++) {
        card_remy[i].style.animation = 'none';

        setTimeout(function () {
            card_remy[i].style.animation = 'appear-from-left 2s ease';
        }, 100);
    }
};

function AppearFromRight() {
    let card_sophie = document.getElementsByClassName('card sophie');

    for (let i = 0; i < card_sophie.length; i++) {
        card_sophie[i].style.animation = 'none';

        setTimeout(function () {
            card_sophie[i].style.animation = 'appear-from-right 2s ease';
        }, 100);
    }
};

function FadeOut(e) {
    let image = document.getElementById(e);

    image.style.transition = '.5s ease-out';
}