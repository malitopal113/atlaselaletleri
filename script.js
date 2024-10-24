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



