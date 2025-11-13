export interface Account {
  email: string;
  password: string;
  name: string;
}

export const accounts: Account[] = [
  {
    email: "devs@gmail.com",
    password: "devs123",
    name: "Desenvolvedores",
  }
];