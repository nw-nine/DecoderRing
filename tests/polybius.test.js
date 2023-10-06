// Write your tests here!

const {polybius} = require("../src/polybius")
const { expect } = require("chai")


describe("polybius()", () => {
    it("should encode a message into numbers using polybius square chart", () => {
        const actual = polybius("ba")
        const expected = "2111"
        expect(actual).to.equal(expected)
    })
    it("should include spaces that were in the original message", () => {
        const actual = polybius("b a")
        const expected = "21 11"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters that were in the original message", () => {
        const actual = polybius("B a")
        const expected = "21 11"
        expect(actual).to.equal(expected)
    })
    it("if called with encode = false should decode the numbers into a message", () => {
        const actual = polybius("2111", false)
        const expected = "ba"
        expect(actual).to.equal(expected)
    })
    it("if the amount of numbers in encoded message is odd return false", () => {
        const actual = polybius("211", false)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("if the message after decoding includes a i or j include it like this: (i/j)", () => {
        const actual = polybius("42", false)
        const expected = "(i/j)"
        expect(actual).to.equal(expected)
    })
})