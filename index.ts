/**
 * 1. Generic Function
 * 2. Optional Parameters
 * 3. Required Parameters
 * 4. Rest Parameters
 */
function add(num1: number, num2: number) {
  console.log(num1 + num2);
}

function add2(num1: number, num2: number): number {
  return num1 + num2;
}
const sub = (num1: number, num2: number): number => num1 - num2;

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

function generic<Type>(item: Type): Type[] {
  return new Array<Type>(item);
}
console.log(generic(1));
console.log(generic("ahmed"));
console.log(generic(["ahmed", "mohamed"]));
