//Var Keyword
// var a = 10
// const Var = (function(){
//     var x  = 20
//     var y = 30
//     var a = "Ram"
//     return console.log(a-y)
// })()
// console.log(a)

// function test(){
//     let x = 10;
//     if(x == 10){ //x = 10
//         let x = 2;
//         console.log(x); //x = 10
//     }
//     console.log(x)
// }
// test()
// console.log(a)

//hoisting 
// Test()
// function Test(){
//     console.log('Good Morning')
// }

// console.log(y) // Undefined
// console.log(x) //Error cannot access 'X' before initialization
// let x = 10
// var y = 10

// {
//     var d = 10
// }
// console.log(d);

// function Test(){
//     if(1 == 1){
//         let x = 10;
//         var y = 20;
//     }
//     console.log(y) // 20 as this is assigned with var keyworkd and it has immediate function body
//     console.log(x) // x is undefined  as let keword has immideate block level 
// }
// Test()

//trixky question 
var d = "10";
var d1 = "10";
console.log(d + d1) // 20
var i = 10;
var i1 = 10
console.log(i +i1+"4") // 204