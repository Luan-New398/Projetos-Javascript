function sortear() {

        let Q = parseInt(document.getElementById("quantidade").value);
        let Min = parseInt(document.getElementById("de").value);
        let Max = parseInt(document.getElementById("ate").value);

        /*alert(`Quantidade: ${Q} Minimo: ${Min} Máximo: ${Max}`)
        let N = RNG(Min, Max);
        alert(N);*/

        let Ns = [];
        let N;

        if (Q > Max) {

            alert("Operação inpossível");
            return;

        }

        for (let i = 0; i < Q; i++) {

            //Ns.push(RNG(Min,Max));
            //Forma diferente que a da Alura

            N = RNG(Min,Max);

            while (Ns.includes(N)) {

            N = RNG(Min,Max);

            }

            Ns.push(N);

        }

        //alert(Ns);

        let R = document.getElementById("resultado");
        R.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${Ns}</label>`

        AlterarBotao("btn-reiniciar");

}

function RNG(min, max) {
    
    return(Math.floor(Math.random() * (max - min + 1)) + min);

}

function AlterarBotao(ID) {

    let btn = document.getElementById(ID);

    if (btn.classList.contains("container__botao-desabilitado")) {

        btn.classList.remove("container__botao-desabilitado");
        btn.classList.add("container__botao")

    } else {

        btn.classList.remove("container__botao");
        btn.classList.add("container__botao-desabilitado")

    }


}

function reiniciar() {

    document.getElementById("quantidade").value = ""; 
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    AlterarBotao("btn-reiniciar");

}