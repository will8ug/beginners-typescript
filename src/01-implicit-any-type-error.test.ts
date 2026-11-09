import { expect, it } from "vitest";
import { addTwoNumbers } from "./01-implicit-any-type-error.problem";

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
