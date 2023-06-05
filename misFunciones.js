/**
 * Calcula la velocidad, distancia o tiempo del MRU.
 * @param {string} id de los inputs de velocidad, tiempo, y distancia
 * @param {number} valor de velocidad, tiempo y distancia
 * @return {number} El valor de la velocidad, distancia o tiempo calculado.
 */
function calcularMRU() {
    const cal = document.getElementById("calcular").value;
    const dis = document.getElementById("distancia");
    const tie = document.getElementById("tiempo");
    const vel = document.getElementById("velocidad");
    let resultado;

    if (isNaN(dis.value) || isNaN(tie.value) || isNaN(vel.value)) {
        alert("Se agregó un valor inválido. Por favor, ingresa números válidos.");
        dis.value = "";
        tie.value = "";
        vel.value = "";
    } else {
        if (cal === "velocidad") {
            resultado = dis.value / tie.value;
        } else if (cal === "tiempo") {
            resultado = dis.value / vel.value;
        } else if (cal === "distancia") {
            resultado = vel.value * tie.value;
        }
        document.getElementById("resul").value = "El resultado es: " + resultado;
    }
}


function deshabilitarCampos() {
    const cal = document.getElementById("calcular").value;
    const dis = document.getElementById("distancia");
    const tie = document.getElementById("tiempo");
    const vel = document.getElementById("velocidad");

    dis.disabled = cal === "distancia";
    tie.disabled = cal === "tiempo";
    vel.disabled = cal === "velocidad";
}

let x = 0;

function auto() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "imagenes/auto.png";

    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas en cada cuadro de animación
        ctx.drawImage(img, x, 100);
    };
}
