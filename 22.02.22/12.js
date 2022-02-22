// 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 출력하는 프로그램
function solution(str) {
    let answer = "";
    
    if(str.length>100) return -1; // 문자열의 길이가 100을 넘을 경우 리턴

    for(let i = 0; i<str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) { // 알파벳의 유니코드가 65에서 90일 경우(대문자일 경우) 그대로 출력
            answer += str[i];
        }
        else {                  // 그렇지 않을 경우(소문자일 경우) 소문자 유니코드에 -32를 하여 문자로 변환 후 출력(대문자와 소문자 차이는 32)
            answer += String.fromCharCode(str.charCodeAt(i)-32); 
        } 
    }
    
    return answer;
}

console.log(solution("ItisTimeToStudy"));