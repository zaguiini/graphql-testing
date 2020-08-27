import BasePage from './basePage'

/* global cy */

export default class HomePage extends BasePage {
  visit() {
    cy.visit('/')
  }
}
