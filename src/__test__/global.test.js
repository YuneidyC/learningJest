const text = 'Hello World';
const fruits = ['apple', 'kiwi', 'orange', 'cherry'];

test('Must contain a text', () => {
    expect(text).toMatch(/World/);
});

test('Do we have a kiwi?', () => {
    expect(fruits).toContain('kiwi');
});

