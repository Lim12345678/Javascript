// 총 N명인 난쟁이들 중 키의 합이 100인 일곱난쟁이 찾기 프로그램
function solution (level, search) {
    if(level==choice) {        
        for(let j=0; j<result.length; j++) {
            sum += result[j];
        }

        if(sum===100) check = "true";

    } else {
        for(let i = search; i<dwarf.length; i++) {
            if(check==="true") return result;
            sum = 0;
            result[level] = dwarf[i];
            solution(level+1, i+1);
        }
    }
    return "조건에 일치하는 값이 없습니다.";
}

// let dwarf = [20, 7, 23, 19, 10, 15, 25, 8, 13]; //20, 7, 23, 19, 10, 8, 13
let dwarf = [1, 9, 42, 20, 7, 23, 19, 10, 15, 25, 8, 13, 20, 31]; //1, 9, 42, 20, 7, 8, 13
let choice = 7;
let sum = 0;
let check = "false";
let result = [];

console.log(solution(0,0));