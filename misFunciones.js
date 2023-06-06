/**
 * Calcula la velocidad, distancia o tiempo del MRU.
 * @param {string} id de los inputs de velocidad, tiempo, y distancia
 * @param {number} valor de velocidad, tiempo y distancia
 * @return {number} El valor de la velocidad, distancia o tiempo calculado.
 */
function calcularMRU(id,valor) {
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
            resultado = Math.round((dis.value / tie.value)*100)/100;
        } else if (cal === "tiempo") {
            resultado = Math.round((dis.value / vel.value)*100)/100;
        } else if (cal === "distancia") {
            resultado = Math.round((vel.value * tie.value)*100)/100;
        }
        document.getElementById("resul").value = "El resultado es: " + resultado;
    }
}

/**
 * Corrobora que el usuario ingrese un número.
 * @param {string} input de lo que ingresa el usuario en velocidad, tiempo y distancia
 * @param
 * @return {alert} Notifica si lo que ingresó no es un número
 */
function validarCampo(input) {
    const valor = parseFloat(input.value);

    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido. Por favor, ingresa un número válido.");
    }
}



/**
 * Deshabilita el campo de la opción que ingrese el usuario, para que no ingrese ningun valor
 * @param
 * @param
 * @return {disabled} deshabilita el campo a calcular
 */
function deshabilitarCampos() {
    const cal = document.getElementById("calcular").value;
    const dis = document.getElementById("distancia");
    const tie = document.getElementById("tiempo");
    const vel = document.getElementById("velocidad");

    dis.disabled = cal === "distancia";
    tie.disabled = cal === "tiempo";
    vel.disabled = cal === "velocidad";
}

/**
 * Imprime un canvas en pantalla cuando el usuario hace click en el boton calcular
 * @param
 * @param
 * @return {canvas} La imagen que imprime en pantalla
 */
function auto() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "imagenes/auto.png";

    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas en cada cuadro de animación
        ctx.drawImage(img, 400, 100);
    };
}

