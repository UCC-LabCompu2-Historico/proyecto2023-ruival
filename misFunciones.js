/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function calcular(){
    const calculo = document.getElementById("calcular").value;
    const distancia = document.getElementById("distancia").value;
    const tiempo = document.getElementById("tiempo").value;
    const velocidad = document.getElementById("velocidad").value;

    if(!isNaN(distancia) && !isNaN(tiempo) && !isNaN(velocidad)){
        let resultado;

        if(calculo=="velocidad"){
            resultado = distancia/tiempo;
            document.getElementById("resul").innerHTML = `La velocidad es:${resul} m/s`;
        }else if(calculo=="tiempo"){
            resultado = distancia/velocidad;
            document.getElementById("resul").innerHTML = `El tiempo es:${resul} s`;
        }else if(calculo=="distancia"){
            resultado = velocidad*tiempo;
            document.getElementById("resul").innerHTML = `La velocidad es:${resul} m`;
        }else{
            alert('Por favor, ingresa los valores numéricos para velocidad, tiempo y distancia');
            if (isNaN(distancia)) {
                document.getElementById('distancia').value = '';
            }

            if (isNaN(velocidad)) {
                document.getElementById('velocidad').value = '';
            }

            if (isNaN(tiempo)) {
                document.getElementById('tiempo').value = '';
            }
        }
    }
}