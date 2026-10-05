const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {

    hamburger.addEventListener('click', () => {

        menu.classList.toggle('active');

        hamburger.innerHTML =
            menu.classList.contains('active')
            ? '✕'
            : '☰';

    });

    document.querySelectorAll('#menu a').forEach(link => {

        link.addEventListener('click', () => {

            menu.classList.remove('active');

            hamburger.innerHTML = '☰';

        });

    });

    document.addEventListener('click', (e) => {

        const clicouMenu = menu.contains(e.target);
        const clicouHamburger = hamburger.contains(e.target);

        if (!clicouMenu && !clicouHamburger) {

            menu.classList.remove('active');

            hamburger.innerHTML = '☰';

        }

    });

}