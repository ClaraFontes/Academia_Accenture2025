# utf-8
# language: pt

Funcionalidade:  Solicitação de orçamento de seguro para uma moto
    Cenário: Solicitação bem-sucedida de orçamento
        Dado que acesso o site Tricentis
        Quando clico na aba Motorcycle
        E preencho todos os dados obrigatórios com informações válidas
        E envio a solicitação
        Então deve aparecer uma mensagem de sucesso na tela
        
    Cenário: Tentativa de solicitação de orçamento preenchendo um campo incorretamente
        Dado que acesso o site Tricentis
        Quando clico na aba Motorcycle
        E preencho os dados do veículo com valores válidos
        E preencho o campo START DATA com uma data inválida
        Então a seleção do preço não deve estar habilitada