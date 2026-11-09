import { expect, it } from "vitest";
import type { Post, User } from "./15-intersection.problem";

const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: "1",
    firstName: "Alice",
    lastName: "Leonard",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      }
    ]
  };
};

it("Should work", () => {
  expect(getDefaultUserAndPosts()).toBeTruthy();
});