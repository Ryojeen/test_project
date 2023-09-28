window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile_menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'), 
    button = document.getElementById('language'),
    buttonSpan = document.querySelector('button>span');

    function lang(){
        buttonSpan.innerHTML = (buttonSpan.innerHTML === 'EN') ? buttonSpan.innerHTML = 'RU' : buttonSpan.innerHTML = 'EN';
        if (buttonSpan.innerHTML === 'RU') {
            document.documentElement.setAttribute('lang','ru');
        } else {
            document.documentElement.setAttribute('lang','en');
        }
    }
    button.onclick = lang;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mobile_menu_active');
        })
    })
})