export class Person {
  public name: string;
  public address: string;

  constructor() {
    this.name = "Jaime";
    this.address = "Coban";
  }
}

const ironman = new Person();

console.log(ironman);
