/**
 * Dibuja la animación de un auto en canvas cuando el usuario hace click en calcular.
 * @return {void} - No devuelve ningún valor, simplemente muestra la imagen en el canvas.
 */

x = 0;
dx = 2;
function crearAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "imagenes/auto.png";

    img.onload = function(){
        ctx.drawImage(img, x, 100);
    }
    if(x>canvas.width){
        x = 0;
    }
    x+=dx;
}

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
    let unidad;

    if (isNaN(dis.value) || isNaN(tie.value) || isNaN(vel.value)) {
        alert("Se agregó un valor inválido. Por favor, ingresa números válidos.");
        document.getElementById("distancia").value = "";
        document.getElementById("tiempo").value = "";
        document.getElementById("velocidad").value = "";
    } else {
        if (cal === "velocidad") {
            resultado = Math.round((dis.value / tie.value)*100)/100;
            unidad = "m/s";
        } else if (cal === "tiempo") {
            resultado = Math.round((dis.value / vel.value)*100)/100;
            unidad = "s";
        } else if (cal === "distancia") {
            resultado = Math.round((vel.value * tie.value)*100)/100;
            unidad = "m";
        }
        document.getElementById("resul").value = "El resultado es: " + resultado + " " + unidad;

        const canvas = document.getElementById("myCanvas");
        crearAuto(canvas);

        document.getElementById("distancia").value = "";
        document.getElementById("tiempo").value = "";
        document.getElementById("velocidad").value = "";
    }
}

/**
 * Verifica que el usuario ingrese un número en un campo específico.
 * @param {HTMLInputElement} input - Elemento de entrada donde el usuario ingresa datos (velocidad, tiempo, o distancia).
 * @return {void} - Muestra una alerta si lo ingresado no es un número válido.
 */

function validarCampo(input) {
    const valor = parseFloat(input.value);

    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido. Por favor, ingresa un número válido.");
        imput.value = " ";
    }
}



/**
 * Deshabilita el campo correspondiente (distancia, tiempo, o velocidad) según la opción seleccionada por el usuario.
 * @return {void} - No devuelve ningún valor, simplemente deshabilita el campo a calcular.
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


