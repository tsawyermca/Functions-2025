//Practice Problems

//Day 11 Problem 1
//Function to greet a user

function greetUser(user){
    return(`D11 Q1. Hi ${user}`);
}

console.log(greetUser(prompt("D11 Q1. What is your name?")));

//Day 11 Problem 2
//Function to calculate the area via length and width

function calculateArea(){
    let area = length * width
    console.log(`D11 Q2. With a length of ${length} inches and a width of ${width} inches, your total area is ${area} inches`)
}

let length = parseFloat(prompt("D11 Q2. What is the length of the object in inches"));
let width = parseFloat(prompt("D11 Q2. What is the width of the object in inches"));
calculateArea(length, width);

//Day 11 Problem 3
//Function to add two numbers and give the sum

function addNumbers(){
    let sum = num1 + num2
    console.log(`D11 Q3. The sum of ${num1} and ${num2} is ${sum}`);
}

let num1 = parseFloat(prompt("D11 Q3. What is your first number to add"));
let num2 = parseFloat(prompt("D11 Q3. What is your second number to add"));
addNumbers(num1, num2);

//Day 11 Problem 4
//Function to accept any number of numeric arguments and returns an object

function getStats(...numbers){
    if (numbers.length === 0 || !numbers.every(num => typeof num === 'number' && !isNaN(num))) {
        return { error: "No valid numbers provided" };
    }

    let count = numbers.length;
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / count;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);

    return{
        count,
        sum,
        avg: avg.toFixed(2),
        min,
        max
    };
}

function getNumbers(d11p4){
    let numbers = [];

    while(true){
        let input = prompt(`D11 Q4. Enter a number or click ok with no input or cancel to stop`);
    
        if(input === null || input.trim() === ""){
        break
        }

        let num = parseFloat(input);
        if(isNaN(num)){
        alert("Please enter a valid number");
        continue;
        }
        numbers.push(num);
    }

    if(numbers.length === 0){
        alert("No valid numbers were entered");
        console.log("D11 Q4. No valid numbers were entered");
        return;
    }

    let stats = getStats(...numbers);
    console.log(`D11 Q4. Here are the statistics for the numbers you input`)
    if(stats.error){
        console.log(stats.error);
    } else {
        console.log(`Amount of Numbers: ${stats.count}`);
        console.log(`Sum: ${stats.sum}`);
        console.log(`Average: ${stats.avg}`);
        console.log(`Min: ${stats.min}`);
        console.log(`Max: ${stats.max}`);
    }
}

getNumbers();

//Day 11 Problem 5
//Function that takes a single word string and returns it in title case(first letter uppercase, other letters lowercase)

function titleCase() {
    let word = prompt("D11 Q5. Enter a single word:");
    if (!word || word.trim() === "") {
        return "No input provided";
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(`D11 Q5. Your word is ${titleCase()}`);

// Day 11 Problem 6
// Function that calculates the factorial of a non-negative integer using recursion

function calcFactorial(){
    let factInput = prompt("D11 Q6. Enter a positive number to find the factorial for");
    let calc = parseInt(factInput);
    if(isNaN(calc) || calc < 0){
        return("Please input a valid number");
    }

    function factorial(n){
        if(n === 0 || n === 1){
            return 1;
        }
        return n * factorial(n - 1);
    }

    return factorial(calc);
}

console.log(`D11 Q6. The factorial of your number is ${calcFactorial()}`);

//Day 12 Problem 1
//Function that converts kilometers to miles

function convertKiloToMile(kilo){
    kilo = parseFloat(kilo);
    let mile = kilo * 0.621371;
    mile = mile.toFixed(2);
    return(`D12 Q1. ${kilo} kilometer(s) is equal to ${mile} mile(s)`);
}

console.log(convertKiloToMile(prompt("D12 Q1. Input a number of kilometers to be converted to miles")))

//Day 12 Problem 2
//Add numbers inside of an array to get the sum

function sumArray(){
    let input = prompt("D12 Q2. Enter numbers separated by commas (ex: 1,2,3), they will be added together");
    let numbers = input.split(",").map(num => parseFloat(num.trim()));
    
    if (numbers.some(isNaN)) {
        return "Error: Please enter valid numbers";
    }
    
    let sum = numbers.reduce((total, num) => total + num, 0);
    return sum;
}

console.log(`D12 Q2. The sum of the numbers you input is ${sumArray()}`);

//Day 12 Problem 3
//Function that calculates the area of a circle

function circleArea(){
    let radius = prompt("D12 Q3. Enter the radius of a circle");
    radius = parseFloat(radius);
    let pi = Math.PI;
    let area = pi * radius * radius;
    area = area.toFixed(2);
    console.log(`D12 Q3. A circle with a radius of ${radius} will have an area of ${area}`);
}

circleArea();

//Day 12 Problem 4
//Function that takes a number of US Dollars and converts into other currencies

function convertCurrency(){
    let moneyUSD = prompt("D12 Q4. Enter an amount of money in US Dollars");
    moneyUSD = parseFloat(moneyUSD).toFixed(2);
    let conversion = prompt("Which currency do you wish to convert it to? EUR, GBP, JPY are currently supported");
    conversion = conversion.trim();
    moneyEUR = moneyUSD * 0.85;
    moneyEUR = moneyEUR.toFixed(2);
    if(conversion.toLowerCase() === "eur"){
        console.log(`D12 Q4. ${moneyUSD} in US Dollars is equal to ${moneyEUR} Euros`);
    } else if(conversion.toLowerCase() === "gbp"){
        moneyGBP = moneyUSD * 0.75;
        moneyGBP = moneyGBP.toFixed(2);
        console.log(`D12 Q4. ${moneyUSD} in US Dollars is equal to ${moneyGBP} British Pounds`);
    } else if(conversion.toLowerCase() === "jpy"){
        moneyJPY = moneyUSD * 110;
        moneyJPY = moneyJPY.toFixed(2);
        console.log(`D12 Q4. ${moneyUSD} in US Dollars is equal to ${moneyJPY} Japanese Yen`);
    } else {
        console.log(`D12 Q4. I'm sorry ${conversion} is not a supported currency, however ${moneyUSD} in US Dollars is equal to ${moneyEUR} Euros`);
    }
}

convertCurrency();

//Day 12 Problem 5
//Function that swaps the placement of 