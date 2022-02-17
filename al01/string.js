let str = 'hello world';

console.log(str);
console.log('안녕'+'하세요');
console.log('안녕','하세요');

let str2 = '';
for(let s of str) {
    str2 += s;
}

let str3 = '';
for(let i=0; i<str.length; i++) {
    str3 += str[i];
}

console.log(str2);
console.log(str3);