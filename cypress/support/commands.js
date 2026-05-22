Cypress.Commands.add("fillMandatoryFieldAndSubmit", ({
        firstName= "Ana",
        lastName = "Sobrenome",
        email = "test@gmail.com",
        invalidEmail = "test@gmail,com",
        phone = "999999999",
        text = "Teste"
    }) => {
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
    cy.get('#email').type(invalidEmail);
    cy.get('#phone').type(phone);
    cy.get('#open-text-area').type(text);

    cy.get('button[type="submit"]').click();
})