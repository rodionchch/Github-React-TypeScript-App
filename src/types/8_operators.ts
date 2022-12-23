interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = "name";
key = "age";
// const city: PersonKeys = 'city' // Error

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; // 'name' | 'email'

const user1: UserKeysNoMeta1 = "name";
console.log("user1:", user1);

type UserKeysNoMeta2 = Pick<User, "name" | "email">;
const user2: UserKeysNoMeta2 = {
  name: "Rodion",
  email: "rodionchch@gmail.com",
};

console.log("user2:", user2);

export {};
