// 문자 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 문자가 문자열에 몇 개 존재하는지 알아내는 프로그램
function solution(str, char) {
    let answer = 0;

    if(str.length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴

    for(let s of str) {
        if(s===char) answer++;
    }

    return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R")); // 3