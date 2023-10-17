console.log('Object Oriented Programming');

class hello{
    //Constructor
    constructor(){
        console.log("hello, Good Mornign")
    }
    //Prototype method
    hello(){
        console.log('Hello, Good Afternoon!!');
    }

}

// new hello() // hello, Good Morning

const Greet = new hello()

Greet.hello()