import { expect, it } from 'vitest';
import { type User } from './06-unions.problem';

const defaultUser: User = {
  id: 1,
  firstName: "Alice",
  lastName: "Smith",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};

it("Should be truthy", () => {
  expect(defaultUser).toBeTruthy();
});
