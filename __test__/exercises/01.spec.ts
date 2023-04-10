import maskify from '../../src/exercises/01.js';

test('A função maskify deve mascarar os caracteres, exceto os últimos quatro', () => {
  expect(maskify('1234567890123456')).toBe('############3456');
  expect(maskify('abcd1234')).toBe('####1234');
});
