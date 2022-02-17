function solution(num) {
    let answer = 0;

    // Math.floor() 내림, Math.round() 반올림, Math.ceil() 올림
    // answer = Math.ceil(num/12);
    if(num>0) {
        answer = num%12===0?num/12:parseInt(num/12)+1;
    }
    //answer = parseInt(num/12);
    return answer;
}

console.log(solution(25)); //3
console.log(solution(178)); //15