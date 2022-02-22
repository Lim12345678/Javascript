// A를 #으로
// 대문자로 이루어진 영단어 중 단어에 A가 포함될 경우 모두 #으로 바꾸어 출력하는 프로그램
function solution(str) {
    let answer = "";

    for(let s of str) {
        if(s==="A") {
            answer += "#";
        } else {
            answer += s;
        }
    }

    return answer;
}
console.log(solution("BANANA")); // B#N#N#