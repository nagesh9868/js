// console.log("callback function")
const helloWorld = ()=>{
    alert('Hello World')
}

const anotherFn = ()=>{
    setTimeout(() => {
        // console.log('This is another Function')
    }, 5000);
}

const loadAfterSometime = (script)=>{
        // console.log(script)
        anotherFn()
}

loadAfterSometime("jai sree Ram" , anotherFn);

const arr1 = [1,2,3,4,5];
const result = arr1.map((d)=>d*2);
// console.log(result);

setTimeout(() => {
    // console.log('this is setTimeout')
}, 1000);

const func1 = (callback)=>{
    // console.log("this is func1");
    callback()
}
const func2 = ()=>{
    // console.log("this is func2");
}
func1(()=>{
    // console.log('this is func2')
})
