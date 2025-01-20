Given('que acesso o site Tricentis', () => {
    cy.visit('/')
})

When('clico na aba Motorcycle', () => {
    cy.pause()
    cy.acessarAbaMoto()
})

And('preencho os dados do veículo com valores válidos', () => {
    cy.preencherDadosMoto()
    cy.pause()
    cy.irParaProximoFormsInsurant()
    cy.preencherDadosSeguradora()
    cy.pause()
    cy.irParaProximoFormsProduct()
})

And('preencho o campo START DATA com uma data inválida', () => {
    cy.preencherDadosProdutoIncorretamente()
    cy.irParaProximoFormsPrice()
})

Then('a seleção do preço não deve estar habilitada', () => {
    cy.verificarInvalidez()
})
        