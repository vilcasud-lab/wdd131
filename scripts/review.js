document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtener el número actual de localStorage
    let numReviews = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

    // 2. Suma 1
    numReviews++;

    // 3. Guardar el en localStorage
    localStorage.setItem("reviewCount-ls", numReviews);

    // 4. Mostrar el número actualizado en el HTML
    const countDisplay = document.querySelector("#reviewCount");
    if (countDisplay) {
        countDisplay.textContent = numReviews;
    }

    // Pie de página
    const yearSpan = document.querySelector("#currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.querySelector("#lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
});