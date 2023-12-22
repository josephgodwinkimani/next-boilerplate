/* eslint-disable */
/// <reference types="cypress" />

// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

const cheerio = require('cheerio')

describe('intro', () => {
    it('should read the header from the HTML file', () => {
        // Read a file and yield its contents.
        cy.readFile('out/index.html').then((html) => {
            // Create a querying function, bound to a document created from the provided markup.
            const $ = cheerio.load(html)
            // Get the combined text contents of each element in the set of matched elements, including their descendants.
            const headerText = $('head title').text()
            // Chai assertion
            expect(headerText).to.equal('Home Page')
        })
    })

    it('should read the header from the HTML file', () => {
        // Read a file and yield its contents.
        cy.readFile('out/index.html').then((html) => {
            // Create a querying function, bound to a document created from the provided markup.
            const $ = cheerio.load(html)
            // Get the combined text contents of each element in the set of matched elements, including their descendants.
            const headerText = $('li[class=lang]').text()
            // Chai assertion
            expect(headerText).to.equal('EnglishFrenchSpanish')
        })
    })

})

