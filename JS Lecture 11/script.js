/* Functions in JS */
/*
Function:  is created when we want to use some lines of code multiple times in our project 
and we don't know when and where exactly we need to have this block of code
- in simple terms, functions are a block of code that performs specific tasks
*/

// defining a function
// function naming rules is same as the  varaible naming rules

function greetUser(){
    console.log("Hello world")
}
/* call or Invoking a function   */
greetUser();
greetUser();


// Parameterized function
// name variable here is a parameter
// name is neither let,const or var
function greetSpecificUser(name){
    console.log("Hello " + name);
}
greetSpecificUser("sudhir");

/*  "sudhir" here is argument passed to greetSpecificUser function */
greetSpecificUser("sudhir");
greetSpecificUser("Abhishek");



function showCheckInTime(name, time){
    console.log("Hello " + name + " you checked in at: ", time);
}

showCheckInTime("Sudhir" , "9pm");
showCheckInTime("Abhishek" , "10am");


/* Q. Write a single function to print these lines while using only one console.log
Hello Riya, Welcome to our App
Hello Pratik, Welcome to our Website
Hello Sudhir, Welcome to our Office
*/

function welcomeGuest (name,place){
  console.log("Hello " + name + " welcome to our " + place);
  
}
welcomeGuest("Riya" , "App");
welcomeGuest("Pratik", "Website");
welcomeGuest("Sudhir", "Office");

// returm starement

function sum(a,b){
    const c=a+b;
    return c;
}
const sum1=sum(1,4);
const sum2=sum(13,3);
const sum3=sum(2,10);
console.log({sum1,sum2,sum3});


/* Q. Write a function to find the greatest of two numbers*/
function gretestOfTwo(num1,num2){
    const gretestOfTwo =num1>num2 ? num1:num2;
    return gretestOfTwo;
}
console.log(gretestOfTwo(5,4));

//  HW:Q. Write a function to print the Minimum of two numbers 
//solve  using all four methods discussed above



// giving default values to parameters (params) 

/* Q. Write a function to calculate both
 sum of two numbers and sum of three numbers

    Ex:  sum(2,10) should output 12
         sum(1,3,10) should output 14
 */
function sumOfTwoThree(a=0,b=0,c=0){
    return a+b+c;
}
const sumOfTwoNum=sumOfTwoThree(2,10);
const sumOfThreeNum=sumOfTwoThree(1,3,10);
console.log({sumOfTwoNum,sumOfThreeNum});

/* Nested Functions */

// assuming today is 25th
function calculateDays(issuedDate) {
  return 25 - issuedDate;
}
/* function to calculate fine while submitting book in library */
/* Assuming issued date is from current month */
function libraryFine(issuedDate = 0) {
    // if book is issued for 10 or less days then fine is zero 
    // else fine is (3 rs per day after 10 days) = [(number of days of issued book) - 10] * 3;

  const daysOfIssuance = calculateDays(issuedDate);
  let fine = 0;
  if(daysOfIssuance > 10) {
    fine = (daysOfIssuance - 10) * 3;
  } 
  return fine; 
  return daysOfIssuance > 10 ? (daysOfIssuance - 10) * 3 : 0;
}

console.log("Total Fine: " + libraryFine(2)); //23 - 10 = 13 * 3 = 39
console.log("Total Fine: " + libraryFine(12)); //13 - 10 = 3 * 3 = 9
console.log("Total Fine: " + libraryFine(22)); //3 -> fine = 0



/* How console is handling different number of arguments??
console.log(1, 2, 3, 4, 4);
console.log(1);
console.log();    */

/* Rest operator - combines all the values inside it and makes an array,
   always comes at last position in functions params */
function sumN(a, b, ...c) {
  console.log(a, b, c);
}

sumN(1, 3, 1, 3);