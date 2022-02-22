// 대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
function solution(str) {
    let answer = 0;

    if(str.length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴

    for(i=0; i<str.length; i++) {                
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) answer++;
    }
    return answer;
}
console.log(solution("KoreaTimeGood")); // 3