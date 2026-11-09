import { expect, it } from "vitest";
import { createThenGetUser } from "./18-function-types-with-promises.problem";

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "Alice",
      lastName: "Leonard",
    }),
  );

  expect(user).toEqual({
    id: "123",
    firstName: "Alice",
    lastName: "Leonard",
  });
});