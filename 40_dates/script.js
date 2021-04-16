"use strict"

const now = new Date();

console.log(now.setHours(20));
console.log(now)


let start = new Date();

for (let i = 0; i < 1000000; i++){
    i ** 3
};

let end = new Date();

console.log(end - start);