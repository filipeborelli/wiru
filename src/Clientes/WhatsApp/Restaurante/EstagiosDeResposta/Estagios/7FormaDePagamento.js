const banco = require("../../Banco/banco");

function execute(user, msg, NomeDoCliente, Carrinho, Observacao, Entrega) {
    let Endereco = msg;
    banco.db[user].endereco = Endereco;
    banco.db[user].stage = 8;
    let resumo = "  RESUMO DO PEDIDO \n";
    let pedidos = "";
    let total = 0;
    banco.db[user].itens.forEach((value) => {
        resumo += `${value.produto} - R$${value.preco} \n`;
        pedidos += `${value.produto} /`
        total += parseFloat(value.preco);
    });
    resumo += "-------------------------\n";
    resumo += ` Total R$ ${total}`;
    banco.db[user].pedido = pedidos;
    return ["Para confirmar digite # ou para cancelar digite *", resumo];
}

exports.execute = execute;
