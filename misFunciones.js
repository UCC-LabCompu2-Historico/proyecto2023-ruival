/**
 * Calculo de MRU de velocidad, tiempo y distancia
 * @method calcular
 * @param {string}  id - de los inputs de velocidad, distancia y tiempo
 * @param {number} valor - de velocidad, distancia y tiempo
 * @return {number} valor - de velocidad, distancia o tiempo
 */
function calcular() {
    const cal = document.getElementById("calcular").value;
    const dis = document.getElementById("distancia");
    const tie = document.getElementById("tiempo");
    const vel = document.getElementById("velocidad").value;

    if (!isNaN(dis.value) && !isNaN(tie.value) && !isNaN(vel)) {
        let resultado;

        if (cal === "velocidad") {
            resultado = dis.value / tie.value;
            document.getElementById("resul").innerHTML = `La velocidad es: ${resultado} m/s`;
            dis.disabled = false;
            tie.disabled = false;
        } else if (cal === "tiempo") {
            resultado = dis.value / vel;
            document.getElementById("resul").innerHTML = `El tiempo es: ${resultado} s`;
            dis.disabled = false;
            tie.disabled = true;
        } else if (cal === "distancia") {
            resultado = vel* tie.value;
            document.getElementById("resul").innerHTML = `La distancia es: ${resultado} m`;
            dis.disabled = true;
            tie.disabled = false;
        } else {
            alert('Por favor, ingresa los valores numéricos para velocidad, tiempo y distancia');
            if (isNaN(dis.value)) {
                dis.value = '';
            }

            if (isNaN(vel)) {
                document.getElementById('velocidad').value = '';
            }

            if (isNaN(tie.value)) {
                tie.value = '';
            }
        }
    }
}


let x = 0;
const dx = 2;

function animarAuto() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, x, 100);
    };

    x += dx;
}



