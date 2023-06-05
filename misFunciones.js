/**
 * Calcula la velocidad, distancia o tiempo del MRU.
 * @param {string} id de los inputs de velocidad, tiempo, y distancia
 * @param {number} valor de velocidad, tiempo y distancia
 * @return {number} El valor de la velocidad, distancia o tiempo calculado.
 */
function calcular(id, valor) {
    const cal = document.getElementById("calcular").value;
    const dis = document.getElementById("distancia");
    const tie = document.getElementById("tiempo");
    const vel = document.getElementById("velocidad");
    let resultado;

    if (isNaN(valor)) {
        alert("Se agregó un valor inválido: " + id);
        dis.value = "";
        tie.value = "";
        vel.value = "";
    } else if (!isNaN(valor)) {
        if (cal === "velocidad") {
            vel.disabled = true;
            resultado = dis.value / tie.value;
        }
        if (cal === "tiempo") {
            tie.disabled = true;
            resultado = dis.value / vel.value;
        }
        if (cal === "distancia") {
            dis.disabled = true;
            resultado = vel.value * tie.value;
        }
    }

    document.getElementById("resul").innerHTML = "El resultado es: " + resultado;
}


    /**
    if (!isNaN(dis.value) && !isNaN(tie.value) && !isNaN(vel.value)) {
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

*/
let x = 0;

function animarAuto() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "imagenes/auto.png";

    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas en cada cuadro de animación
        ctx.drawImage(img, x, 100);
    };

}




