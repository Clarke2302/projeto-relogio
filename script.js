function atualizarTempo(){
    var display = document.querySelector('.display');

    var hora = new Date();

    var horaCheia = corrigeZero(hora.getHours())+':'+corrigeZero(hora.getMinutes())+':'+corrigeZero(hora.getSeconds());

    display.textContent = horaCheia;
}

function corrigeZero(numero){
    if(numero<10){
        numero = '0' + numero;
    }
    return numero;
}
atualizarTempo();
setInterval(atualizarTempo,1000);

console.log(horaCheia);