// console logging like a pro
const a = {
    name: 'Tommy',
    age: 23,
    happy: true
};
const b = {
    name: 'Greek',
    age: 36,
    happy: false
};
const c = {
    name: 'Dickson',
    age: 55,
    happy: true
};

//logging with computer property names
console.log({
    a,
    b,
    c
});

//logging with custom css styling
console.log('%c He made it', 'color:green;font-weight:14px');

//logging data in a tabular form
console.table([a, b, c]);

//logging using time to know how long a process ran
console.time('time-looper')
//it will display the time it takes to run the following loop
let i = 0;
while (i < 10000000) {
    i++
}

console.timeEnd('time-looper')

//logging using the stack trace
const doSomething = (age) => {
    console.trace(`I am ${age} years old`);
}

doSomething(12);
doSomething(35);