
export const getNameWithParams = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
}
