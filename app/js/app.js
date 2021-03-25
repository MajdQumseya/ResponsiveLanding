
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    console.log('opem hmaburger')


    if (header.classList.contains('open')) { //Close Hamburger Menu
        body.classList.remove('noScroll')
        header.classList.remove('open')
        fadeElements.forEach((element) => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out');
        })

    } else { // Open Hamburger Menu
        body.classList.add('noScroll')
        header.classList.add('open');
        fadeElements.forEach((element) => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')

        })

    }
})