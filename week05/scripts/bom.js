const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

// Obtiene y convierte el texto JSON guardado en localStorage a un arreglo de JS
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Guarda el arreglo actualizado de capítulos convirtiéndolo a texto JSON
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Renderiza la lista en el DOM cuando la página carga por primera vez
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    li.append(deletebutton);
    list.append(li);

    // Evento para eliminar un capítulo
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item); // Pasa el valor exacto del capítulo
        input.focus();
    });
}

// Elimina el capítulo del arreglo chaptersArray y actualiza localStorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);          // Muestra el capítulo en pantalla
        chaptersArray.push(input.value);   // Agrega el nuevo elemento al arreglo
        setChapterList();                  // Guarda en localStorage
        input.value = '';                  // Limpia el campo de texto
        input.focus();                     // Mantiene el foco en el input
    }
});