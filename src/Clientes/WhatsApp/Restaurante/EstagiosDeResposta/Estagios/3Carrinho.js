const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");
const nome = require('./2EnviaCardapio');

function execute(user, msg, NomeDoCliente, Observacao, Entrega, Endereco) {
    let Carrinho = msg;
    module.exports = Carrinho;
    if (Carrinho.toUpperCase() == "CANCELAR") {
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (Carrinho.toUpperCase() == "FINALIZAR") {
        banco.db[user].stage = 4;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if (!cardapio.menu[Carrinho.toUpperCase()]) {
        return [
            "Digite *'FINALIZAR'* para finalizar ou *'CANCELAR'* para cancelar",
            "Código inválido, digite corretamente",
        ];
    }

    banco.db[user].itens.push(cardapio.menu[Carrinho.toUpperCase()]);
    return [
        "Digite *'FINALIZAR'* para finalizar os pedidos",
        `Item(${cardapio.menu[Carrinho].produto}) adiconado com sucesso`,
    ];

}
exports.execute = execute;
