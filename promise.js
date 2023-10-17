// console.log('Promises in JS')

const promiseOne = new Promise((resolve, reject) => {
    //Do an Async Task | DB calls | cryptography | network
    setTimeout(() => {
        // console.log('This is promise1')
        resolve()
    }, 1000);
})
promiseOne.then(() => {
    // console.log('this runs after promise1')
})

//another way 
new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async Task 2');
        resolve()
    }, 2000)
}).then(() => {
    // console.log('Async 2 resolve');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is promiseThree', ({ name: "Nagesh", age: 25, email: "nagesh@test.com" }))
    }, 3000)
})

promiseThree.then((some, obj) => {
    // console.log(some, obj)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ name: "Nagesh", age: 34, email: "nagesh@test.com" })
        } else {
            reject({ error: 'The promise Four is not loaded' })
        }
    }, 4000);
})
// promiseFour.then((user) => {
    // console.log(user.name)
// }).catch((error) => {
    // console.log(error)
// }).finally(() =>
    // console.log('The Promise is either resolved or rejected')
// )

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ name: "Nagesh", age: 34, email: "nagesh@test.com" })
        } else {
            reject({ error: 'The promise Five is not loaded' })
        }
    }, 5000);
})
async function consumePromiseFive() {
    try {
        const result = await promiseFive
        // console.log(result.name)
    } catch (error) {
        // console.log(error.error)
    }
}
consumePromiseFive()

const fakeApi = 'https://jsonplaceholder.typicode.com/users';
async function fetchFakeApi() {
    const response = (await fetch(fakeApi)).json()
    try {
        // console.log(await response);
    } catch (error) {
        // console.log(error)
    }
}
fetchFakeApi()
const promiseFakeApi = new Promise((resolve, reject) => {
    const apiFetch = fetch(fakeApi);
    if (fakeApi) {
        resolve(apiFetch)
    } else {
        // console.log('Something went wrong')
    }
})
promiseFakeApi.then((user) => {
    return user.json()
}).then((data) => {
    // console.log(data);
})

fetch(fakeApi).then((response) => {
    return response.json()
})
    .then((users) => {
        // console.log(users)
    })
    // .catch((error) => console.log(error))

// for(var i = 0; i<5; i++){
//     setTimeout(() => {
        // console.log(i) // 5,5,5,5,5
//     }, 5000);
// }
// for(var i = 0; i<5; i++){
//     setTimeout(() => {
        // console.log(i)
//     }, 1000);
// }

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        // console.log(i)
    }, 2000);
}