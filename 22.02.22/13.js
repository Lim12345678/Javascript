// 대소문자 변환
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로, 소문자는 대문자로 변환하여 출력하는 프로그램
function solution(str) {
    let answer = "";

    if(str.length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴
    
    for(let i=0; i<str.length; i++) {        
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
            answer += String.fromCharCode(str.charCodeAt(i)+32);
        }else {
            answer += String.fromCharCode(str.charCodeAt(i)-32);
        }
    }
    
    return answer;
}
console.log(solution("StuDY")); // sTUdy