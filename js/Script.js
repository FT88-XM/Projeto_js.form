function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado =document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobreNome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');
        pessoas.push({
            nome:nome.nodeValue,
            sobreNome:sobreNome.value,
            altura:altura.value,
            peso:peso.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobreNome.value}`+
        `${altura.value}${peso.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();