describe('Тестирование авторизации', function () {
    
    it('Правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio');
 cy.get('#mail').type('german@dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').should('be.visible');
  cy.get('#messageHeader').contains('Авторизация прошла успешно');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

    it('Восстановление пароя', function () {
        cy.visit('https://login.qa.studio');
 cy.get('#mail').type('german@dolnikov.ru');
  cy.get('#forgotEmailButton').click();
  cy.get('#mailForgot').type('german@dolnikov.ru');
  cy.get('#restoreEmailButton').click();
  cy.get('#messageHeader').should('be.visible');
  cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })
    it('НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio');
 cy.visit('https://login.qa.studio');
 cy.get('#mail').type('german@dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio11');
  cy.get('#loginButton').click();
  cy.get('#message').should('be.visible');
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    it('НЕправильный логин', function () {
        cy.visit('https://login.qa.studio');
 cy.visit('https://login.qa.studio');
 cy.get('#mail').type('germann@dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#message').should('be.visible');
  cy.get('#messageHeader').contains('Такого логина или пароля нет');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    it('Логин без @', function () {
        cy.visit('https://login.qa.studio');
 cy.visit('https://login.qa.studio');
 cy.get('#mail').type('germandolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#message').should('be.visible');
  cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio');
 cy.visit('https://login.qa.studio');
 cy.get('#mail').type('GeRman@dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#message').should('be.visible');
  cy.get('#messageHeader').contains('Авторизация прошла успешно');
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
     
    })
describe('Покемон баттл', function () {
    
    it('Покупка аватара', function () {
 cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('max.kulagin@internet.ru');
        cy.get('#password').type('Kozlovsky96');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4371959399116938');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Dany Koz');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();

        })
     
    })
