function verificarNumeroDeProdutos() {
    
    let produtos = document.querySelectorAll('.produto');

    if (produtos.length % 2 === 0) {
        
        document.body.style.backgroundColor = '#FFF000';
    } else {
        
        document.body.style.backgroundColor = '#0000cc';
    }
}

function aplicarEstiloAosProdutos() {
    
    let produtos = document.querySelectorAll('.produto');

    for (let i = 0; i < produtos.length; i++) {
        
        produtos[i].style.backgroundColor = `rgba(220, 80, 200, ${i / produtos.length})`;
        
    }
}
aplicarEstiloAosProdutos();
verificarNumeroDeProdutos();




