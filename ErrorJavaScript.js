//Challenge 1

//EVEN OR ODD
let number = parseInt(prompt("Give me a number: "));

if (number % 2 === 0) {
    console.log("EVEN");
} else {
    console.log("ODD");
}

//ELIGIBLE TO VOTE?
let age = parseInt(prompt("What is your age: "));

if (age > 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//POSITIVE, NEGATIVE, OR ZERO
let num = parseFloat(prompt("Give me a number: "));

if (num > 0) {
    console.log("POSITIVE");
} else if (num <= 0) {
    console.log("NEGATIVE");
} else {
    console.log("ZERO");
}

// Challenge 2

// Prints 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Print numbers from 1-5
let numero = 1;
while (numero <= 5) {
    console.log(numero);
    numero++;
}

//Calculate the factorial
let b = parseInt(prompt("Give me a number: "));
let c = 1;

if (b < 0) {
    console.log("Can't find factorial for negative numbers");
} else if (b === 0) {
    console.log("It is 1");
} else {
    for (let i = 1; i <= b; i++) {
        c *= i;
    }
}

console.log(`The factorial of your number is ${c}`);

// Challenge 3

// Greet user by name
function greet_user(name) {
    console.log(`Wazzzupp, ${name}`);
}

let name = prompt("What's your name: ");
greet_user(name);

// Check if number is even or odd
function odd_or_even(fein) {
    return fein % 2 === 0 ? "Even" : "Odd";
}

let fein = parseInt(prompt("Give me a number: "));
console.log(`The number is ${odd_or_even(fein)}`);

// Count Vowels
function count_vowels(cornakopia) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of cornakopia) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let cornakopia = prompt("Give me a string: ");
console.log(`The vowels of your string is: ${count_vowels(cornakopia)}`);


// Challenge 4

// Fruity
let fruits = ["Apple", "Banana", "Melon", "Mango", "Durian"];

for (let i of fruits) {
    console.log(i);
}

//Students names and grades
let students = {
    "Lucas": 100,
    "Masoud": 99,
    "Nayan": 52,
    "Gabe": 88,
    "Abid": 92,
    "Karim": 3
};

for (let i in students) {
    console.log(`Name: ${i}, Grade: ${students[i]}`);
}

//Highest number in the array
function highest_number(bombaclat) {
    return Math.max(...bombaclat);
}

let bombaclat = [5, 8, 12, 18, 21, 44, 99, 22];
console.log(highest_number(bombaclat));
