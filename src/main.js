const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenu = document.getElementById('ct-toggle-top-menu');

document.addEventListener('click', (e) => {
    if (toggleTopMenu.contains(e.target)) {
        //click to toggle top menu icon
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-top-menu-expanded')
    } else {
        //click outside from toggle top menu
        if (topMenu.classList.contains('ct-top-menu-expanded')) {
            topMenu.classList.remove('ct-top-menu-expanded');
            topMenu.classList.add('hidden');
        }
    }
})