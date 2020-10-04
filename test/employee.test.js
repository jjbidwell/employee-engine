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
        });

        it('Should throw an error if not provided a name', () => {
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        })

        it('should throw an error if not provided a job title', () => {
            const cb = () => new Employee("Josh");
            const err = new Error(
                "Expected parameter 'title' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });

        it('should throw an error if not provided an employee id', () => {
            const cb = () =>  new Employee("Josh", "engineer");
            const err = new Error(
              "Expected parameter 'id' to be a non-negative number"
            );
      
            expect(cb).toThrowError(err);
        });

        it('should throw an error if not provided an email', () => {
            const cb = () => new Employee("Josh", "engineer", 1);
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });

        it('should throw an error if not provided a github profile', () => {
            const cb = () => new Employee("Josh", "engineer", 1, "jjbidwell262@gmail.com");
            const err = new Error(
                "Expected parameter 'github' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });
    });
});