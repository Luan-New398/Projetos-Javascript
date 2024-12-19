let valortotal;
limpar();

function adicionar() {
    //Catando as coisa do HTML
    let produto = document.getElementById("produto").value;
    let nproduto = produto.split("-")[0];
    let vproduto = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    let valor = vproduto * quantidade

    //Adicionado o grande carroinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nproduto} <span class="texto-azul">${vproduto}</span>
        </section>`;

    //Pois tome o  valor total
    valortotal += valor;
    let VTtext = document.getElementById("valor-total");
    VTtext.textContent = `R$ ${valortotal}`
    document.getElementById("quantidade").value = 0;
}

function limpar() {

    //Reseta os valores
    valortotal = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0"

}