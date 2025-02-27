let TXT = ['pista','cadeira superior','cadeira inferior'];

function comprar() {

    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);


    //alert(tipo.value);
    //alert(qtd.value);

    //Forma diferente que a da Alura

    /*Obs: quando mudei os nomes de 'pistaQTQ' para o nome correto o 
    codigo parou de funcionar misteriosamente :] */

    if (qtd>0) {
        checarcompra(tipo.value, qtd);
    }else {

        alert('não pode cume pedra!');

}

}

function comprarpista(qtd) {

    let pistaQTD = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > pistaQTD) {

        alert(`não tem mais ${TXT[0]}`);

    } else {

        pistaQTD = pistaQTD - qtd;
        document.getElementById('qtd-pista').textContent = pistaQTD;
        alert('parabenes');

    }

}   

function comprarsuperior(qtd) {

    let pistaQTD = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > pistaQTD) {

        alert(`não tem mais ${TXT[1]}`);

    } else {

        pistaQTD = pistaQTD - qtd;
        document.getElementById('qtd-superior').textContent = pistaQTD;
        alert('parabenes');

    }

} 

function comprarinferior(qtd) {

    let pistaQTD = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > pistaQTD) {

        alert(`não tem mais ${TXT[2]}`);

    } else {

        pistaQTD = pistaQTD - qtd;
        document.getElementById('qtd-inferior').textContent = pistaQTD;
        alert('parabenes');

    }

} 

function checarcompra(ingresso, qtd) {

    if (ingresso == 'pista') {

        comprarpista(qtd);

    }

    if (ingresso == 'superior') {

        comprarsuperior(qtd);
        
    }

    if (ingresso == 'inferior') {

        comprarinferior(qtd);

}
}