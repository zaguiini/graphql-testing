import {
  ElementSelector,
  isTextSelector,
  isTestIdSelector
} from './ElementSelector'

/* global cy */

export default class BasePage {
  getElement(selector: ElementSelector) {
    if (isTextSelector(selector)) {
      return cy.contains(selector.text)
    } else if (isTestIdSelector(selector)) {
      return cy.get(`[data-testid="${selector.testId}"]`)
    }

    return cy.get(selector.css)
  }

  rootElement() {
    return this.getElement({ css: '#root' })
  }
}
