/**
 * Скрипт для скролла блока id="navbar"
 * Плавное анимировоное появление после > 400 px скрола страницы в низ
 */

window.addEventListener('scroll', e => {
    // 	Переменные блока меню id="navbar и динамический класс navbar__scrolled"
    let navbar = document.getElementById('navbar').classList
    let active__class = 'navbar__scrolled'

    // 	Переменные вспомогательного блока id="assistantNavbar и динамический класс assistantNavbar__scrolled"
    let assistantNavbar = document.getElementById('assistantNavbar').classList
    let active__class_assistantNavbar = 'assistantNavbar__scrolled'

    // 	Скрипт для скролла блока id="navbar"
    if (scrollY > 400) navbar.add(active__class), assistantNavbar.add(active__class_assistantNavbar)
    else navbar.remove(active__class), assistantNavbar.remove(active__class_assistantNavbar)
})