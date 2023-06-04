/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function calcular() {
    const calculo = document.getElementById("calcular").value;
    const distancia = document.getElementById("distancia").value;
    const tiempo = document.getElementById("tiempo").value;
    const velocidad = document.getElementById("velocidad").value;

    if (!isNaN(distancia) && !isNaN(tiempo) && !isNaN(velocidad)) {
        let resultado;

        if (calculo == "velocidad") {
            if (distancia === "" || tiempo === "") {
                alert("Por favor, ingresa los valores de distancia y tiempo.");
            } else {
                resultado = distancia / tiempo;
                document.getElementById("resul").value = `La velocidad es: ${resultado} m/s`;
            }
        } else if (calculo == "tiempo") {
            if (distancia === "" || velocidad === "") {
                alert("Por favor, ingresa los valores de distancia y velocidad.");
            } else {
                resultado = distancia / velocidad;
                document.getElementById("resul").value = `El tiempo es: ${resultado} s`;
            }
        } else if (calculo == "distancia") {
            if (velocidad === "" || tiempo === "") {
                alert("Por favor, ingresa los valores de velocidad y tiempo.");
            } else {
                resultado = velocidad * tiempo;
                document.getElementById("resul").value = `La distancia es: ${resultado} m`;
            }
        } else {
            alert("Por favor, elige una opción válida.");
        }
    } else {
        alert("Por favor, ingresa valores numéricos para velocidad, tiempo y distancia.");
    }
}

let x = 0;
const dx = 2;
function animarAuto() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, x, 100);
    };

    if (x > canvas.width) {
        x = 0;
    }
    x += dx;
}
