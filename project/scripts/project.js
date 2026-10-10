

document.addEventListener("DOMContentLoaded", () => {

    const heroCtaBtn = document.querySelector(".hero-cta-btn");

    if (heroCtaBtn) {
        // Event Listener para capturar el clic
        heroCtaBtn.addEventListener("click", (event) => {
            // Guardar o actualizar datos en localStorage
            saveUserInterest("Hero CTA Clicked");

            // Opcional: Mostrar un mensaje dinámico o permitir la navegación predeterminada
            console.log("El usuario interactuó con el CTA del Hero.");
        });
    }

    // localStorage 
    function saveUserInterest(actionType) {
        // Recuperar contador previo de interacciones o iniciar en 0
        let ctaClicks = Number(localStorage.getItem("heroCtaClicks")) || 0;
        ctaClicks++;

        // Actualizar valores en localStorage
        localStorage.setItem("heroCtaClicks", ctaClicks);
        localStorage.setItem("lastAction", actionType);
        localStorage.setItem("lastActionTimestamp", new Date().toISOString());

        // Mostrar en consola usando Template Literals
        console.log(`[Analytics] Interacciones acumuladas en Hero: ${ctaClicks}`);
    }

    // Renderizado 
    displayWelcomeBanner();
});

// Objetos, Template Literals y Branching Condicional
function displayWelcomeBanner() {
    const totalClicks = Number(localStorage.getItem("heroCtaClicks")) || 0;
    const heroArticle = document.querySelector(".hero-article");

    // Verificar si el elemento existe y si el usuario ya ha interactuado antes
    if (heroArticle && totalClicks > 0) {
        // Crear un mensaje dinámico persistente
        const badge = document.createElement("div");
        badge.className = "cta-badge";

        // Uso exclusivo de Template Literals
        badge.innerHTML = `<small>✨ ¡Gracias por tu interés! Has explorado nuestra comunidad ${totalClicks}${totalClicks === 1 ? 'vez' : 'veces'}.</small>`;

        // Estilo rápido por JS o mediante CSS
        badge.style.color = "var(--accent-color, #E69A33)";
        badge.style.marginTop = "0.5rem";
        badge.style.fontWeight = "600";

        heroArticle.appendChild(badge);
    }
}



document.getElementById("current-year").textContent = new Date().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;