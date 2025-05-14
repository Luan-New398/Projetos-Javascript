let FList = [];

function adicionar(){

    let F = document.getElementById('nome-amigo');

    if (F.value == '') {

        alert('Não pode conter espaço vazio!');
        return

    }

    if (FList.includes(F.value)) {

        alert('Nome já adicionado!');
        return;

    }

    let TList = document.getElementById('lista-amigos');
    FList.push(F.value);

    if (TList.textContent == '') {

    TList.textContent = F.value;

    } else {

        TList.textContent = TList.textContent + ', ' + F.value;

    }

    F.value = '';
}

function sortear() {

    if (FList.length <= 3) {

        alert('Valor mínimo de 4 nomes!');
        return;

    }

    embaralha(FList);
    let sortear = document.getElementById('lista-sorteio');
    
    // Tive q usar IA pra ver o que errei abaixo, escrevi lenght ao invés de length
    sortear.innerHTML = '';
    
    for (let j = 0; j < FList.length; j++) {
        if (j == FList.length - 1) {
            sortear.innerHTML = sortear.innerHTML + FList[j] + ' --> ' + FList[0] + '<br>';
        } else {
            sortear.innerHTML = sortear.innerHTML + FList[j] + ' --> ' + FList[j + 1] + '<br>';
        }
    }
}

function reiniciar() {

    FList = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }

    console.log(lista);
}