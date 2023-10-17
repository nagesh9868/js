// const person = function(name, gender, birthYear){
//     this.name = name;
//     this.gender = gender;
//     this.birthYear = birthYear
// }
// person.prototype.calcAge = function(){
//     return new Date().getFullYear() - this.birthYear
// }
// person.prototype.city = 'London'

// const Marry = new person('Marry', 'Female', 1977)
// console.log(Marry)
// console.log(Marry.calcAge())

// const Nagesh = new person('Nagesh', 'Male', 1992)
// console.log(Nagesh)
// console.log(Nagesh.calcAge())

// const Ram = new person("Ram", "Male", 1987)
// console.log(Ram)
// console.log(Ram.calcAge())

// console.log(Ram.__proto__ === person.prototype)
// console.log(person instanceof Object)
// console.log(person.__proto__.__proto__ === Object.prototype)

// //inheritance by prototype
// const array1 = ['Ram', 'Amit', 'Nagesh']
// //new Array
// console.log(array1);
// console.log(array1.__proto__ === Array.prototype)
// console.log(array1 instanceof Array)
// const obj1 = {
//     name: 'Ram',
//     age: 22
// }
// //new Object
// console.log(obj1);
// console.log(obj1.__proto__ === Object.prototype)
// console.log(obj1 instanceof Object)
// console.log(obj1.hasOwnProperty('age'))

// //JS classes are two types
// //class declaration

// // let Mark = new person('Mark', 1950,'Male')// cannot hoisted 
// class person{
//     constructor(name, birthYear, gender){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;

//         // this.calcAge = function(){
//         //     return new Date().getFullYear() - this.birthYear
//         // }
//     }
//     calcAge(){
//         console.log(new Date().getFullYear() - this.birthYear)
//     }
// }
// person.prototype.greeting = function (){
//     console.log('Good Morning '+ this.name)
// }

// let Ram = new person('Ram', 1987, 'Male');
// console.log(Ram);
// Ram.greeting()
// Ram.calcAge()
// //proto property is nothing but the prototype of Person object for example 
// console.log(Ram.__proto__ === person.prototype)

// //class expression 
// const person1 = class{
//     constructor(){

//     }
// }

// //Point to Remember, Classes cannot be hoisted
// //Classes are first class citizen
// //Classes are executed in strict mode