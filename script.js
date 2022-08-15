let openMenuBttn = document.querySelector(".openMenu")
let closeMenuBttn = document.querySelector("#closeMenu")
let backToTopBttn = document.querySelector('#backToTopBttn')
let navigation = document.querySelector('.navBar')

openMenuBttn.addEventListener('click', openMenu);
closeMenuBttn.addEventListener('click', closeMenu);
window.addEventListener('scroll', showBackToTopBttn, navigationScroll)

function openMenu() {
    document.body.classList.add('showMenu')
}

function closeMenu() {
    document.body.classList.remove('showMenu')
}

function showBackToTopBttn() {
    if (scrollY > 400) {
        backToTopBttn.classList.add("active")
        console.log(scrollY)
    } else {
        backToTopBttn.classList.remove("active")
    }
}

function navigationScroll() {
    while (scrollY > 573) {
        navigation.classList.add('scroll')
    }
}