import {getAge} from './Drivers'

describe("Drivers", () => {
    test("getAge() should return a given age", () => {
        //Checks young age
        expect(getAge(10)).toEqual("too young");
        expect(getAge(90)).toEqual("too old");
        expect(getAge(16)).toEqual("eligible");
    })
    
})