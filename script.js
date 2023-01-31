// alert('Alert from external file');
//var, const, let - variables, _$ voi laittaa muuttujan nimeen
//esim. _sss $sss tai s_d_s tai sDsD
//jos muuttujan nimi alkaa normisti isolla, esim. Home, js luule objektiksi
//!= ei ole
console.log("Log from external file");

const myString='Hello';
console.log(typeof myString);
//string

const myBooleanTrue = true;
const myBooleanFalse = false;
console.log(typeof myBooleanTrue, typeof myBooleanFalse);
//boolean

let x = 10;
const y = 10.555;
console.log(typeof x, typeof y);
//number

let a;
console.log(a);
//undefined

const b = null;
console.log(b);
//null

let person = {
    firstName: "John",
    lastName: "Wayne"
}; console.log(typeof person); //objekti

let counter = 111;
console.log(typeof counter); 
counter=false; console.log(typeof counter);

const hello = "Hello";
const world = "World"
const helloWorld = hello + " " + world + " " + (y+x);
console.log(helloWorld); //string?

const newhelloWorld = helloWorld.replace('Hello', 'Cheers');
console.log(newhelloWorld.toUpperCase()); 
//replace, slice, substring, toLowercase, toUppercase

//Template strings
const templateString = `This is a ${hello} ${world} application`;
console.log(templateString);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x += 5);
console.log(10 == 10); //true
console.log(10 === '10'); //true jos ==, false jos ===, kolmas tarkistaa onko tyyppi sama
console.log(10 != 10); //false
console.log(10 != 13); //true
console.log(null === undefined); //false

if (x > 10) { console.log("It's bigger than 10"); }
    else { console.log("It's under 10"); }

let myOtherString = ' ';
for (let i=0; i<10; i++) {
    myOtherString = myOtherString + " " + i;
}
console.log(myOtherString); //tulostaa samalle riville, ota stringit pois ja laita log(i) nii eri riville

let count = 0;
myOtherString = '';
while (count < 10 ) {
    myOtherString = myOtherString + " " + count;
    count++;
}
console.log(myOtherString);

function sayHello(name, friend){
    console.log(`Hello ${name} and ${friend}!`);
}
sayHello('Henna', 150);

function square(x) {
    return x * x;
}
console.log(square(5));

const add = function(a, b) {
    return a + b;
}
function callback(fn, a, b) {
    return fn(a, b);
}

console.log(add(5, 10));
console.log(typeof add);
console.log(callback(add, 25, 15));

function sum1(a, b) {
    return a+b;
}
const sum2 = (a, b) => {
    return a+b;
}
const sum3 = (a, b) => a+b;
sum1(5, 10);
sum2(25, 10);

//git clone ssg
// cd mene repositoryyn (main)
// code . 