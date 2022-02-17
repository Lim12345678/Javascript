process.stdin.resume();
process.stdin.setEncoding('utf8');

let data = [];
const r1 = require("readline").createInterface( {
    input: process.stdin,
    output: process.stdout
});


r1.on("line", (line) => {
    data.push(line);
    
});
r1.on('close', () => {
    console.log(data[0]);
    r1.close();
    process.exit();
})
// console.log(input);