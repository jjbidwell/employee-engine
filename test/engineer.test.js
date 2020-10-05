const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and github', () => {
            const engineer = new Engineer("name", 1, "sample@gmail.com", "jjbidwell");
            expect(engineer.name).toEqual("name");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("sample@gmail.com");
            expect(engineer.github).toEqual("jjbidwell");
        });

        it('Should throw an error if not provided a GitHub username', () => {
            const cb = () => new Engineer('name', 1, 'sample@gmail.com');
            const err = new Error(
                "Expected parameter 'GitHub' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });
    });

    describe('getGithub', () => {
        it('should return the inputted github account', () => {
            const josh = new Engineer('Josh', 1, 'jjbidwell262@gmail.com', 'jjbidwell');
            expect(josh.getGithub()).toEqual('jjbidwell');
        });
    });

    describe('getRole', () => {
        it('should return "Engineer"', () => {
            const josh = new Engineer('Josh', 1, 'jjbidwell262@gmail.com', 'jjbidwell');
            expect(josh.getRole()).toEqual("Engineer");
        })
    });
});