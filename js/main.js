if (document.documentElement.clientWidth < 992) {

} else {

}
const menu = document.querySelectorAll('.menu_link');
const MenuClose = document.querySelectorAll('.menu_item_link');
for ( let i = 0; i < menu.length; i++ ) {
    const subMenu = menu[i].nextElementSibling;
    menu[i].addEventListener('click', () => {
        subMenu.classList.add('open');
    });
    MenuClose[i].addEventListener('click', () => {
        subMenu.classList.remove('open');
    });
}

const accordions = document.querySelectorAll('.submenu');
for (const accordion of accordions) {
    const panels = accordion.querySelectorAll('.submenu_item');
    for (const panel of panels) {
        const head = panel.querySelector('.submenu_item_link');
        head.addEventListener('click', () => {
            for (const otherPanel of panels) {
                if (otherPanel !== panel) {
                    otherPanel.classList.remove('submenu_open');
                }
            }
            panel.classList.toggle('submenu_open');
        });
    }
}


