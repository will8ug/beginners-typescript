import { expect, it } from 'vitest';
import { createCache } from "./11-record.problem";

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Bob");

  expect(cache.cache["123"]).toEqual("Bob");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Alice");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
