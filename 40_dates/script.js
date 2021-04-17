"use strict"

const now = new Date(2020, 1, 1);
const parsedTime = Date.parse(now);

console.log(parsedTime);



let start = new Date();

for (let i = 0; i < 1000000; i++){
    let  some = i ** 3
};

let end = new Date();

console.log(end - start);