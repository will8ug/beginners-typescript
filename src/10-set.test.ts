import { expect, it } from 'vitest';
import { type Equal, type Expect } from "./helpers/type-utils";
import { guitarists } from "./10-set.problem";

it("Should contain Jimmy and Tychus", () => {
  expect(guitarists.has("Jimmy")).toBe(true);
  expect(guitarists.has("Tychus")).toBe(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
