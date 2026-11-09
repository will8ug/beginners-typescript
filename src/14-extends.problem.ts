
interface Entity {
  id: string;
}

// `extends` would not work for `type`, only works for `interface`
export interface User extends Entity {
  firstName: string;
  lastName: string;
}

export interface Post extends Entity {
  title: string;
  body: string;
}

export interface Comment extends Entity {
  comment: string;
}
