const length = require('./index')

test('Returns the length of a string', () => {
  expect(length.stringLength('items')).toBe(5)
});

test('Returns an error if the string is too short or too long', () => {
  expect(length.stringLength('')).toBe(Error);
  expect(length.stringLength('mugumemushaberukilabasaija')).toBe(Error)
});