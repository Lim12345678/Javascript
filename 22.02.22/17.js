// 중복단어제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램
function solution(str) {
    let answer = [];

    for(let i=0; i<str.length; i++) {
        if(str[i].length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴
        if(str.indexOf(str[i])===i) answer.push(str[i]);
    }

    return answer;
}
console.log(solution(["good","time","good","time","student"])); // good, time, student