// 배열 합계
function sum_array(arr) {
    let sum = 0;
    arr.forEach(el => {
        sum += el;
    });
    return sum;
}

// 배열 합계 계산1
function sum_array1(arr) {
    return arr.reduce(function(acc, cur) {
        return acc + cur;
    });
}

// 배열 합계 계산2
function sum_array2(arr) {
    return arr.reduce((acc,cur)=>acc+cur);
}


// 배열 합계 계산3
const sum_array3 = (arr)=>arr.reduce((acc, cur) => acc+cur);


// 일곱난쟁이
function solution(arr) {
    let answer;

    const total_age = 100; //일곱난쟁이 키 합계
    const total_num = arr.length; //난쟁이 총 수(진짜+가짜 포함)
    const false_num = total_num - 7; //가짜난쟁이 수
    const sum_age = sum_array(arr); //난쟁이 키 총합계
    const sum_age1 = sum_array1(arr); //난쟁이 키 총합계
    const sum_age2 = sum_array2(arr); //난쟁이 키 총합계
    const sum_age3 = sum_array3(arr); //난쟁이 키 총합계
    const false_age = sum_age - total_age; //가짜난쟁이 나이 합계


    console.log(sum_age);
    console.log(sum_age1);
    console.log(sum_age2);
    console.log(sum_age3);
    

    for(let i=0, age =0; i<total_num; i++) {
        age = arr[i]; //현재 계산 기준 나이
        if(age >= false_age) continue;

        for(let j=0, age1=0; j<total_num; j++) {
            age1 = arr[j]; //두 번째 계산 기준 나이

            if(i===j) continue;
            if(age + age1 === false_age) {
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }

    return arr;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); // [20, 7, 23, 19, 10, 8, 13]


    /* 
    arr.forEach(element => {
        allSum += element
    });
    console.log(allSum);

    
    for(let i=0; i<arr.length-1; i++) {        
        for(let j=i+1; j<=i+1; j++) {
            if(allSum-100 === arr[i]+arr[j]) {                
                arr.splice(j,1);
                arr.splice(i,1);
            }
        }
    }
 */   