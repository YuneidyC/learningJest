const text = 'Hello World';

test('Must contain a text', () => {
    expect(text).toMatch(/World/);
});
