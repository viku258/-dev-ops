describe('Basic tests', () => {
  test('adds 1 + 1 to equal 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('string contains hello', () => {
    expect('hello world').toContain('hello');
  });
});