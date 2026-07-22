/* ========================================
   NAVBAR HAMBURGER MENU
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    hamburger.classList.remove('active');
                }
            }
        });
        
        // Close menu on link click (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('open');
                    hamburger.classList.remove('active');
                }
            });
        });
    }
});

/* ========================================
   SMOOTH SCROLL
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ========================================
   ANIMATION ON SCROLL (Optional)
   ======================================== */
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.stat-card, .umkm-card, .galeri-item, .profil-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
};

// Jalankan animasi
animateOnScroll();

/* ========================================
   BACK TO TOP (Optional)
   ======================================== */
// Buat tombol back to top jika ingin menambahkannya