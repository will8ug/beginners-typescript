import { expect, it } from 'vitest';
import type { User } from "./07-arrays.problem";

const defaultUser: User = {
  id: 1,
  firstName: "Bob",
  lastName: "Li",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};

it("Should be truthy", () => {
  expect(defaultUser).toBeTruthy();
  expect(defaultUser.posts.length).toBe(2);
})