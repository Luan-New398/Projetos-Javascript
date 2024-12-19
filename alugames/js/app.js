function alterarStatus(ID) {

    let click = document.getElementById(`game-${ID}`);
    let img = click.querySelector(".dashboard__item__img");
    let botao = click.querySelector(".dashboard__item__button");

    /*let nome = click.querySelector(".dashboard__item__name");
    alert(nome.textContent);*/

    if (img.classList.contains("dashboard__item__img--rented")) {

        img.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";

    } else {

        img.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";

    }

}