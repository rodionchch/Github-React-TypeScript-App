import { Id } from "@reduxjs/toolkit/dist/tsHelpers";

namespace UtilityTypes {
  type User = {
    id: number;
    name: string;
    age?: number;
  };

  const user: Partial<User> = {
    // Partial - все не обязательны
    id: 1,
    name: "Rodion",
    age: 26, // Good
    // job: "IT", // Error
  };

  const user2: Required<User> = {
    // Required - все обязательны
    id: 1,
    name: "Rodion",
    age: 26, // Error
    // job: "IT", // Error
  };

  user2.id = 2;

  const user3: Readonly<User> = {
    id: 1,
    name: "Rodion",
    age: 26,
  };

  //   user3.id = 3; Error

  type Names = "Rodion" | "Alex" | "Boris";

  const users: Record<Names, Omit<User, "name">> = {
    Rodion: {
      id: 1,
      age: 26,
    },
    Alex: {
      id: 1,
      age: 26,
    },
    Boris: {
      id: 1,
      age: 26,
    },
  };

  const user4: Pick<User, "id" | "age"> = {
    id: 4,
    // age: 26,
  };

  type Animals = "cat" | "dog" | "cow" | null;

  const animal: Exclude<Animals, "cow"> = "cat"; // cow Error

  const animal2: Extract<Animals, "cow"> = "cow"; // cat Error

  const animal3: NonNullable<Animals> = "cat"; // null Error

  class T1 {
    name = "Rodion";
    age = 26;
  }

  type IT1 = InstanceType<typeof T1>;

  const t1: IT1 = {
    name: "Alex",
    age: 20,
    // id: 1 // Error
  };

  const str: Uppercase<string> = "RODION";
  const str2: Lowercase<string> = "rodion";
  const str3: Capitalize<string> = "Rodion";
  const str4: Uncapitalize<string> = "rodion";
}
