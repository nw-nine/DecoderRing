// Write your tests here!
const {substitution} = require("../src/substitution")
const { expect } = require("chai")


describe("substitution()", () => {
    it("should return encoded message", () => {
        const actual = substitution("ab", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "xo"
        expect(actual).to.equal(expected)
    })
    it("should return encoded message with original spacing", () => {
        const actual = substitution("a b", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "x o"
        expect(actual).to.equal(expected)
    })
    it("should return encoded message even if alphabet uses special characters", () => {
        const actual = substitution("ab", "%oyqmcgrukswaflnthdjpzibev")
        const expected = "%o"
        expect(actual).to.equal(expected)
    })
    it("should return false if alphabet has any repeat chars", () => {
        const actual = substitution("ab", "xxyqmcgrukswaflnthdjpzibev")
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if alphabet does not have exactly 26 chars", () => {
        const actual = substitution("ab", "xoyqmcgrukswaflnthdjpzibevvvv")
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if !alphabet", () => {
        const actual = substitution("ab")
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return decoded message if encoded is false", () => {
        const actual = substitution("xo", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "ab"
        expect(actual).to.equal(expected)
    })
    it("should return decoded message if encoded is false even with special chars", () => {
        const actual = substitution("x@", "x@yqmcgrukswaflnthdjpzibev", false)
        const expected = "ab"
        expect(actual).to.equal(expected)
    })
})