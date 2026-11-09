import { expect, it } from 'vitest';
import { getNameWithParams } from "./04-optional-params.problem";

it("Should work with just the first name", () => {
  const name = getNameWithParams("Bob");

  expect(name).toEqual("Bob");
});

it("Should work with the first and last name", () => {
  const name = getNameWithParams("Bob", "Zhang");

  expect(name).toEqual("Bob Zhang");
});