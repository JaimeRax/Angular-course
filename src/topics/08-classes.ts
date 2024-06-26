export class Person {
  // public name: string;
  // public address: string;

  constructor(
    public firstname: string,
    public lastname: string,
    public address: string = "No Address",
  ) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,
//   ) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) {
    // this.person = new Person(realName);
  }
}
const tony = new Person("Tony", "Stark", "New Person");

const ironman = new Hero("Ironman", 45, "Tony", tony);

console.log(ironman);
