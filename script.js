document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-btn");
    const coverSlide = document.getElementById("cover");
    const appContainer = document.getElementById("app-container");

    openBtn.addEventListener("click", () => {
        // Animación de desvanecimiento
        coverSlide.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        coverSlide.style.opacity = "0";
        coverSlide.style.transform = "translateY(-20px)";

        // Después de la animación, ocultar la portada y habilitar el scroll
        setTimeout(() => {
            coverSlide.style.display = "none";
            appContainer.style.overflowY = "scroll";
        }, 800);
    });

    // Evitar que el formulario recargue la página (por ahora)
    const form = document.getElementById("rsvp-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Confirmación enviada con éxito!");
        });
    }
});