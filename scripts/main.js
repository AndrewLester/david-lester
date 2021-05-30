const navItems = document.querySelectorAll('nav a');
for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].href.endsWith(window.location.pathname)) {
        navItems[i].className = 'active';
    }
}
