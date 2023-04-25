import { sum } from "./Numbers"
import { minus} from "./Numbers"
import { mult} from "./Numbers"

describe("Numbers", () => {
    test("sum() should add two numbers", () => {
        expect(sum(1, 2)).toEqual(3);
    })
    test("minus() should substract two numbers", () => {
        expect(minus(2,1)).toEqual(1);
    })
    test("mult() should multiply two numbers", () => {
        expect(mult(2,2)).toEqual(4);
    })
})