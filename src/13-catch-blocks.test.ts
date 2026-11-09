import { expect, it } from 'vitest';
import { tryCatchDemo } from "./13-catch-blocks.problem";

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});