export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

export interface Post {
  id: number;
  title: string;
}

export const makeUser = (): User => {
  return {
    id: 1,
    firstName: "Bob",
    lastName: "Li",
    role: "user",
    posts: [],
  };
};
