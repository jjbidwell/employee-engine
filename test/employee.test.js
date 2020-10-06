const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee('josh', 1, 'test');
  expect(typeof(e)).toBe("object");
});

test('Should throw an error if not provided a name', () => {
    const e = () => new Employee();
    const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
        );
        expect(e).toThrow(err);
        });

test('should throw an error if not provided an employee id', () => {
    const e = () => new Employee("Josh");
    const err = new Error(
      "Expected parameter 'id' to be a non-negative number"
    );
    expect(e).toThrow(err);
});

test('should throw an error if not provided an email', () => {
    const e = () => new Employee("Josh", 1);
    const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
    );
    expect(e).toThrow(err);
    });
test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name, 1, 'test');
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue, "test");
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue, 1, 'test');
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue, 'test');
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
