import { expect, it } from 'vitest';
import { type User, getUserId } from './05-assigning-types-to-variables.problem';

const defaultUser: User = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  isAdmin: false
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
