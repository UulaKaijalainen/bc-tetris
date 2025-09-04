import { checkScore } from "./checkScore.js";

import { describe, it } from "node:test";
import assert from "node:assert";


describe("checkScore", () => {
it("should return 0 points when lines cleared is 0", () => {
    const result = checkScore("0");
    assert.strictEqual(result, 0)

});

it("should return 100 points when lines cleared is 1", () => {
    const result = checkScore("1");
    assert.strictEqual(result, 100)
})

it("should return 300 points when lines cleared is 2", () => {
    const result = checkScore("2");
    assert.strictEqual(result, 300)
})

it("should return 500 points when lines cleared is 3", () => {
    const result = checkScore("3");
    assert.strictEqual(result, 500)
})

it("should return 800 points when lines cleared is 4", () => {
    const result = checkScore("4");
    assert.strictEqual(result, 800)
})


})