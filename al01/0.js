// 숫자 두 개 중 작은 수 찾기

function solution(a, b) {
    let answer;

    if(a>b) {
        answer = b;
    } else {
        answer = a;
    }
        
    return answer;
}

console.log(solution(1, 5)); // 1
console.log(solution(-10, 20)); // -10
console.log(solution(30, 20)); // 20