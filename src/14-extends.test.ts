import type { Equal, Expect } from "./helpers/type-utils";
import type { Comment, Post, User } from "./14-extends.problem";
import { expect, it } from "vitest";

type expectations = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];

it("Should work", () => {
  const user: User = {
    id: "1",
    firstName: "Charlie",
    lastName: "Jordan",
  };
  expect(user).toBeDefined();
});