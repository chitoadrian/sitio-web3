// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de transparencia del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animaciones al hacer scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.travel-card, .lifestyle-card, .showcase-item, .review-card');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Funcionalidad del formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Simular envío
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = '¡Mensaje Enviado!';
        submitBtn.style.background = '#27ae60';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            this.reset();
        }, 2000);
    }, 1500);
});

// Funcionalidad del newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    
    if (email) {
        submitBtn.textContent = 'Suscribiendo...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = '¡Suscrito!';
            submitBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                this.reset();
            }, 2000);
        }, 1500);
    }
});

// Efecto parallax suave en el hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Funcionalidad de las tarjetas de viaje (efecto hover mejorado)
document.querySelectorAll('.travel-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Funcionalidad de las estrellas de calificación (interactivas)
document.querySelectorAll('.rating').forEach(rating => {
    const stars = rating.querySelectorAll('i');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Remover todas las clases
            stars.forEach(s => {
                s.classList.remove('fas');
                s.classList.add('far');
            });
            
            // Añadir clases hasta el índice clickeado
            for (let i = 0; i <= index; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
            }
        });
        
        star.addEventListener('mouseenter', function() {
            // Resaltar estrellas al hacer hover
            for (let i = 0; i <= index; i++) {
                stars[i].style.color = '#f39c12';
            }
        });
        
        star.addEventListener('mouseleave', function() {
            // Restaurar color original
            stars.forEach(s => {
                s.style.color = '';
            });
        });
    });
});

// Funcionalidad de búsqueda (simulada)
function createSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar artículos...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        padding: 0.8rem 1rem;
        border: 2px solid #e9ecef;
        border-radius: 25px;
        font-size: 1rem;
        width: 250px;
        margin: 0 1rem;
        transition: all 0.3s ease;
    `;
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.insertBefore(searchInput, navContainer.lastElementChild);
    
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#f39c12';
        this.style.boxShadow = '0 0 10px rgba(243, 156, 18, 0.3)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#e9ecef';
        this.style.boxShadow = 'none';
    });
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.travel-card, .lifestyle-card, .showcase-item');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = searchTerm ? 'none' : 'block';
            }
        });
    });
}

// Crear funcionalidad de búsqueda cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Solo añadir búsqueda en pantallas grandes
    if (window.innerWidth > 768) {
        createSearchFunctionality();
    }
});

// Funcionalidad de "Leer más" en las tarjetas
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const card = this.closest('.travel-card');
        const content = card.querySelector('p');
        const originalText = content.textContent;
        const expandedText = originalText + ' Aquí encontrarás información detallada sobre este destino, incluyendo mejores épocas para visitar, lugares imprescindibles, consejos de transporte y recomendaciones gastronómicas. ¡Prepárate para una experiencia única!';
        
        if (this.textContent === 'Leer más') {
            content.textContent = expandedText;
            this.textContent = 'Leer menos';
        } else {
            content.textContent = originalText;
            this.textContent = 'Leer más';
        }
    });
});

// Funcionalidad de modo oscuro (opcional)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'dark-mode-toggle';
    toggle.style.cssText = `
        background: none;
        border: none;
        font-size: 1.2rem;
        color: var(--primary-color);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
    `;
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.insertBefore(toggle, navContainer.lastElementChild);
    
    toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            this.style.color = '#f39c12';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            this.style.color = 'var(--primary-color)';
        }
    });
}

// Crear toggle de modo oscuro
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        createDarkModeToggle();
    }
});

// Funcionalidad de carrusel para imágenes (simulada)
function createImageCarousel() {
    const heroImage = document.querySelector('.image-placeholder');
    const images = [
        '<i class="fas fa-mountain-sun"></i>',
        '<i class="fas fa-city"></i>',
        '<i class="fas fa-umbrella-beach"></i>',
        '<i class="fas fa-plane"></i>'
    ];
    
    let currentImage = 0;
    
    setInterval(() => {
        currentImage = (currentImage + 1) % images.length;
        heroImage.innerHTML = images[currentImage];
        
        // Efecto de transición
        heroImage.style.opacity = '0';
        setTimeout(() => {
            heroImage.style.opacity = '1';
        }, 300);
    }, 4000);
}

// Iniciar carrusel de imágenes
document.addEventListener('DOMContentLoaded', function() {
    createImageCarousel();
});

// Funcionalidad de contador de visitas (simulada)
function updateVisitorCount() {
    const count = Math.floor(Math.random() * 1000) + 500;
    const visitorElement = document.createElement('div');
    visitorElement.className = 'visitor-count';
    visitorElement.innerHTML = `<i class="fas fa-eye"></i> ${count} visitantes hoy`;
    visitorElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        box-shadow: var(--shadow-medium);
        z-index: 1000;
        animation: fadeInUp 0.5s ease;
    `;
    
    document.body.appendChild(visitorElement);
    
    // Actualizar contador cada 30 segundos
    setInterval(() => {
        const newCount = Math.floor(Math.random() * 100) + count;
        visitorElement.innerHTML = `<i class="fas fa-eye"></i> ${newCount} visitantes hoy`;
    }, 30000);
}

// Crear contador de visitas
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateVisitorCount, 2000);
});

// Funcionalidad de scroll to top
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: var(--shadow-medium);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Funcionalidad del botón
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Crear botón de scroll to top
document.addEventListener('DOMContentLoaded', function() {
    createScrollToTop();
});
