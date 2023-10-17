// function test1() {
//     setTimeout(() => {
        // console.log('you should wait till I am loading')
//     }, 3000);
// }

// async function Test() {
//     await test1()
    // console.log("this is async function")
// }

// Test()

// const Async = function () {
    // console.log('settimeOut')
// }
// const headingChange = function () {
//     document.getElementById('async-head').innerHTML = "The best JavaScript Tutorial"
// }
// const change = setTimeout(headingChange, 2000); // the different way to use settimeout

// // function stop(){
    // console.log("heading change stopped")
// //     clearTimeout(change)
// // }
// //other way
// document.getElementById('stop').addEventListener('click', () => {
    // console.log("heading change stopped")
//     clearTimeout(change)
// })

// //setinterval
// const name = function(){
    // console.log('Nagesh', Date.now())
// }
// const clearMe = setInterval(name, 2000);
// document.getElementById('stopChange').addEventListener('click',()=>{
//         clearInterval(clearMe)
        // console.log('interval has been stopped now')
//     })
//     document.getElementById('startint').addEventListener('click', function(){
//             setInterval(name,1000)
//         })


// let changeBG;

// const startBGChange = function(){
//     document.body.style.backgroundColor = random
    // console.log('start change');
// }

// const stopBGChange = function(){
//     document.body.style.backgroundColor = random
    // console.log('stop change');
// }
let changeColor
document.getElementById('startChange').addEventListener('click', () => {
    changeColor = setInterval(() => {
        // console.log('start Change');
        let random = `#${Math.floor(Math.random() * 999999)}`;
        document.body.style.backgroundColor = random
    }, 100);
})
document.getElementById('stopChange').addEventListener('click', () => {
    clearInterval(changeColor)
    // console.log('stop color change')
    // changeColor = null
})

let insert = document.getElementById('table')

window.addEventListener('keypress', (e) => {
insert.innerHTML = `
<table style="width:100%;border: 1px solid red;">
<tr style="border: 1px solid black; color:white;">
  <td style="border: 1px solid white;">Key</td>
  <td style="border: 1px solid white;">Keycode</td>
  <td style="border: 1px solid white;">code</td>
</tr>
<tr style="border: 1px solid black; color:white;">  
    <td style="border: 1px solid white;">${e.key===' '? 'Space':e.key }</td>
              <td style="border: 1px solid white;">${ e.keyCode }</td>
              <td style="border: 1px solid white;">${ e.code }</td>
              </tr>
              </table>`
            //   console.log(e.key)
})
// const apiCall = async()=>{
//     setTimeout(() => {
        // console.log('I am a promise because I have used in async function');
//     }, 2000);
// }

// const apiSync = async()=>{
//     const apiResult = await apiCall()
// }

// const apiSyncResult = apiSync()
// const apiSyncResult1 = apiCall()
// console.log(apiSyncResult, apiSyncResult1)


const weather = async()=>{
    const bangloreWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27 Deg")
        }, 3000);
    })

    const DelhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('21 Deg')
        }, 7000);
    })
    // console.log(`Banglore weather is loading...`)    
    const bangloreW = await bangloreWeather;
    // console.log(`Banglore Temprature is ${bangloreW}`)    
    // console.log(`Delhi weather is loading...`)    
    const delhiW = await DelhiWeather;
    // console.log(`Delhi Temprature is ${delhiW}`)    
}
weather()

