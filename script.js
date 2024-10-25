document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const buttons = document.querySelectorAll(".btn-warning");

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Linkin varsayılan davranışını önle
            const imageSrc = this.parentElement.previousElementSibling.src; // Resim kaynağını al
            modalImage.src = imageSrc; // Modalda resmi güncelle
            modal.style.display = "block"; // Modali göster
        });
    });

    // Modalı kapat
    modal.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none"; // Modali gizle
    });

    // Modal dışında bir yere tıklanırsa gizle
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Modali gizle
        }
    });
});


window.addEventListener('scroll', function() {
    var topMenu = document.getElementById('top-menu');
    var navbar = document.getElementById(('navbar-nav'))
    var scrollPosition = window.scrollY;
  
    // Eğer sayfa 100 pikselden fazla kaydırılırsa top-menüyü gizle
    if (scrollPosition > 70) {
      topMenu.classList.add('hidden');
      navbar.classList.add('fixed-top')
    } else {
      topMenu.classList.remove('hidden');
      navbar.classList.remove('fixed-top')
    }
  });

// Scroll top butonunu göstermek/gizlemek için
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block"; // Sayfa kaydırıldığında göster
    } else {
      scrollTopBtn.style.display = "none"; // Sayfanın üstündeyken gizle
    }
  };
  
  // Scroll top butonuna tıklayınca sayfanın yukarı kayması
  document.getElementById("scrollTopBtn").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
