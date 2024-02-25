//write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
    return str.split('').reverse().join("");
}

console.log(reverseString('hello'));
console.log(reverseString('world'));


function findLargestNumber(arr) {
    let max =0;
    for(let i=1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    
    }
    return max;
}

console.log(findLargestNumber([2,3,9,1,11]));


//Palidrom check

function isPalidrom(str) {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr;
}

console.log(isPalidrom("level"));
console.log(isPalidrom("hello"));

function isFizzBuzz(n) {
    for(let i = 1; i<=n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if(i % 3 ===0 ){
            console.log("Fizz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}

isFizzBuzz(15);


function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords('hello world'));
console.log(capitalizeWords("javascript is awesome"));


function findMissingNumber(arr) {
    const n = arr.length + 1;
    console.log(`n value: ${n}`);
    const sum = (n * (n + 1)) / 2
    console.log(`sum value: ${sum}`);
    const arrSum = arr.reduce((acc,curr) => acc + curr, 0);
    console.log(`arrSum: ${arrSum}`);
    return sum - arrSum;
}

findMissingNumber([1,5]);

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

function multiple(b,c) {
    return b * c;
}

console.log(multiple(3,4));

function division(x, y) {
    return x % y;
}

console.log(division(5,8))

function subtract(t,h) {
    return t - h;
}

console.log(subtract(9, 8));

function greet() {
    console.log("Hello Sai");
}

greet();

for(let i=0; i<=10; i++) {
    console.log(i)
}

const person = {
    name: 'Sai',
    age: '90'
};

for(let key in person) {
    console.log(`${key}: ${person[key]}`);
}

//const elementById = document.getElementById('myElementId');

//const myButton = document.getElementById('myButton');
// myButton.addEventListener('click', function() {
//     console.log('Button is clicked')
// })

// const element = document.getElementById('demo');
// const myButton =document.getElementById('myButton');
// myButton.addEventListener('click', function() {
//     element.classList.toggle('highligted');
//     console.log('called');
// })

// function highligtedText() {
//     var element = document.getElementById('')
// }



let arr = [1,2,3,4,-5, -2, -9,-4,0];
let positiveArr = [];
let negativeArr = [];
let zeroArr = [];
arr.forEach(num => {
if(num > 0) {
    positiveArr.push(num)
    console.log('Number is positive');
} else if(num < 0) {
    negativeArr.push(num);
    console.log('Number is negative');
} else {
    zeroArr.push(num);
    console.log('Number is zero')
}
});

console.log(`Positive Value: ${positiveArr}`);
console.log(`Negative Value: ${negativeArr}`);
console.log(`zeor Value: ${zeroArr}`);

const fruits = ['apple','banana','orange'];

fruits.forEach(fruits => {
    console.log(fruits);
})

for(const fruit of fruits) {
    console.log(`fruits groups:${fruit}`);
}

//mapping array elements
let numbers = [1,2,4,5]
const doubleNumber = numbers.map(item=>item * 2);

console.log(doubleNumber);

//filter

const passScore = numbers.filter(item => item >=4);
console.log(passScore);

const numValues = [5,10,-3,8,-2,0,15];

//filter positive element

const positiveEl = numValues.filter(item => item > 0);
console.log(`Positive Values: ${positiveEl}`);

const evenNumbers = numValues.filter(item => item % 2 === 0 && item > 0);
console.log(`EvenValue:${evenNumbers}`);

const v = [1,2,3,4,5,6];
v.forEach(item => {
    console.log(item)
});

const colors = ['red','green','blue'];

colors.forEach((color,index) => {
    console.log(`Color at index: ${index}: ${color}`);
});

const str = 'Hello World';

const items = [];
Array.from(str).forEach(item => {
    items.push(item);
});
console.log(items);

const personObj = {
    name: 'Alice',
    age: 30,
    city: 'New York',
    county: 'Milton'
};

Object.values(personObj).forEach(item => {
    console.log(item);
});

const uniqueNumber = new Set([1,2,3,3,1]);

uniqueNumber.forEach(item => {
    console.log(item);
});

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.forEach((value, key)=> {
    console.log(`${key}: ${value}`);
});

const groupNum = [2,3,4,5,6,8];

const result = groupNum.map(item=>item * 2);

console.log(result);


const doubleNum = [2,3,4,5,8];

const result1 = doubleNum.map((item) => {
    item * 2 
   
});

const fruitSweet = ['apple', 'banana', 'orange','pineapple'];

const indexMap = fruitSweet.map((item,index)=>({
    item,index
}));

console.log(indexMap);

const oddNum = [1,2,3,4,5,8,9];

const oddIndex = oddNum.filter((item,index)=> item % 2 !==0);

console.log(oddIndex);

var nameId = ['Adam', 'Jeffrey', 'Fabiano', 'Danil', 'Ben'];

function len_campare(a,b) {
    return a.length - b.length;
}

nameId.sort(len_campare);
console.log(nameId);
console.log(nameId)

var priceList = [100,50,5,2,4,7,14];

priceList.sort((a,b) => {
    return a - b;
});

console.log(priceList);

priceList.sort((a,b) => {
    return b - a;
});

console.log(priceList);

let numbersFind = [1,2,3,4,9,8];

numbersFind.forEach((item)=> console.log(item));

console.log(numbersFind);

const itemsFu = ['item1', 'item2', 'item3','item4', 'item5'];
const copyItem = []
itemsFu.forEach((item,index) => {
    const startNum = index + 1;
    copyItem.push(`${startNum}. ${item}`);
});

console.log(itemsFu);

let people = ['Greg', 'Mary', 'Devon', 'James'];

for(let i = 0; i < people.length; i++) {
    console.log(`${i}: ${people[i]}`);
}

const firstNameLastName = [
    {firstName: 'Sai Kumar', lastName: 'Mutoopuri'},
    {firstName: 'Ajitha', lastName: 'Mutoopuri'},
    {firstName: 'Sathvik', lastName: 'Mutoopuri'}
];

function getFullName(item) {
    return [item.firstName, item.lastName].join(' ');
}

console.log(firstNameLastName.map(getFullName));


people.forEach((item, index) => {
    const startValue = index + 1
    console.log(`${startValue}: ${item}`)
})