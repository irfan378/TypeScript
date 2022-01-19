// Basic types
let id: number = 8;
let company: string = "irfans company";
let isDeployed: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "irfan", true];

// Tuple array
let employee: [number, string][];
employee = [
  [1, "person1"],
  [2, "person2"],
  [3, "person3"],
];

// unions
let pid: string | number;
pid = "22";

// enums
enum Directon1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "right",
}
console.log(Directon1.Up);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john",
};

// type assertion
let cid: any = 1;
// let customerId=<number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
// void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "irfan",
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
// Classes
class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const per1 = new Person(1, "Person1");
const per2 = new Person(2, "Person2");
console.log(per1.register());
console.log(per1, per2);

// Subclass
class Employee extends Person {
  positon: string;
  constructor(id: number, name: string, postion: string) {
    super(id, name);
    this.positon = postion;
  }
}
const emp = new Employee(3, "irfan", "Developer");
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["pers1", "peresd2", "pers3"]);
