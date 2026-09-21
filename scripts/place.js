
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const tempCelsius = 20; // 20 °C
const windSpeedKmH = 13; // 13 km/h

const calculateWindChill = (temp, speed) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

const windChillElement = document.getElementById("chill");

//  Temperatura <= 10 °C Y Velocidad del viento > 4.8 km/h
if (tempCelsius <= 10 && windSpeedKmH > 4.8) {
    windChillElement.textContent = `${calculateWindChill(tempCelsius, windSpeedKmH)} °C`;
} else {
    // Si no cumple las condiciones (como ocurre con 20 °C), muestra "N/A"
    windChillElement.textContent = "N/A";
}