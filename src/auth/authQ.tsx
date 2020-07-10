export interface AuthQ_me {
    __typename: "User";
    id: string;
    name: string | null;
    email: string;
  }

  export interface AuthQ {
    me: AuthQ_me;
  }