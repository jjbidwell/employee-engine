// const Manager = require('../lib/manager');

// describe('Manager', () => {
//     describe('Initialization', () => {
//         it('should create an object with name, id, email, and office no', () => {
//             const manager = new Manager("name", 1, "sample@gmail.com", 12);
//             expect(manager.name).toEqual("name");
//             expect(manager.id).toEqual(1);
//             expect(manager.email).toEqual("sample@gmail.com");
//             expect(manager.office).toEqual(12);
//         });

//         it('Should throw an error if not provided an office number', () => {
//             const cb = () => new Manager('name', 1, 'sample@gmail.com');
//             const err = new Error(
//                 "Expected parameter 'office' to be a non-negative number"
//             );
//             expect(cb).toThrow(err);
//         });
//     });



//     describe('getRole', () => {
//         it('should return "Manager"', () => {
//             const josh = new Manager('Josh', 1, 'jjbidwell262@gmail.com', 12);
//             expect(josh.getRole()).toEqual("Manager");
//         })
//     });
// });

const Manager = require("../lib/manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('Should throw an error if not provided an office number', () => {
    const cb = () => new Manager('name', 1, 'sample@gmail.com');
    const err = new Error(
        "Expected parameter 'office' to be a non-negative number"
    );
    expect(cb).toThrow(err);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
