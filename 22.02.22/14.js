// 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램
function solution(str) {
    let answer = "";
    
    for(let i=0; i<str.length; i++) {
        if(str[i].length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴
        if(answer.length<str[i].length) answer = str[i];
    }

    return answer;
}
console.log(solution(["teacher", "time", "student", "beautiful", "good"])); // beautiful