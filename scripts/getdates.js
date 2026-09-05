// 1. Obtener el año actual e inyectarlo en el span con id "currentyear"
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// 2. Obtener la última fecha de modificación del documento e inyectarla en el párrafo con id "lastModified"
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;