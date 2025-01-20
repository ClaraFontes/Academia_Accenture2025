Given('que acesso o site Tricentis', () => {
    cy.visit('/')
})

When('clico na aba Motorcycle', () => {
    cy.pause()
    cy.acessarAbaMoto()
})

And('preencho todos os dados obrigatórios com informações válidas', () => {
    cy.preencherDadosMoto()
    cy.pause()
    cy.irParaProximoFormsInsurant()
    cy.preencherDadosSeguradora()
    cy.pause()
    cy.irParaProximoFormsProduct()
    cy.preencherDadosProduto()
    cy.pause()
    cy.irParaProximoFormsPrice()
    cy.selecionarPreco()
    cy.pause()
    cy.irParaProximoFormsSendQuote()
})

And('envio a solicitação', () => {
    cy.preencherDadosParaEnvio()
    cy.enviarSolicitacao()
    cy.pause()
})

Then('deve aparecer uma mensagem de sucesso na tela', () => {
    cy.validarEnvio()
    cy.pause()
})
        