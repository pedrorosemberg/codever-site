document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var menuItems = document.getElementById('menuItems');
    
    menuToggle.addEventListener('click', function() {
        menuItems.classList.toggle('show');
    });

    // Adiciona rolagem suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, { passive: true });
    });
});

const csp = "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
        const metaCsp = document.createElement('meta');
        metaCsp.httpsEquiv = "Content-Security-Policy";
        metaCsp.content = csp;
        document.head.appendChild(metaCsp);        
        document.addEventListener('DOMContentLoaded', function() {
            var menuToggle = document.getElementById('menuToggle');
            var menuItems = document.getElementById('menuItems');
            
            menuToggle.addEventListener('click', function() {
                menuItems.classList.toggle('show');
            });

            // Adiciona rolagem suave para os links do menu
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    var target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }

                    // Fecha o menu móvel após clicar em um item
                    if (window.innerWidth <= 768) {
                        menuItems.classList.remove('show');
                    }
                }, { passive: true }); // Listener marcado como passive
            });
        }, { passive: true }); // Listener marcado como passive
