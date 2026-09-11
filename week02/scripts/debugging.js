const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

// const area = 3;
// const PI = 3.14159;

let radius = 10;
let area = Math.PI * radius **2;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = Math.PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;