const banco = require("../../Banco/banco");

function execute(user, msg, NomeDoCliente, Carrinho, Observacao, Endereco) {
    let Entrega = msg;
    banco.db[user].entrega = Entrega;
    if (Entrega.toUpperCase() == "ENTREGAR") {
        banco.db[user].stage = 7;
        return [
            `Qual o endereço para entrega?
Exemplo: Rua Quinze de Novembro, N° 000 , Bairro: Alto Umuarama.`,
        ];
    }
    if (Entrega.toUpperCase() == "RETIRAR") {
        banco.db[user].stage = 7;
        return [
            `Certo, irei registar que você virá buscar o pedido no balcão. Ok?`,
        ];
    }

}

exports.execute = execute;
