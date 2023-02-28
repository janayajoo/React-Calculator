function limpiar(){
    document.getElementById('resultado').value='';
}

function borrar(){
    var cosa = (document.getElementById('resultado').value).toString();
    valueNew = cosa.substring(0,cosa.length-1);
    document.getElementById('resultado').value = valueNew;
}

function mostrar(prop){
    document.getElementById('resultado').value += prop;
}

function calcular(){
    let value = document.getElementById('resultado').value;
    let respuesta = eval(value);
    document.getElementById('resultado').value = respuesta;
}