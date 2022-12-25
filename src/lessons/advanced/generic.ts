const cars: string[] = ["Ford", "Audi"];
const cars2: Array<string> = ["Ford", "Audi"];

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Promise resolve");
  }, 2000);
});

const promise2: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
});

promise.then((data) => {
  console.log(data.toLocaleLowerCase());
});

promise2.then((data) => {
  console.log(data);
});

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: "Rodion" }, { age: 26 });
console.log(merged.name);
console.log(merged.age);

const merged2 = mergeObjects({ model: "Ford" }, { year: 2010 });

// const merged3 = mergeObjects({ a: "aaa" }, "bbb"); // Error
// console.log(merged3);

interface iLength {
  length: number;
}

function withCount<T extends iLength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `В этом объекте ${value.length} символов`,
  };
}

console.log(withCount("Привет TypeScript"));
console.log(withCount(["I", "Am", "Array"]));
console.log(withCount({ length: 20 }));

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: "Rodion",
  age: 26,
};

console.log(getObjectValue(person, "name"));
console.log(getObjectValue(person, "age"));
// console.log(getObjectValue(person, "job")); // Error

class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(["I", "Am", "Strings"]);
strings.add("!");
strings.remove("Am");
console.log(strings.items);

const number = new Collection<number>([0, 1, 2, 3]);
number.add(4);
number.remove(0);
console.log(number.items);

// const objs = new Collection([{ a: 1 }, { b: 2 }]); // Error
// objs.remove({ b: 2 }); // Error
// console.log(objs.items); // Error

interface MyCar {
  modelName: string;
  year: number;
}

function createAndValidateCar(modelName: string, year: number): MyCar {
  const car: Partial<MyCar> = {};

  if (modelName.length > 1) {
    car.modelName = modelName;
  }
  if (year > 2000) {
    car.year = year;
  }

  return car as MyCar;
}

interface Anim {
  name: string;
  say: () => void;
}

function anim(go: Partial<Anim>) {
  console.log(go.name);
  if (go.say) go.say();
}

anim({ name: "Dog" });

const anyCars: Readonly<Array<string>> = ["Ford", "Audi"];
// anyCars.shift(); // Error]
console.log(anyCars[1]);

const anyCars2: Readonly<{ model: string }> = { model: "Ford" };
// anyCars2.model = "Audi"; // Error
console.log(anyCars2);
