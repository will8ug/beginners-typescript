import { expect, it } from 'vitest';
import { fetchLukeSkywalker } from "./09-promises.problem";

it('fetchLukeSkywalker', async () => {
  const data = await fetchLukeSkywalker();
  expect(data).toBeTruthy();
});