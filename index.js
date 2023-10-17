//How many ways are there to create JavaScript objects

// //1. Object Literal
// const obj1 = {}
// const obj2 = {
//     name: 'Ram'
// }
// const obj3 = {
//     name: 'Nagesh',
//     show: function () {
//         return this.name
//     }
// }
// console.log(obj1);
// console.log(obj2.name);
// console.log(obj3.show());

// //2. Object.create()
// const objx = {
//     Make: "BMW",
//     Model: "gwa400"
// }

// const electricCar = Object.create(objx)
// console.log(electricCar.Make);

// //3. Object Constructor(Not Recomended)
// const obja = new Object()

// //4. function constructor
// function employee(name, age){
//     this.name = name;
//     this.age = age;
// }
// let objEmp = new employee('Nagesh', "40")
// console.log(objEmp);
// console.log(objEmp.name);

// //5. function constructor with Prototype
// function person(){};
// person.prototype.name = "Nagesh";
 
// const objPer = new person()
// console.log(objPer.name);

// //6. ES6 Class syntax
// class student{
//     constructor(name){
//         this.name = name;
//     }
//     show = ()=>{
//         return this.name
//     }
// }

// const objStudent = new student('Amit')
// console.log(objStudent.name);
// console.log(objStudent.show());

// //7. singleton Pattern
// const objName = new function(){
//     this.name = "Ram"
// }
// console.log(objName.name);

//inheritence 
const obj = {
    name: 'Nagesh',
    age : 64
}
console.log(obj);