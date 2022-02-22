// 가운데 문자 출력, 짝수일 경우 가운데 2개 문자 출력
function solution(word) {
    let answer;

    if(word.length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴

    let start = parseInt(word.length/2);    
    // 단어의 길이가 홀수일 경우
    if(word.length%2===1) answer = word.substr(start,1);   // substr(시작위치, 길이) 문자열 자르기
    
    // 단어의 길이가 짝수일 경우    
    else answer = word.substr(start-1,2);

    // answer = (word.length%2===1)?word.substr(start,1):word.substr(start-1,2);

    return answer;
    
}
console.log(solution("study")); // u
console.log(solution("good")); // oo