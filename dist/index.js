"use strict";
// Basic types
let id = 8;
let company = "irfans company";
let isDeployed = true;
let x = "hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "irfan", true];
// Tuple array
let employee;
employee = [
    [1, "person1"],
    [2, "person2"],
    [3, "person3"],
];
// unions
let pid;
pid = "22";
// enums
var Directon1;
(function (Directon1) {
    Directon1["Up"] = "Up";
    Directon1["Down"] = "Down";
    Directon1["Left"] = "Left";
    Directon1["Right"] = "right";
})(Directon1 || (Directon1 = {}));
console.log(Directon1.Up);
const user = {
    id: 1,
    name: "john",
};
// type assertion
let cid = 1;
// let customerId=<number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "irfan",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
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
    constructor(id, name, postion) {
        super(id, name);
        this.positon = postion;
    }
}
const emp = new Employee(3, "irfan", "Developer");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["pers1", "peresd2", "pers3"]);
