// Adiciona transições suaves ao clicar nos links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.page-button[href]');
    const body = document.body;
    const container = document.querySelector('.container');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Adiciona as classes de transição
            body.classList.add('fade-out');
            container.classList.add('slide-out');
            
            // Aguarda a animação terminar antes de navegar
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});

