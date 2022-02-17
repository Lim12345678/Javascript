// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 골라 그 합을 구하고 최솟값을 찾는 프로그램
function solution(arr) {
    let answer = [];
    let sum = 0;
    let min = 100;

    /* 
    for(i=0;i<arr.length;i++) {
        if(arr[i] % 2 === 1) {
            sum += arr[i];
            min  = (arr[i]<min)?arr[i]:min;
        }        
    }
    */

    /* 
    for(let n of arr) {
        if(n % 2 === 1) { //홀수일 경우
            sum += n;
            min  = (n<min)?n:min;
        }
    }
    */

    //배열에서 나온 메서드이다.
    arr.forEach(element => {
       if(element %2 === 1) {
           sum += element;
           min = (element<min)?element:min;
       }
    });
    // answer[0] = sum;
    // answer[1] = min;
    answer.push(sum);
    answer.push(min);
    
    return answer;
}




console.log(solution([12,77,38,41,53,92,85])); //256, 41