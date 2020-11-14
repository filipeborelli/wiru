const cardapio = require("../../Cardapio/cardapio");
const banco = require("../../Banco/banco");
const fs = require('fs');
const mysql = require('mysql');

function execute(user, msg) {
    const connection = mysql.createConnection({ host: 'localhost', user: 'root', database: 'restaurante' });
    let n = banco.db[user].nome;
    let o = banco.db[user].observacao;
    let e = banco.db[user].entrega;
    let en = banco.db[user].endereco;
    let p = banco.db[user].pedido;
    let FormaPg = msg;
    connection.query(`INSERT INTO whatsapp (Nome, Pedido, Observacao, Entrega, Endereco, Formapg) VALUES ('${n}','${p}','${o}','${e}','${en}','${FormaPg}' );`, function(err, results, fields) { console.log(`Pedido adicionado ao banco.`); });
    console.log("\n" +
        "Nome " + n + "\n",
        "Pedido " + p + "\n",
        "Observação " + o + "\n",
        "Entrega " + e + "\n",
        "Endereço " + en + "\n"
    )
    banco.db[user].stage = 0;
    connection.end();
    return [`Obrigado pela preferencia.
Aguarde, seu pedido chegará em breve`,
        "Mais informações ligue para 33333-3311"
    ];
}

exports.execute = execute;
