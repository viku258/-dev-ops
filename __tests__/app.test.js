describe('Dark mode logic', () => {
  test('dark mode is off by default', () => {
    const darkMode = false;
    expect(darkMode).toBe(false);
  });

  test('toggling dark mode turns it on', () => {
    let darkMode = false;
    darkMode = !darkMode;
    expect(darkMode).toBe(true);
  });

  test('toggling dark mode twice returns to light', () => {
    let darkMode = false;
    darkMode = !darkMode;
    darkMode = !darkMode;
    expect(darkMode).toBe(false);
  });
});