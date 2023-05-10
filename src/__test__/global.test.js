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

// Reverse string with promise
const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error("There is no string"));
        }
        resolve(str.split("").reverse().join(""));
    });
};

// Promises test
test("The promise should return a reversed word", () => {
    return reverseStringPromise("World")
        .then(str => {
            expect(str).toBe("dlroW");
        });
});

// Async-await test
test("The async-await block code should return a reversed word", async () => {
    const str = await reverseStringPromise("Promises");
    expect(str).toBe("sesimorP");
});

// This function is executed after each test
afterEach(() => console.log("After each test"));
// This function is executed after all test
afterAll(() => console.log("All the test ended."));

// This function is executed before each test
beforeEach(() => console.log("Before each test"));
// This function is executed before all test
beforeAll(() => console.log("Beginning of all the tests"));
