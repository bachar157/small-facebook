export default class User {
    #id;
    #name;
    #userName;
    #email;
  
    constructor(id, name, userName, email) {
      this.#id = id;
      this.#name = name;
      this.#userName = userName;
      this.#email = email;
    }
  
    getInfo() {
      return `User: ${this.#name}, Username: ${this.#userName}, Email: ${this.#email}`;
    }
  
    getName() {
      return this.#name;
    }
  }
  