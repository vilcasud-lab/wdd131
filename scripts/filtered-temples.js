const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 128325,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfjAIc1bO_KUeeW79XeMz2wo6mnKK9OoX3rzTAvJi0qqlM2TR0BsLf4g&s=10"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAVCk33lLfpuXpOrTjRYqvfLFUOnzivsomrv2iqSkS8bA-QndrYGzlqs&s=10"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/33e19ea3cba5f4aa250fab5e170af503d7bf667f/full/800%2C/0/default"
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California, United States",
    dedicated: "1964, November, 17",
    area: 95000,
    imageUrl:"https://newsroom.churchofjesuschrist.org/media/960x540/Oakland-California-Temple1b.jpg"
    
  },
];


//  Elementos del DOM
const container = document.querySelector(".res-grid");
const heading = document.querySelector("main h2");
const mainNav = document.querySelector(".navigation");
const hamburgerButton = document.querySelector("#menu");

//  Función para renderizar tarjetas
function createTempleCard(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

// Renderizado inicial
createTempleCard(temples);

// Lógica de Menú Hamburguesa (Móvil)
hamburgerButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  hamburgerButton.classList.toggle("open");
});

// Event Listeners para los enlaces de navegación (Filtros)
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que la página recargue o salte por el atributo href="#"
    
    const filter = link.textContent.trim();
    heading.textContent = filter;

    switch (filter) {
      case "Old":
        createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
        break;
      case "New":
        createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
        break;
      case "Large":
        createTempleCard(temples.filter(t => t.area > 90000));
        break;
      case "Small":
        createTempleCard(temples.filter(t => t.area < 10000));
        break;
      default:
        createTempleCard(temples);
        break;
    }
  });
});


document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;