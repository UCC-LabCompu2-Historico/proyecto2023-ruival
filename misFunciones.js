/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cargarWeb(){
    var num1, num2, incog, urlComp;
    incog = document.getElementById("calcular").value;
    if(incog=="distancia"){
        incog = num1 * num2;
    }else if(incog=="tiempo"){
        incog = num1 / num2;
    }else if(incog=="velocidad"){
        incog = num1 / num2;
    }
    urlComp = "en_movimiento_2.html #" + incog + "#";
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, inc;
    urlComp = window.location.href.split("/").[5];
    inc = urlComp.split("/").[1];

    document.getElementById("resul").value = inc;
}