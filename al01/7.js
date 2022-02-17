function solution(day, arr) {
    let answer = 0;
    
    /*
    arr.forEach(element => {
        if(element % 10 === day) answer++;
    });
    */
    for(n of arr) {
        if(n % 10 === day) answer++;
    }

    return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); //3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])); //3
console.log(solution(5, [15, 20, 54, 35, 87, 91, 30])); //2