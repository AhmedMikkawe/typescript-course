/**
 * 1. Creating Interface
 * 2. Using Interface as Types
 * 3. Implementing Interface
 * 4. Extending Interface
 * 5. Optional Properties
 * 6. Object destructuring
 * 7. Array destructuring
 */

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

class User implements User {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
  }
}
let u = new User({ id: 1, name: "Ahmed", age: 26, email: "ahmed@mikkawe.com" });
console.log(u);
