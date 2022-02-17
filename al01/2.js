function solution(a,b,c) {
    // let answer = "NO";
    let answer;

    /* if(a+b>c && a+c>b && b+c>a) {
         answer = "YES";
    }*/
    if(a>0 && b>0 && c>0) {
        answer = (a+b>c && a+c>b && b+c>a)?"YES":"NO";
    }
    return answer;
}

console.log(solution(6,7,11)); //YES
console.log(solution(13,33,17)); //NO