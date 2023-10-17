// const arrow = () => {
//     console.log("Arrow Function!!")
// }
// arrow()
// //it could be written like this also 
// const arrow1 = () => console.log("Arrow1 Function!!")// Not recommended to use without curly braces as the readablity of code getting down
// arrow1()
// //it could be written like this also 
// const arrow2 = () => console.log("Arrow2 Function!!"); console.log("Arrow2 Function2")
// arrow2()
// //The argument could be passed as below 
// const arrow3 = (name) => console.log("Good Morning " + name)
// arrow3("Nagesh")
// //And it is not required to give the brackets for single argument
// const arrow4 = name => console.log("Good Morning " + name)
// arrow4('Ram')
// //for two or more agument we need to provide the brackets
// const arrow5 = (greeting, name) => console.log(greeting + name)
// arrow5("Good Morning ", 'Ram')

// const x = {
//     name: "Nagesh",
//     language: "Angular",
//     exp: 12,
//     this: console.log(this),
//     //if you use this keyword in an object or a Arrow function then it is an window object
//     show: () => { console.log(`My name is ${this.name}`) },
//     //but when you use this keword in an object function where the function is created with "function" keword then it is considered as current object as below
//     show1: function () { console.log(`My Name is ${this.name}\nI am a ${this.language} Developer`) },
//     //running the same function within settimeOut and making the settimeout with fucntion keyword
//     show2: function () {
//         let that = this
//         setTimeout(function(){
//             console.log(`My Name is ${that.name}\nI am a ${that.language} Developer`)
//         }, 2000)
//     },
//     //running the same function within settimeOut and making the settimeout with arrow function
//     show2: function () {
//         // let that = this == no need to write this as now this is lexical this and it took the properties from its parent
//         setTimeout(()=>{
//             console.log(`My Name is ${this.name}\nI am a ${this.language} Developer`)
//         }, 2000)
//     }
// }
// x.show()
// x.show1()
// x.show2()


// const obj = {
//     simple(){
//         console.log(this);
//         return this
//     }
// }

// const a = obj.simple

// console.log(obj.simple() == window);
// console.log(a() == window);

// function test(){};
// const test = ()=>{};

// const name = "Nagesh"
// function test(){
//     console.log(`My name is ${this.name}`)
// }
// test() // my name is Nagesh
// const x = {
//     name : "Nagesh",
//     test : function(){
//         // let that: this;
//         let test1 = ()=>{
//             console.log(`My name is ${this.name}`)
//         }
//     }
// }
// x.test() // my name is undefined

// function test(){
//     console.log(arguments)
// }
// test(1,2,3) // [Arguments] { '0': 1, '1': 2, '2': 3 }

// const test = ()=>{
//     console.log(arguments)
// }
// test(1,2,3,4,5) // argument is not defined

// function person(name){
//     this.name = name
// }
// const john = new person("John")
// console.log(john)

// const person = (name)=>{
//     this.name = name
// }
// const john = new person('John')
// console.log(john)

obj = {
    name: 'Nagesh',
    show: function (){
        setTimeout(()=>{
            console.log(this.name)
        }, 2000);
    }
}
obj.show()// Nagesh from its surrounding scope