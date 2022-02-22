// 중복단어제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램
function solution(arr) {
    let n = arr[0];

    if(n<3 || n>30) return "첫 번째 인자는 3이상 30이하인 자연수입니다.";
    if(arr.length-1 != n) return n + "개의 단어를 입력하세요.";
    

    // 필터링
    return arr.filter((i,j) => (j===0)?false:j===arr.indexOf(i));
}
console.log(solution([5, "good","time","good","time","student"])); // good, time, student