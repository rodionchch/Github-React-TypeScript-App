const isFetching: boolean = true;
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const message: string = "Hello world";

// Arrays
const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5]; // Дженерик

const words: string[] = ["Hello", "world"];

// Tuple
const contact: [string, number] = ["Rodion", 79856660375];

// Any
let variable: any = 42;
variable = "New String";

function sayMyName(name: string): void {
  console.log("name: ", name);
}

sayMyName("Rodion");

// Never
function throwError(message: string): never {
  throw new Error(message);
}

// function infinite(): never {
//   while (true) {}
// }

// Type

type Login = string;

const login: Login = "admin";

type ID = string | number;
const id1 = "1";
const id2 = 1;

type SomeType = string | null | undefined;

export {};
