// 대문자로 이루어진 영단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램
function solution(word) {
    let answer = "";

    for(let s of word) {
        // answer += (n==="A")?'#':n;
        if(s==="A") {
            answer += "#";
        } else {
            answer += s;
        }
    }
    return answer;
}

console.log(solution("BANANA")); // B#N#N#