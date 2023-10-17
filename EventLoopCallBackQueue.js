console.log("Event Loop and Callback queue")

const goToPurchaseDelay = (samanValue) => {
    console.log('le bhai apna Saamaan')
}

goToPurchaseDelay((samanValue) => {
    console.log(samanValue)
})

console.log(this)
console.log(window)

function doSomethingAsync(callback) {
    // Do something asynchronous
    setTimeout(function () {
        callback();
    }, 1000);
}
function main() {
    doSomethingAsync(function () {
        console.log("Something asynchronous happened");
    });
}
doSomethingAsync(main) //or 
main()

const promiseAbc = new Promise((resolve, reject)=>{
    const error = true
    if(!error){
        resolve('THe Promise has been resolve')
    }else{
        reject("The Promise has been rejected")
    }
})
promiseAbc.then((response)=>{
    console.log(response);
},(error)=>{
    console.log(error)
})
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>console.log('the promise has been completed'))
