import { expect, it } from "vitest";
import type { Equal, Expect } from "./helpers/type-utils";
import type { User } from "./16-omit-and-pick.problem";

type MyType = Pick<User, "firstName" | "lastName">;

type expectations = [
  Expect<Equal<MyType, { firstName: string; lastName: string }>>,
];

it("Should work", () => {
  const myObj: MyType = {
    firstName: "Alice",
    lastName: "Leonard",
  };

  expect(myObj.firstName).toEqual("Alice");
  expect(myObj.lastName).toEqual("Leonard");
});