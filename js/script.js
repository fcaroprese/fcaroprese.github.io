document.addEventListener('DOMContentLoaded', () => {

 
    ScrollReveal().reveal('.reveal', {
        distance: '60px',
        duration: 1200,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        interval: 150,
        origin: 'bottom',
        opacity: 0
    });

   
    document.addEventListener('mousemove', (e) => {
        const blob = document.querySelector('.blob');
        if (blob) {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            blob.style.left = `${x / 2 - 10}%`;
            blob.style.top = `${y / 2 - 10}%`;
        }
    });

    console.log("%cFrancesco Caroprese Portfolio - Status: Online 🚀", "color: #38bdf8; font-size: 20px; font-weight: bold;");
});