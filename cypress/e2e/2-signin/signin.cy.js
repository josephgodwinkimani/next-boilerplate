/* eslint-disable */
/// <reference types="cypress" />

// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('sign-in', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:3001/en/')
    })

    context('Window', () => {
        it('cy.title() - get the title', () => {
            // Get the document.title property of the page that is currently active.
            // cy.title() will automatically retry until all chained assertions have passed
            // https://on.cypress.io/title
            cy.title().should('include', 'Sign In')
        })
    })


    it('displays sign-in form', () => {
        // Get the DOM element containing the text
        // DOM elements can contain more than the desired text and still match. 
        // Additionally, Cypress prefers some DOM elements over the deepest element found.
        cy.get('label').contains('E-mail')
        // yields the new DOM element it found
        cy.get('label').contains('Password')
        cy.get('form').find('input')
        cy.get('form button[type="submit"]').should('exist')
    })

})
