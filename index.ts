/**
 * Data Types:
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Array
 * 5. Enum
 * 6. Tuple
 * 7. Any
 * 8. Void
 * 9. Never
 */
let firstName = "Ahmed";
let lastName: string = "Ahmed";
console.log(firstName.toUpperCase());

let age: number;
age = 2;
console.log(age);
let isValid: boolean = true;
console.log(isValid);

let studentList: string[];
studentList = ["ahmed", "ali"];
let ageList: Array<number> = [1, 2, 3];
console.log(studentList);
console.log(ageList);

enum Colors {
  Red,
  Green,
  Blue,
}
let red = Colors.Red;
console.log(red);
const enum AnotherColors {
  Black,
  White,
}
console.log(AnotherColors.Black);

let tuple: [number, number] = [1, 3];
tuple[1];
//tuple[4];
