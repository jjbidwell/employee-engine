// const Intern = require('../lib/intern');

// describe('Intern', () => {
//     describe('Initialization', () => {
//         it('should create an object with name, id, email, and school', () => {
//             const intern = new Intern("name", 1, "sample@gmail.com", "University of California, San Diego");
//             expect(intern.name).toEqual("name");
//             expect(intern.id).toEqual(1);
//             expect(intern.email).toEqual("sample@gmail.com");
//             expect(intern.school).toEqual("University of California, San Diego");
//         });

//         it('Should throw an error if not provided a school', () => {
//             const cb = () => new Intern('name', 1, 'sample@gmail.com');
//             const err = new Error(
//                 "Expected parameter 'school' to be a non-empty string"
//             );
//             expect(cb).toThrow(err);
//         });
//     });


//     describe('getSchool', () => {
//         it('should return the inputted school', () => {
//             const josh = new Intern('Josh', 1, 'jjbidwell262@gmail.com', "University of California, San Diego");
//             expect(josh.getSchool()).toEqual("University of California, San Diego")
//         })
//     })

//     describe('getRole', () => {
//         it('should return "Intern"', () => {
//             const josh = new Intern('Josh', 1, 'jjbidwell262@gmail.com', "University of California, San Diego");
//             expect(josh.getRole()).toEqual("Intern");
//         })
//     });
// });

const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('Should throw an error if not provided a school', () => {
    const cb = () => new Intern('name', 1, 'sample@gmail.com');
    const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
    );
    expect(cb).toThrow(err);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
