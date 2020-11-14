let stages = {
    0: {
        descricao: "Boas Vindas",
        obj: require("./Estagios/0BemVindo.js"),
    },
    1: {
        descricao: "Pega o nome do cliente",
        obj: require("./Estagios/1NomeCliente.js"),
    },
    2: {
        descricao: "Envia o Cardápio",
        obj: require("./Estagios/2EnviaCardapio.js"),
    },
    3: {
        descricao: "Carrinho",
        obj: require("./Estagios/3Carrinho.js"),
    },
    4: {
        descricao: "Observação",
        obj: require("./Estagios/4Observacao.js"),
    },
    5: {
        descricao: "Pergunta se é para entrega",
        obj: require("./Estagios/5Entrega.js"),
    },
    6: {
        descricao: "Pergunta o endereço",
        obj: require("./Estagios/6Endereco.js"),
    },
    7: {
        descricao: "Forma de pagamento",
        obj: require("./Estagios/7FormaDePagamento.js"),
    },
    8: {
        descricao: "Encerramento",
        obj: require("./Estagios/8Encerramento.js"),
    },

};

exports.step = stages;
