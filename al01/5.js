// function solution(a,b,c,d,e,f,g) {
//     let answer = [a,b,c,d,e,f,g];
//     let num = a;

//     for(i=1;i<=answer.length-1;i++) {
//         num = (num<answer[i])?num:answer[i];
//     }
//     return num;
// }

// console.log(solution(5,3,7,11,2,15,17));

function solution(arr) {
    // let answer = arr[0];
    let answer = Number.MAX_SAFE_INTEGER;

    /*
    for(let i=0; i<arr.length; i++) {
        answer = (answer<arr[i])?answer:arr[i];
    }
    */

    /*
    arr.forEach(element => {
        answer = (answer<element)?answer:element;
    });
    */

    // answer = Math.min(...arr);
    answer = Math.min.apply(null, arr);

    return answer;
}

console.log(solution([5,3,7,11,2,15,17])); //2
