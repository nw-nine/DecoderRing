// Write your tests here!
const {caesar} = require("../src/caesar")
const { expect } = require("chai")


describe("caesar()", () => {
    it("Should work for happy path of encoding letters to the left and right", () => {
        const actual = caesar("ab", 1);
        const expected = "bc"
        expect(actual).to.equal(expected)

        const actual2 = caesar("bc", -1)
        const expected2 = "ab"
        expect(actual2).to.equal(expected2)
    })
    it("should ignore capital letters", () => {
        const actual = caesar("Ab", 1)
        const expected = "bc"
        expect(actual).to.equal(expected)
    })
    it("should skip over non alphabetical characters", () => {
        const actual = caesar("ab!", 1)
        const expected = "bc!"
        expect(actual).to.equal(expected)
    })
    it("if shift is less than -25 return false", () => {
        const actual = caesar("ab!", -99)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("if shift is greater than 25 return false", () => {
        const actual = caesar("ab!", 99)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("if shift is not present/0 return false", () => {
        const actual = caesar("ab")
        expected = false
        expect(actual).to.equal(expected)
    })
    it("if shifted index goes past 25 or before 0 loop it back", () => {
        const actual = caesar("xyz!", 3)
        const expected = "abc!"
        expect(actual).to.equal(expected)
    })
 

}) 