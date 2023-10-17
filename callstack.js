console.log('call stack')

function one(){
    console.log('this is function one');
    two()
}

function two(){
    console.log('this is function two');
    three();
}

function three(){
    console.log('this is function three');
}

one();
two();
three();

const a = 10;
const b = 20;
function sum(val1, val2){
    total = val1 + val2
    return total
}
const result1 = sum(a,b);
const result2 = sum(20, 30);

