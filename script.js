// Menüyü açma/kapama işlevi
function toggleMenu() {
    const sidebar = document.getElementById('sidebar'); // Yan menüyü seçer
    const mainContent = document.getElementById('main-content'); // Ana içeriği seçer
    const openMenuBtn = document.getElementById('open-menu'); // Menü açma butonunu seçer

    // Yan menü açık mı kontrol eder
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show'); // Yan menüyü kapatır
        mainContent.style.marginLeft = '0'; // Ana içeriği sola kaydırır
        openMenuBtn.style.display = 'block'; // Menü açma butonunu gösterir
    } else {
        sidebar.classList.add('show'); // Yan menüyü açar
        mainContent.style.marginLeft = '250px'; // Ana içeriği sağa kaydırır
        openMenuBtn.style.display = 'none'; // Menü açma butonunu gizler
    }
}

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar nav ul li a'); // Yan menüdeki bağlantıları seçer
    const sections = document.querySelectorAll('section'); // Tüm bölümleri seçer

    // Bölüme kaydırma işlevi
    function scrollToSection(event) {
        event.preventDefault(); // Varsayılan bağlantı davranışını engeller

        const targetId = event.currentTarget.getAttribute('href').substring(1); // Hedef bölümün ID'sini alır
        const targetSection = document.getElementById(targetId); // Hedef bölümü seçer

        // Hedef bölüme yumuşak kaydırma yapar
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        toggleMenu(); // Menüyü kapatır
    }

    // Her bağlantıya tıklama olayı ekler
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});

// ID'ye göre bölüme kaydırma işlevi
function scrollToSection(id) {
    const targetSection = document.getElementById(id); // Hedef bölümü seçer

    // Hedef bölüme yumuşak kaydırma yapar
    window.scrollTo({
        top: targetSection.offsetTop - 50, // Üstten 50 piksel boşluk bırakır
        behavior: 'smooth'
    });
}

// İletişim formu gönderildiğinde çalışacak kodlar
document.getElementById('iletisim-formu').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderme davranışını engeller
    alert('Mesajınız başarıyla gönderildi!'); // Başarı mesajı gösterir
    this.reset(); // Formu sıfırlar
});