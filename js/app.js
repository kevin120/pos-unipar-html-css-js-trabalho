function allowDrop(ev) {
    ev.preventDefault();
}

function denyDrop(ev) {
    ev.stopPropagation();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function leave(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    calculaValor();
}

function calculaValor() {
    var valorTotal = 0;
    var qtdeTotal = 0;
    var qtde = 0;
    var carrinho = $("#carrinho");
    
    carrinho.children().each(function () {
        
        qtde = parseInt($(this).find("input")[0].value);
        var valor = $(this).find("input")[1].value; 
       
        if (qtde > 0)  {
            valorTotal = (valorTotal + (qtde * valor));
            qtdeTotal = qtdeTotal + qtde;
        } 
    })

   valorTotal = valorTotal.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});

    $("#checkout table tbody #tr-valor td").text(valorTotal);
    $("#checkout table tbody #tr-qtde td").text(qtdeTotal);
    

}