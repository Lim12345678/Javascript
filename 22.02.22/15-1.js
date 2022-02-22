// 가운데 문자 출력, 짝수일 경우 가운데 2개 문자 출력
function solution(word) {    
    if(word.length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴
    return (word.length%2===1)?word[(word.length-1)/2]:word[word.length/2-1]+word[word.length/2];
}
console.log(solution("study")); // u
console.log(solution("good")); // oo