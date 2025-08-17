// // type annotation
// let userName:string = 'Max';
// let age:number = 30;
// let all:any; // => take any data type
// all = 10;
// all = '10';

// -------------------------------------------------------------------------------------------------------------------------
// // any type (with specific types)
// let all2: string | number; // (string | number)
// all2 = 10;
// all2 = '10';
// // all2 = true; // error
// let myFriends1: string[] = ['karim', 'ahmed', 'omar'];
// let myFriends2: (string | number)[] = ['karim', 'ahmed', 'omar',10];

// -------------------------------------------------------------------------------------------------------------------------
// function add(n1:number, n2:number){
//     return n1 + n2;
// }
// console.log(add(5,8));

// -------------------------------------------------------------------------------------------------------------------------
// // Type annotation with nested arrays
// // ((#07))
// let arr: (string | number | string[])[]  = [1,2,3, "A", "B", ['C', 'D']];
// let arr2: (string | number | (string | number | boolean)[])[]  = [1,2,3, "A", "B", ['C', 'D', 15, true]];
// let arr3 = [1,2,3, "A", "B", ['C', 'D', 15, true]] // => (string | number | (string | number | boolean)[])[]

// -------------------------------------------------------------------------------------------------------------------------
// // Type Annotations With Function
// // #08
// // "noUnusedLocals": true, // عشان لو عامل متغير ومش مستخدمه يرجعلي خطأ
// // "noUnusedParameters": true // عشان يرجعلي خطأ لو عامل باراميتر في دالة ومش مستخدمه 
// // "noImplicitAny": true // عشان يرجعلي خطأ لو محددتش نوع الداتا تايب
// // "noImplicitReturns": true, // عشان لو الدالة في حالة فيها مش مرجعه قيمة يظهرلي خطأ
// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ in tsconfig.json ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let showMsg = true;
// function showDetails(name: string, age: number, salary: number): (string | undefined) {
//     if(showMsg == true){
//         return `Hello ${name} your age is ${age} and your salary is ${salary}`;
//     }
//     return 'no data';
// }
// console.log(showDetails('Ahmed', 30, 5000));

// -------------------------------------------------------------------------------------------------------------------------
// // Function Optional and Default Parameters
// // ((#09))
// function showData(name: string = "unknown", age:number, country?:string) { // var? => optional parameter
//     return `${name} - ${age} - ${country}`;
// }
// console.log(showData("Karim", 21));

// -------------------------------------------------------------------------------------------------------------------------
// // Function Rest Parameter => unknown number of parameters
// // ((#10))
// function addAll(...nums: number[]){
//     let result = 0;
//     nums.forEach(n => result += n);
//     return result;
// }
// console.log(addAll(1,2,3,4,5.5, +true));

// -------------------------------------------------------------------------------------------------------------------------
// // Type Annotations With Anonymous And Arrow Function
// // ((#11))
// // 1 - Anonymous Function
// const add = function(num1:number, num2:number):number{
//     return num1 + num2;
// }
// console.log(add(5,8));
// // 2 - Arrow Function
// const add2 = (num1:number, num2:number):number => num1 + num2;
// console.log(add2(5,8));

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Type Alias => الإسم المستعار
// // ((#12))
// type st = string;
// type standnum = string | number | string[] | number[];
// let theName: st= "karim";
// theName = "ali";
// let theAges: standnum = [30, 40, 50];
// let theNames: standnum = ["karim", "ahmed", "omar"];

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Type Alias Advanced
// // ((#13))
// type Buttons = {
//     up: string,
//     right: string,
//     down: string,
//     left: string
// }
// // add features to alias
// type AddButtons = Buttons & {
//     x : boolean
// }
// function getActions(btns: AddButtons){
//     console.log(`Action For Button Up is ${btns.up}`);
//     console.log(`Action For Button Right is ${btns.right}`);
//     console.log(`Action For Button Down is ${btns.down}`);
//     console.log(`Action For Button Left is ${btns.left}`);
// }
// getActions({up: 'up', right: 'right', down: 'down', left: 'left', x: true});

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Literal Types
// // ((#14))
// type nums = 0 | 1 | -1;
// function compare(num1:number, num2:number):nums{
//     if(num1 > num2){
//         return 1;
//     }else if(num1 < num2){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// console.log(compare(10,20)); // -1
// console.log(compare(20,20)); // 0
// console.log(compare(20,10)); // 1
// let myNumber: nums = 0;

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Tuple
// // ((#15))
// // -- Is another sort of array type
// // -- It is a fixed length array -> we know the number of elements it contains
// // -- We know the type of each element and in any position
// // 1- tuble in default mode
// let atricle: [number, string, boolean] = [1 , "Tile One", true]; // id:number, title:string, isPublished:boolean
// atricle = [2 , "Tile Two", false];
// atricle.push(100); // typescript allow this not return error
// // 2- tuble in readonly mode
// let atricle2: readonly [number, string, boolean] = [3 , "Tile Three", true]; // id:number, title:string, isPublished:boolean
// atricle2 = [4 , "Tile Four", false];
// // atricle2.push(100); // typescript not allow this and return error -> in readonly mode
// const [id, title, isPublished] = atricle2; // tuple destructuring

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Void And Never
// // ((#16))
/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/
// function logging(msg: string): void {
//   console.log(msg);
// }
// function logging2(msg: string): void {
//   throw new Error(msg);
// }
// console.log(logging("Hello1"));
// console.log("Test1");
// console.log(logging2("Hello3"));

// function error(msg: string): never { // not have end point
//   throw new Error(msg);
// }
// console.log(error("Hello2"));
// console.log("Test2");

// function alwaysLog():never{ // not have end point
//   while(true){
//     console.log("Test3");
//   }
// }
// alwaysLog();
// console.log("Test2"); // Unreachable code detected -> because the function alwaysLog is infinite loop and not have end point

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Enums Part 1
// // ((#17&18))
/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/
// // the way programmer write related constants in past
// const kids = 15;
// const easy = 9;
// const medium = 6;
// const hard = 3;
// // the way enums work => **NOTE: enums is constants can't be changed**
// enum Kids{
//   five = 25,
//   seven = 20 - 1,
//   ten = 15 + 0.5,
//   fifteen = ten
// }
// enum Level {
//   kids = Kids.ten,
//   easy = 9,
//   medium = 6,
//   hard = getHardNumber(),
// }
// // get methods
// console.log(Level.kids);
// console.log(Level['easy']);
// // can use for loop with enums
// for(let key in Level){
//   console.log(key, "=>", Level[key]);
// }
// function getHardNumber():number{
//   return 3;
// }

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Type Assertions
// // ((#19))
/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/
// // NOTE: HTMLImageElement is interface extends HTMLElement
// let myImage1 = document.getElementById("my-image") as HTMLImageElement;
// let myImage2 = <HTMLImageElement> document.getElementById("my-image");
// console.log(myImage1.src);
// console.log(myImage2.src);

// let myImage3 = document.getElementById("my-image");
// console.log((myImage3 as HTMLImageElement).src);

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Union And Intersection Types
// // ((#20))
// type A = {
//   one: string,
//   two: number,
//   three: boolean
// }
// type B = A &{
//   four: number,
// }
// type C = {
//   five: boolean,
// };

// type mix = A & C;
// type mix_2 = A | C;

// function getActionsWithIntersection (btn: mix){
//   console.log(`Action For Button One is ${btn.one}`);
//   console.log(`Action For Button Two is ${btn.two}`);
//   console.log(`Action For Button Three is ${btn.three}`); 
//   console.log(`Action For Button Three is ${btn.five}`); 
// }
// function getActionsWithUnion (btn: mix_2){ // لاحظ لو هستخدم الأتحاد يعني ممكن واحده منهم الي تيجي عشان كدا بعمل جمله شرطية
//   if ("one" in btn) console.log(`Action For Button One is ${btn.one}`);
//   if ("two" in btn) console.log(`Action For Button Two is ${btn.two}`);
//   if ("three" in btn) console.log(`Action For Button Three is ${btn.three}`); 
//   if ("five" in btn) console.log(`Action For Button Five is ${btn.five}`); 
// }
// getActionsWithIntersection({ two: 2,one: 'one', three: true, five: false });
// getActionsWithUnion({ two: 4,one: 'one|one', three: false, five: true });

// -------------------------------------------------------------------------------------------------------------------------
// // Data Types - Type Annotations With Object
// // ((#21))
// type TypeObject = {
//   readonly username: string,
//   id: number,
//   age: number,
//   country: string,
//   hire?:boolean,    // optional
//   skills?:{         // optional
//     one?: string,   // optional
//     two?: string,   // optional
//     three?: string, // optional
//   }
// }
// let myObject: TypeObject = {
//   username: "Ahmed",
//   id: 1,
//   age: 30,
//   country: "Egypt",
//   skills: {
//     one: "HTML",
//     // two: "CSS",
//     // three: "JS",
//   }
// }
// // myObject.username = "karim"; // can't change value of username because its in readonly mode
// if (myObject.skills) { // we use here -> (TypeScript Type Narrowing) -> بعمل وضع امن من خلال جملة شرطية او مايسمي بالتضييق في النوع
//   myObject.skills.one = "JS";
// }
// myObject.skills!.two = "React"; // we use here -> (Non-null assertion -> value not null or undefined -and- sure) -> معناها اتأكد ان في قيمة مش غير معرفة
// myObject.skills = {...myObject.skills, three: "Python"};
// console.log(myObject.username);
// console.log(myObject.skills);      // undefined if not exist
// console.log(myObject.skills?.one); // undefined if not exist -> we use here (Optional Chaining -> value not null or undefined -but not sure) -> 
// console.log(myObject.skills!.two); // undefined if not exist
// console.log(myObject.hire);        // undefined if not exist
// // **NOTE: Non-null assertion(!.)(for change value or access) && Optional Chaining(?.)(for access value only)

// -------------------------------------------------------------------------------------------------------------------------
// // Interface Declaration
// // ((#22))
/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/
// interface User {
//   id: number,
//   readonly username: string,
//   country?: string
// }
// let user: User = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt"
// }
// user.country = "Syria";
// console.log(user);
// function getData(data: User) {
//   console.log(`Id Is ${data.id}`);
//   console.log(`Username Is ${data.username}`);
//   console.log(`Country Is ${data.country}`);
// }
// getData({ id: 200, username: "Osama", country: "KSA" });

// -------------------------------------------------------------------------------------------------------------------------
// // Interface Method And Parameters
// // ((#23))
// interface User {
//   id: number,
//   username:string,
//   country?: string,
//   sayHello(): string,
//   sayWelcome: ()=>string,
//   getDouble(num: number): number
// }
// let user: User = {
//   id: 100,
//   username: "Karim",
//   country: "Egypt",
//   sayHello() {
//     return `Hello ${this.username}`;
//   },
//   sayWelcome:()=> {
//     return `Welcome ${user.username}`;
//   },
//   getDouble(n) {
//     return n * 2;
//   }
// }
// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getDouble(5));

// -------------------------------------------------------------------------------------------------------------------------
// // Interface Reopen And Use Cases
// // ((#24))
// interface Settings {
//   readonly theme: boolean,
//   font: string;
// }
// interface Settings {
//   sidebar?: boolean,
// }
// let userSettings: Settings = {
//   sidebar: true,
//   theme: true,
//   font: "Arial"
// }

// -------------------------------------------------------------------------------------------------------------------------
// // Interface Extend
// // ((#25))
// interface User{
//   id: number,
//   username: string,
//   country?: string
// }
// interface Modirator extends User{
//   role: string | number
// }
// interface ExtraPermissions {
//   protect?: boolean
// }
// interface Admin extends Modirator, ExtraPermissions{
//   is_superuser: boolean
// }
// let user: Admin = {
//   id: 100,
//   username: "Karim",
//   country: "Egypt",
//   role: "Admin",
//   protect: true,
//   is_superuser: true
// }
// console.log(user.id)

// -------------------------------------------------------------------------------------------------------------------------
// // Class Type Annotations
// // ((#27))
// class User {
// // if you want to make properties private use private
// // private u: string;
// // if you want to make properties protected use protected
// // protected u: string;
//   u: string;
//   s: number;
//   msg: () => string
//   constructor(username: string, salary: number) {
//     this.u = username;
//     this.s = salary;

//     this.msg = () => {
//       return `${this.u} has ${this.s} salary`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.u} your salary is ${this.s}$`;
//   }
// }
// const user1 = new User("Ahmed", 5000);
// console.log(user1.msg());
// console.log(user1.sayMsg());
// -------------------------------------------------------------------------------------------------------------------------
// // Class Access Modifiers And Parameters Properties
// // ((#28))
// class User {
//   msg: ()=> string
//   constructor(private username: string, protected salary: number, public readonly address:string) {
//     this.username = username + " added by class";
//     // this.address = "asd"; // you can change value of readonly inside constructor only
//     this.msg = function () {
//       return `${this.username} has ${this.salary} salary, and his address is ${this.address}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.username} your salary is ${this.salary}$`;
//   }
// }
// const user1 = new User("Karim", 5000, "Cairo");
// // user1.address = "Aasdasdasdsd"; => can't change value of address because its in readonly mode
// console.log(user1.msg());
// console.log(user1.sayMsg());
// -------------------------------------------------------------------------------------------------------------------------
// // Class Get And Set Accessors (getters and setters) to access and set private properties
// // ((#29))
// // **NOTE: we user ("_" or any other character) before property name to make it defferent from its real name and real name use it in getter and setter
// class User {
//   msg: ()=> string
//   constructor(private __username: string, protected salary: number, public readonly address:string) {
//     this.__username = __username + " added by class";
//     this.msg = function () {
//       return `${this.__username} has ${this.salary} salary, and his address is ${this.address}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.__username} your salary is ${this.salary}$`;
//   }
//   public get username():string{ // can use public or not -> any property or method by default is public
//     return this.__username;
//   }
//   public set username(value:string){ // can't make return type annotation for setter
//     this.__username = value;
//   }
// }
// const user1 = new User("Karim", 5000, "Cairo");
// console.log(user1.username);
// user1.username = "Mohamed";
// console.log(user1.username);
// -------------------------------------------------------------------------------------------------------------------------
// // Class Static Members -> Don ' t Use, "name, length, call"
// // ((#30))
// class User {
//   private static _count: number = 0;
//   static created: number = 0;
//   static allUsers: User[] = [];
//   static objects = { // object literal -> inferred
//     count(){ // count: () => number;
//       return User.created;
//     },
//     all() {
//       return User.allUsers;
//     },
//     filter(name: string) {
//       return User.allUsers.filter(u => u.username === name);
//     }
//   }
//   constructor(public username: string) {
//     User.created++;
//     User.allUsers.push(this);
//   }
//   get count():number{
//     return User._count;
//   }
//   set count(value:number){
//     User._count = value;
//   }
// }
// let user1 = new User("Karim");
// let user2 = new User("Ahmed");
// console.log(user1.count);
// user2.count = 100; // can change static property with setter
// console.log(user1.count);
// console.log(User.created);
// console.log(User.objects.count());
// console.log(User.objects.all());
// console.log(User.objects.filter("Karim"));

// -------------------------------------------------------------------------------------------------------------------------
// // Class Implements Interface -> **NOTE: we use implements keyword to implement interface to classes and use extends with interfaces to use it with another interface
// // ((#31))
// interface Settings { // can use type or interface
//   theme: boolean,
//   font?: string;
//   save: () => void
// }
// class User implements Settings {
//   constructor(public username: string, public age: number, public theme: boolean) {}
//   save():void{
//     console.log(`Saved`);
//   }
//   update():void{
//     console.log(`Updated`)
//   }
// }
// const user1 = new User("Karim", 20, true);
// console.log(user1.username);

// -------------------------------------------------------------------------------------------------------------------------
// // Abstract Classes And Members
// // ((#32))
/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/
// abstract class Food {
//   constructor(public title: string) { }
//   abstract getCookingTime(): void ; // cannot have an implementation because it is marked abstract.
// }
// // const testFood = new Food("Pizza"); // Can't Create An Instance Of An Abstract Class
// class Pizza extends Food{
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime():void{ // you must implement abstract method in child class
//     console.log(`The cooking time for Pizza is 30 minutes`);
//   }
// }

// class Burger extends Food{
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime():void{ // you must implement abstract method in child class
//     console.log(`The cooking time for Burger is 20 minutes`);
//   }
// }
// const pizza_1 = new Pizza("Pizza 1", 100);
// const burger_1 = new Burger("Burger 1", 60);
// console.log(pizza_1.title);
// pizza_1.getCookingTime();
// console.log(burger_1.title);
// burger_1.getCookingTime();

// -------------------------------------------------------------------------------------------------------------------------
// // Polymorphism And Method Override
// // ((#33))
/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class
  
  --- noImplicitOverride
*/
// class Player{
//   constructor(public name: string) {}
//   attack():void{
//     console.log(`Attacking Now`);
//   }
// }
// class Amazon extends Player{
//   constructor(name: string, public spears: number) {
//     super(name);
//   }
//   override attack():void{
//     super.attack();
//     console.log(`Attacking With Spear`);
//     this.spears -= 1;
//   }
// }
// class Barbrian extends Player{
//   constructor(name: string, public axeDurability: number) {
//     super(name);
//   }
//   override attack():void{
//     super.attack();
//     console.log(`Attacking With Axe`);
//     this.axeDurability -= 1;
//   }
// }
// let barOne = new Barbrian("Karim", 100);
// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);

// -------------------------------------------------------------------------------------------------------------------------
// // Generics Introduction
// // ((#34))
/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/
// function returnType<genericType>(val: genericType):genericType{ // <genericType> -> can change name "genericType" to any name you want -> EX: <T>
//   return val
// }
// console.log(returnType<number>(10));
// console.log(returnType<string>("Karim"));
// console.log(returnType<boolean>(true));

// -------------------------------------------------------------------------------------------------------------------------
// // Generics Multiple Types
// // ((#35))
/*
  Generic Types
  - Arrow Function
  - Multiple Types
  - Discussion
*/
// // Arrow Function
// const returnTypeArrowSyntax = <T>(val: T): T => val;
// console.log(returnTypeArrowSyntax<string>("Karim"));
// // return different Types
// function returnTestType<T>(val: T): string {
//   return `The Value is ${val}, Type is ${typeof val}`;
// }
// console.log(returnTestType<number>(100));
// // Multiple Types
// const multipleTypes = <T1, T2, T3>(valOne: T1, valTwo: T2, valThree: T3): string => {
//   return `The Value is one is ${valOne}, The Value is two is ${valTwo}, The Value is three is ${valThree}`;
// }
// console.log(multipleTypes<number, string, boolean>(100, "Karim", true));
// console.log(multipleTypes<number, string[], boolean>(100, ["Ahmed", "Mohamed"], true));

// -------------------------------------------------------------------------------------------------------------------------
// // Generics Classes
// // ((#36))
// class User<T = string, T2 = number> { // <T = string> -> default value
//   constructor(public value: T, public value2: T2) { }
//   show(msg: string): void {
//     console.log(`${msg} - ${this.value}, ${this.value2}`);
//   }
// }
// let user1 = new User("Karim", 21);
// console.log(user1.value);
// user1.show("Hello");

// let user2 = new User<string[], number>(["Karim", "Ahmed"], 25);
// console.log(user2.value);
// user2.show("Hello");

// let user3 = new User<number | string, number[]>(100, [15,20]);
// console.log(user3.value);
// user3.show("Message");

// -------------------------------------------------------------------------------------------------------------------------
// // Generics And Interfaces
// // ((#37))
// interface Book {
//   itemType: string,
//   title: string,
//   isbn: number,
// }
// interface Game {
//   itemType: string,
//   title: string,
//   style: string,
//   price: number,
// }
// class Collection<T> {
//   public data: T[] = [];
//   add(item: T): void {
//     this.data.push(item);
//   }
// }
// let itemsOne = new Collection<Book>(); // ites mean generic type is <Book>
// let itemsTwo = new Collection<Game>(); // ites mean generic type is <Game>
// itemsOne.add({itemType: "Book_1", title: "Book One", isbn: 1234});
// itemsOne.add({itemType: "Book_2", title: "Book Two", isbn: 1256});
// itemsTwo.add({itemType: "Game_1", title: "Game One", style: "Action", price: 100});
// itemsTwo.add({itemType: "Game_2", title: "Game Two", style: "driving", price: 150});
// console.log(itemsOne);
// console.log(itemsTwo);

// -------------------------------------------------------------------------------------------------------------------------
// // The End And How To Master Typescript
// // ((#38))
/*
  - How To Continue
  - Practice
  - Other Topics Not In The Tutorial
  - JSDocs
  - TsConfig
*/