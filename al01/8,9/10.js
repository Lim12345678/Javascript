// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램
function solution(str,ch) {
    let answer = 0;

    for(let s of str) {
        if(s===ch) answer++;
    }

    return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R")); // 3