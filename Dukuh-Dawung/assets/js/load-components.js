// ==========================================
// LOAD NAVBAR & FOOTER
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // Load Navbar
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Navbar tidak ditemukan: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            setActiveMenu();
            initHamburger();
            console.log('✅ Navbar berhasil di-load');
        })
        .catch(error => {
            console.error('❌ Error loading navbar:', error);
        });

    // Load Footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Footer tidak ditemukan: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            console.log('✅ Footer berhasil di-load');
        })
        .catch(error => {
            console.error('❌ Error loading footer:', error);
        });
});

// ==========================================
// SET ACTIVE MENU
// ==========================================
function setActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const menuMap = {
        'index.html': 'navBeranda',
        'profil.html': 'navProfil',
        'kondisi.html': 'navKondisi',
        'sarana.html': 'navSarana',
        'kegiatan.html': 'navKegiatan',
        'organisasi.html': 'navOrganisasi',
        'potensi.html': 'navPotensi',
        'umkm.html': 'navUmkm',
        'data_penduduk.html': 'navDataPenduduk',
        'permasalahan.html': 'navMasalah'
    };
    
    const menuId = menuMap[currentPage];
    if (menuId) {
        const menuItem = document.getElementById(menuId);
        if (menuItem) {
            menuItem.classList.add('active');
        }
    }
}

// ==========================================
// INIT HAMBURGER MENU
// ==========================================
function initHamburger() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    hamburger.classList.remove('active');
                }
            }
        });
    }
}