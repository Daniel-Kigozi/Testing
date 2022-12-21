const upperCase = require('./capitalize');

test('Capitalize first letter', () => {
  expect(upperCase.Capitalize('daniel')).toBe('Daniel');
})