import { expect, it } from 'vitest';
import { makeUser } from './08-function-return-type-annotations.problem';

it("Should return a valid user", () => {
  const user = makeUser();
  expect(user).toBeTruthy();
});