const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfStrings: Array<string> = ["1", "2", "3", "4", "5"];

function reverse<T>(array: T[]) {
  return array.reverse();
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));
