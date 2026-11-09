import { expect, it } from 'vitest';
import { getName } from "./03-optional-properties.problem";

it('Should work with just the first name', () => {
  const name = getName({
    first: "Bob",
  });
  expect(name).toEqual('Bob');
});

it('Should work with the first and last name', () => {
  const name = getName({
    first: "Bob",
    last: "Zhang"
  });
  expect(name).toEqual('Bob Zhang');
});