function sum(x,y) {
    let ret;
    ret = x+y;
    return ret;
}

let sum2 = function(x,y) {
    return x+y;
}


console.log(sum(1,2));
console.log(sum2(4,5));
console.log(sum3(2,5));


function sum3(x,y) {
    let ret;
    ret = x+y;
    return ret;
}

let sum4 = function(x,y) {
    return x+y;
}

console.log(sum4(14,2));


let sum5 = (x,y)=>x+y;
let sum6 = (x,y)=>(x+y);
let sum7 = (x,y)=>{return x+y};

console.log("10+20 = ", sum5(10,20)); //30
console.log("1+5 = ", sum6(1,5)); //5
console.log("2+7 = ", sum7(2,7)); //9