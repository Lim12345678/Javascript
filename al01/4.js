//자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램
function solution(num) {
    let answer = 0;

    for(i=1;i<=num;i++) {
        answer += i;
    }
    return answer;
}

console.log(solution(6)); //21
console.log(solution(10)); //55
console.log(solution(100)); //5050