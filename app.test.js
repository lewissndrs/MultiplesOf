const multiplier = require('./app');

test('should add 7 to 7 to make 14', () => {
  expect(multiplier(7, 7)).toBe(14);
});