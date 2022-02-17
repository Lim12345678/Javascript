// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램
function solution(str,ch) {
    let answer = 0;

    let regexp = new RegExp(ch, 'g');
    // let regexp = /[R]/gi;
    let matches_array = str.match(regexp);
    console.log(matches_array);

    return matches_array.length;
}

console.log(solution("COMPUTERPROGRAMMING", "R")); // 3