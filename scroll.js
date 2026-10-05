const HEADER_OFFSET = 100;

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            HEADER_OFFSET;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

    });

});