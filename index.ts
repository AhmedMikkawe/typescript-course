/**
 * 1. Creating Classes
 * 2. Class Properties and Constructor
 * 3. Class methods
 * 4. Creating Instance of Class
 * 5. Member Visibility
 * 6. Static Members
 */
class Student {
  id!: number;
  name!: string;
  address!: string;
}

let ahmed = new Student();
ahmed.id = 1;
ahmed.name = "Ahmed";
ahmed.address = "Egypt";
console.log(ahmed);

class Employee {
  id: number;
  name: string;
  address: string;
  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}
let emp = new Employee(1, "Ahmed", "Egypt");
console.log(emp);

class Player {
  #id: number;
  private id2: number;
  protected name: string;
  address: string;
  static variable = "this is static variable";
  constructor(id: number, id2: number, name: string, address: string) {
    // private property
    this.#id = id;
    this.id2 = id2;
    this.name = name;
    this.address = address;
  }
  getName(): string {
    return this.name;
  }
}
let p = new Player(1, 2, "Ahmed", "Egypt");
console.log(p.getName());
// getter and setters
