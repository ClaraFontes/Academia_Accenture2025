// Clique na aba Motorcycle
const BTN_MOTO = '#nav_motorcycle'

Cypress.Commands.add('acessarAbaMoto', () => {
    cy.get(BTN_MOTO).click()
})

// Dados da moto com valores válidos
const LST_MAKE = '#make'
const LST_MODEL = '#model'
const LBL_CYLINDER = '#cylindercapacity'
const LBL_ENGINE = '#engineperformance'
const CDR_MANUFACTURE = '#dateofmanufacture'
const LST_SEATS = '#numberofseatsmotorcycle'
const LBL_PRICE = '#listprice'
const LBL_MILEAGE = '#annualmileage'
const BTN_NEXT_INSURANT = '#nextenterinsurantdata'

Cypress.Commands.add('preencherDadosMoto', () => {
    cy.get(LST_MAKE).select('Ford')
    cy.get(LST_MODEL).select('Motorcycle')
    cy.get(LBL_CYLINDER).type('233')
    cy.get(LBL_ENGINE).type('1000')
    cy.get(CDR_MANUFACTURE).type('12/01/2023')
    cy.get(LST_SEATS).select('2')
    cy.get(LBL_PRICE).type('1500')
    cy.get(LBL_MILEAGE).type('500')
})

Cypress.Commands.add('irParaProximoFormsInsurant', () => {
    cy.get(BTN_NEXT_INSURANT).click()
})

// Dados da seguradora com informações válidas
const LBL_FIRST_NAME = '#firstname'
const LBL_LAST_NAME = '#lastname'
const CDR_BIRTH = '#birthdate'
const RDO_GENDER = ':nth-child(4) > .group > :nth-child(2) > .ideal-radio'
const LBL_ST_ADDRESS = '#streetaddress'
const LST_COUNTRY = '#country'
const LBL_ZIP_CODE = '#zipcode'
const LBL_CITY = '#city'
const LST_OCCUPATION = '#occupation'
const CHK_HOBBIES = ':nth-child(4) > .ideal-check'
const LBL_WEBSITE = '#website'
const BTN_NEXT_PRODUCT = '#nextenterproductdata'

Cypress.Commands.add('preencherDadosSeguradora', () => {
    cy.get(LBL_FIRST_NAME).type('Ana')
    cy.get(LBL_LAST_NAME).type('Fontes')
    cy.get(CDR_BIRTH).type(Cypress.env('nascimento'))
    cy.get(RDO_GENDER).click()
    cy.get(LBL_ST_ADDRESS).type(Cypress.env('rua'))
    cy.get(LST_COUNTRY).select('Brazil')
    cy.get(LBL_ZIP_CODE).type(Cypress.env('cep'))
    cy.get(LBL_CITY).type('Recife')
    cy.get(LST_OCCUPATION).select('Employee')
    cy.get(CHK_HOBBIES).click()
    cy.get(LBL_WEBSITE).type('https://github.com/ClaraFontes')
})

Cypress.Commands.add('irParaProximoFormsProduct', () => {
    cy.get(BTN_NEXT_PRODUCT).click()
})

// Dados do produto com valores válidos
const CDR_START_DATE = '#startdate'
const LST_INSURANCE_SUM = '#insurancesum'
const LST_DAMAGE_INSURANCE = '#damageinsurance'
const CHK_PRODUCTS = 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check'
const BTN_NEXT_PRICE_OPTION = '#nextselectpriceoption'

Cypress.Commands.add('preencherDadosProduto', () => {
    cy.get(CDR_START_DATE).type('03/12/2025')
    cy.get(LST_INSURANCE_SUM).select('7.000.000,00')
    cy.get(LST_DAMAGE_INSURANCE).select('Partial Coverage')
    cy.get(CHK_PRODUCTS).click()
})

Cypress.Commands.add('irParaProximoFormsPrice', () => {
    cy.get(BTN_NEXT_PRICE_OPTION).click()
})

// Selecionando a opção de preço Platinum
const RDO_PLATINUM_PRICE = ':nth-child(3) > .ideal-radio'
const BTN_NEXT_SEND_QUOTE = '#nextsendquote'

Cypress.Commands.add('selecionarPreco', () => {
    cy.get(RDO_PLATINUM_PRICE).click()
})

Cypress.Commands.add('irParaProximoFormsSendQuote', () => {
    cy.get(BTN_NEXT_SEND_QUOTE).click()
})

// Dados para o envio da solicitação
const LBL_EMAIL = '#email'
const LBL_PHONE = '#phone'
const LBL_USERNAME = '#username'
const LBL_PASSWORD = '#password'
const LBL_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND = '#sendemail'

Cypress.Commands.add('preencherDadosParaEnvio', () => {
    cy.get(LBL_EMAIL).type(Cypress.env('email'))
    cy.get(LBL_PHONE).type('1256968845')
    cy.get(LBL_USERNAME).type('ClaraFontes')
    cy.get(LBL_PASSWORD).type(Cypress.env('senha'))
    cy.get(LBL_CONFIRM_PASSWORD).type(Cypress.env('senha'))
})

Cypress.Commands.add('enviarSolicitacao', () => {
    cy.get(BTN_SEND).click()
})

// Então deve aparecer uma mensagem de sucesso na tela
const ALERTA_SUCESSO = '.sweet-alert'

Cypress.Commands.add('validarEnvio', () => {
    cy.get(ALERTA_SUCESSO).should('be.visible')
})

// Preencher incorretamente o campo Start Date
Cypress.Commands.add('preencherDadosProdutoIncorretamente', () => {
    cy.get(CDR_START_DATE).type('01/08/2025')
    cy.get(LST_INSURANCE_SUM).select('7.000.000,00')
    cy.get(LST_DAMAGE_INSURANCE).select('Partial Coverage')
    cy.get(CHK_PRODUCTS).click()
})

// Aviso para preencher todos os campos corretamente
const TXT_PREENCHER_CAMPOS = '#xLoaderPrice > p'

Cypress.Commands.add('verificarInvalidez', () => {
    cy.get(TXT_PREENCHER_CAMPOS).should('be.visible')
})
