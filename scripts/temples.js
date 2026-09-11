const mainNav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");

hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedP = document.querySelector("#lastModified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;