function sortear() {

        let Q = parseInt(document.getElementById("quantidade").value);
        let Min = parseInt(document.getElementById("de").value);
        let Max = parseInt(document.getElementById("ate").value);

        /*alert(`Quantidade: ${Q} Minimo: ${Min} Máximo: ${Max}`)
        let N = RNG(Min, Max);
        alert(N);*/

        let Ns = [];
        for (let i = 0; i < Q; i++) {

            Ns.push(RNG(Min,Max));
            //Forma diferente que a da Alura

        }

        alert(Ns);

}

function RNG(min, max) {
    
    return(Math.floor(Math.random() * (max - min + 1)) + min);

}