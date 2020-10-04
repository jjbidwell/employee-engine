const Employee = require("../employee");

describe('Employee', () => {
    describe('Initialization', () => {

        it("should create an object with a name and age if provided valid arguments", () => {
            const employee = new Employee('Josh', "engineer", 1, "jjbidwell262@gmail.com", "jjbidwell");

            expect(employee.name).toEqual("Josh");
            expect(employee.title).toEqual("engineer");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("jjbidwell262@gmail.com");
            expect(employee.github).toEqual("jjbidwell");
        })
    })
})