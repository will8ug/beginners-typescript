type Name = {
  first: string;
  last?: string;
}

export const getName = (params: Name) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
}
