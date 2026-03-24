// const prices = [80,150,200,300];

// const total = prices.reduce((accumulator,currenttime) =>{
//     console.log(prices);
// });

//mapping function

const students =[
{name:"Alice",grade:85},
{name:"Bob", grade:92},
{name:"Charlie",grade:78}
];

// console.log(...students)

const boosted = students.map(student =>({
    ...student,score:student.score + 5
}));
console.log(boosted);


const passing = students.filter(student => student.score >=80);
console.log(passing);