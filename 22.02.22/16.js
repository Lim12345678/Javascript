// 중복문자제거
// 소문자로 된 한 개의 문자열이 입력되면 중복된 문자를 제거하고 출력. 제거된 문자열은 원래의 순서 유지
function solution(str) {
    let answer = "";
    
    for(let i=0; i<str.length; i++) {
        if(str.indexOf(str[i])===i) answer += str[i]; //indexOf -> 처음 나타나는 문자의 인덱스위치 반환
    }
    return answer;
}
console.log(solution("ksekkset")); // kset