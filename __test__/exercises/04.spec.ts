import checkIfTheFirstLetterIsUppercase from '../../src/exercises/04.js';

test('A função checkIfTheFirstLetterIsUppercase deve retornar true para palavras com primeira letra maiúscula', () => {
  expect(checkIfTheFirstLetterIsUppercase('Hello')).toBe(true);
  expect(checkIfTheFirstLetterIsUppercase('World')).toBe(true);
});

test('A função checkIfTheFirstLetterIsUppercase deve retornar false para palavras com primeira letra maiúscula', () => {
  expect(checkIfTheFirstLetterIsUppercase('hello')).toBe(false);
  expect(checkIfTheFirstLetterIsUppercase('world')).toBe(false);
});
