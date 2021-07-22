const nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function contarTempo() {

    let diaAtual = new Date();
    let horaAtual = new Date();

    let mes = diaAtual.getMonth();
    let dia = diaAtual.getDate();
    let ano = diaAtual.getFullYear();

    let hora = horaAtual.getHours();
    let minuto = horaAtual.getMinutes();
    let segundos = horaAtual.getSeconds();

    if (hora < 10){
        hora = "0"+hora;
    }

    if (minuto < 10){
        minuto = "0"+minuto;
    }

    if (segundos < 10){
        segundos = "0"+segundos;
    }

    document.getElementById('data').innerHTML = dia + " de " + nomeMes[mes] + " de " + ano
        + " - " + hora + ":" + minuto + ":" + segundos;
}

setInterval(contarTempo, 1000)