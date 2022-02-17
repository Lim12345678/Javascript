function oddsum(a,b,c,d,e,f,g) {
    let answer = [a,b,c,d,e,f,g];
    let sum = 0;
    let min;

    for(i=0;i<=answer.length-1;i++) {
        if(answer[i]%2==1) {
            sum = sum + answer[i];
            min = min<answer[i]?min:answer[i];
        }
    }
    console.log(sum);
    return min;
    // return [sum, min];
}

console.log(oddsum(0.2,77,38,41,53,92,85));