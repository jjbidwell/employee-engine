const Employee = require("../lib/employee");

describe.skip('Employee', () => {
    describe('Initialization', () => {

        it("should create an object with a name and age if provided valid arguments", () => {
            const employee = new Employee('Josh', 1, "jjbidwell262@gmail.com");
            expect(employee.name).toEqual("Josh");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("jjbidwell262@gmail.com");
        });

        it('Should throw an error if not provided a name', () => {
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });

        it('should throw an error if not provided an employee id', () => {
            const cb = () =>  new Employee("Josh");
            const err = new Error(
              "Expected parameter 'id' to be a non-negative number"
            );
      
            expect(cb).toThrowError(err);
        });

        it('should throw an error if not provided an email', () => {
            const cb = () => new Employee("Josh", 1);
            const err = new Error(
                "Expected parameter 'email' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });

        // it('should throw an error if not provided a job title', () => {
        //     const cb = () => new Employee("Josh");
        //     const err = new Error(
        //         "Expected parameter 'title' to be a non-empty string"
        //     );
        //     expect(cb).toThrow(err);
        // });

        // it('should throw an error if not provided a github profile', () => {
        //     const cb = () => new Employee("Josh", "engineer", 1, "jjbidwell262@gmail.com");
        //     const err = new Error(
        //         "Expected parameter 'github' to be a non-empty string"
        //     );
        //     expect(cb).toThrow(err);
        // });
    });

    describe('getName', () => {
        it('should return the inputted name', () => {
            const josh = new Employee("Josh", 1, "jjbidwell262@gmail.com")

            expect(josh.getName()).toEqual('Josh');
        });
    });

    describe('getId', () => {
        it('should return the inputted id', () => {
            const josh = new Employee("Josh", 1, "jjbidwell262@gmail.com")

            expect(josh.getId()).toEqual(1);
        });
    });

    describe('getEmail', () => {
        it('should return the inputted Email', () => {
            const josh = new Employee("Josh", 1, "jjbidwell262@gmail.com")

            expect(josh.getEmail()).toEqual('jjbidwell262@gmail.com');
        });
    });

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const josh = new Employee("Josh", 1, "jjbidwell262@gmail.com")

            expect(josh.getRole()).toEqual('Employee');
        });
    });
});