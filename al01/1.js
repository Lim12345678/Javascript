//세 수 중 가장 작은 수 구하기
function solution(a,b,c) {
    let answer;

    // if(a>b) {
    //     answer = (b<c)?b:c;
    // } else {
    //     answer = (a<c)?a:c;
    // } 

    if(a>b) answer = (b<c)?b:c;
    else answer = (a<c)?a:c;

    //answer = (a>b)?((b<c)?b:c):((a<c)?a:c);


    return answer;
}

console.log(solution(2, 5, 10)); // 2
console.log(solution(6, 5, 11)); // 5
console.log(solution(100, -20, 50)); // -20