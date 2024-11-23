describe('project session', () => {

    it('Insert project session', () => {

        //Arrange
        cy.visit(`${Cypress.config().baseUrl}/proposedProjectSessions/create`)

        cy.get('[data-cy="name"]').type("test one")

        cy.get('select').select(1)

        //Act
        cy.get('#projectSessionCreateForm').submit();

        //Assert
        cy.url().should('eq', Cypress.config().baseUrl + '/proposedProjectSessions')

    })

    it('Edit project session', () => {

        //Arrange
        cy.visit(`${Cypress.config().baseUrl}/proposedProjectSessions`)

        //Act
        cy.get('[data-cy="projectSessionTable"]').first().then(row => {
            //cy.get('td', {timeout: 300000}).eq(2).should('contain.text', 'complete')
            cy.wrap(row).find('td').eq(3).then(x => {
                cy.wrap(x).find('[data-cy="UpdateButton"]').click()
            })
        })
        //Assert

        cy.get('[data-cy="name"]').clear();
        cy.get('[data-cy="name"]').type("Edit Name")

        cy.get('#projectSessionEditForm').submit();

        cy.wait(2000)

        cy.get('[data-cy="projectSessionTable"]').first().then(row => {
            //cy.get('td', {timeout: 300000}).eq(2).should('contain.text', 'complete')
            cy.wrap(row).find('td').eq(1).should('contain.text', 'Edit Name')
            //cy.log('test')
        })

    })

    it('Delete project session', () => {

        //Arrange
        cy.visit(`${Cypress.config().baseUrl}/proposedProjectSessions`)

        //Act

        cy.get('[data-cy="projectSessionTable"]').first().then(row => {
            //cy.get('td', {timeout: 300000}).eq(2).should('contain.text', 'complete')
            cy.wrap(row).find('td').eq(1).should('contain.text', 'Edit Name')
        })

        cy.get('[data-cy="projectSessionTable"]').first().then(row => {
            //cy.get('td', {timeout: 300000}).eq(2).should('contain.text', 'complete')
            cy.wrap(row).find('td').eq(3).then(x => {
                cy.wrap(x).find('[data-cy="DeleteButton"]').click()
            })
        })
        //Assert
        cy.wait(2000)
        cy.get('[data-cy="projectSessionTable"]').first().then(row => {
            //cy.get('td', {timeout: 300000}).eq(2).should('contain.text', 'complete')
            cy.wrap(row).find('td').eq(1).should('not.contain.text', 'Edit Name')
        })
    })

});