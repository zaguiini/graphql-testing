interface TextSelector {
  text: string
}

interface TestIdSelector {
  testId: string
}

interface CssSelector {
  css: string
}

export type ElementSelector = TextSelector | TestIdSelector | CssSelector

export const isTextSelector = (
  selector: ElementSelector
): selector is TextSelector => {
  return 'text' in selector
}

export const isTestIdSelector = (
  selector: ElementSelector
): selector is TestIdSelector => {
  return 'testId' in selector
}
