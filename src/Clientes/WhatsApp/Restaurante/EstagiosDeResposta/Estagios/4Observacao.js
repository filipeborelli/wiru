const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");

function execute(user) {
    banco.db[user].stage = 5;

    return [
        `Deseja fazer alguma observação?
Exemplo: Tirar cebola.`,
    ];
}

exports.execute = execute;
