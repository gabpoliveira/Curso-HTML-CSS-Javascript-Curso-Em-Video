var itens = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    
    var nomeProduto = document.querySelector('input[name=nome_produto]').value;
    var precoProduto = document.querySelector('input[name=price]').value;


    itens.push({
        nome: nomeProduto,
        valor: precoProduto
    });

    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML="";
    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=
        `<div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span><h3>
        </div>`
    })
    soma = soma.toFixed(2);
    
    

    let elementoSoma = document.querySelector('.soma-produto h2');
    elementoSoma.innerHTML = 'R$' + soma
});
