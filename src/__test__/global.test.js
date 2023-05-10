const text = 'Hello World';
const fruits = ['apple', 'kiwi', 'orange', 'cherry'];

test('Must contain a text', () => {
    expect(text).toMatch(/World/);
});

test('Do we have a kiwi?', () => {
    expect(fruits).toContain('kiwi');
});

test('Greater than', () => {
    expect(10).toBeGreaterThan(9);
});

test('True', () => {
    expect(true).toBeTruthy();
});

// Reverse strings function
const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''))
};

// Test callbacks
test('Try a callback', () => {
    reverseString('Hello', str => {
        expect(str).toBe('olleH');
    });
});
