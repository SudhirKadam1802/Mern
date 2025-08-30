
  let name1="Suresh";
  let name2="Ramesh";
  let marks1=50;
 let marks2=40;


//   if(marks1>marks2){
//     console.log(name1,"has scored maximum marks:", marks1);
//   }
//   else{
// console.log(name2,"has scored maximum marks:", marks2);
//   


let winnerName = name1;
let winnerMarks =marks1;

if(marks2 > marks1){
    winnerName= name2;
    winnerMarks = marks2;
}
console.log(winnerName, "has scored highest Marks",winnerMarks);


/* ternary operator */

/* check no is even or odd */

let num1=10;

// directory to  check ternary operator

//Method 1
num1 % 2 ==0 ? console.log(num1 + "is Even") : console.log(num1 + " is odd");

// Method 2
const isEvenOrOdd= num1 %2 ==0 ? "Even" : "odd";
console.log(num1 + "is" + isEvenOrOdd) ;


// check number is positive or negative
const isPosNegative =num1 >0 ? "positive" : "Negative";
console.log(num1 + "is" + isPosNegative);

/* check no is positive negative or zero */
const num2=0;

const isPosNegativeOrZero = num2>0 ? "Positive" : num2 ==0 ? "Zero" : "Negative";
console.log(num2 + "is" + isPosNegativeOrZero);


/* try all yesterday questions with ternary *? */

// to check no is even or odd
//Method 1
let N1=6;
N1%2==0 ? console.log(N1,"is Even") : console.log(N1, "is Odd");
// Method 2
const isEvenOrOddNumber = N1%2==0 ? "Even" : "Odd";
console.log(N1, "is", isEvenOrOddNumber);

//Q. score grading using ternary
let score=50;
let grade = score>=80 ? "A" : score>=60 ? "B" : score>40 ? "C" : "Fail";
console.log(grade);


let age=20;
let gender= "Female";
let isMatureBoyOrGirl = age>=18 && gender==="Male" ? "Mature Boy" : "Mature Girl";
console.log(isMatureBoyOrGirl);


let x=121;
first_digit =Math.floor( x/100);
last_digit = Math.floor(x%10);
let ispallindrome = first_digit==last_digit  ? "pallindrome" : "Not pallindrome"
console.log(ispallindrome);

//Q. Ticket no 
let ticketNum=102;
let isTicketNum = ticketNum === 11 || ticketNum=== 101 ? "Winner" : "Loser";
console.log(isTicketNum);


//print the name and marks of highest marks student using ternar operator

  name1= "suresh"
  name2= "Ramesh"

// let m1=20;
// let m2=10;

//  let highestMarks= (m1>m2 ? "Highest Marks" : m2>m1 ? "Lowest Marks" )

const highestScorerName = marks1> marks2 ? name1 : name2;
const highestScore = marks1> marks2 ? marks1 : marks2;

console.log(highestScorerName , "has the marks",highestScore)

// Print Greatest among three numbers 

const n1=20;
const n2 =50;
const n3  =30;

const grestestNumber= n1>n2 && n1>n3?n1:n2>n1 &&n2>n3?n2:n3
console.log(grestestNumber);

// tip: max & min of two numbers
const Num1=15;
const Num2=25;
const maxOfNum1Num2 = Math.max(Num1,Num2);
const minOfNum1Num2 = Math.min(Num1, Num2);
console.log(maxOfNum1Num2);
console.log(minOfNum1Num2);

//max& min of three or more number

let a=10, b=20, c=30;
let maximum = Math.max(a,b,c);
let minimum = Math.min(a,b,c);

console.log("maximum:",maximum);
console.log("minimum:",minimum);


// Print 1-7 into weekdays
//1.->Monday
// 2.->Tuesday

// Switch Case Statement

let dayNum=4;

switch(dayNum){
    case 1 : console.log("Monday");
     break;
    case 2 : console.log("Tuesday");
    
      break;
    case 3 : console.log("Wednesday");
      break;

    case 4 : console.log("Thursday");
    
      break;
    case 5 : console.log("Friday");
    break;

    case 6 : console.log("Saturday");
    break;

    case 7 : console.log("Sunday");
    break;

    default: 
    console.log("Invalid day")
}

/* make grading system using switch statement */

let marks=60;

switch(true){
    case  marks>=80:
    console.log("A");
    break;

case marks>=60 && marks<80:
console.log("B");
break;

case  marks>=40 && marks<60:
 console.log("C");
break;

case   marks>=20 && marks<40:
console.log("D");
break;

default :
 console.log("fail");
}


