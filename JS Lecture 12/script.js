
/* Write a function to find average of three numbers */
function avg(a=0,b=0,c=0)
{
return (a+b+c)/3;
}
console.log(avg(1,2,3));

// function avgr(a,b,c){
// let avg = (a + b + c)/3
// return avg;
// }

function factorial(n){
    let fact=1;
   for(let i=1;i<=n;i++){
    fact= fact*i;
   }
    return fact ;
}
console.log(factorial(5));

/*     */

function nCr(n,r){
    // let nFact = factorial(n);
    // let nrFact = factorial(n-r);
    // let rFact = factorial(r);
    // let ncr= nFact / (nrFact * rFact);
    // return ncr;
     return factorial(n) / (factorial(n-r)*factorial(r));
}
console.log(nCr(5,2));

//function that is going to be called multiple users
// vote based on ages

function canVote(userName,userAge){
    if(userAge >=18)
        console.log(userName + " is allowed to vote.");
    else
        console.log(userName + " is not allowed to vote.");
}

canVote("Ramesh", 20);
canVote("Riya",17);

/* ==================Arrays in jS =========== */

// Arrays Are non -primitive data types

const name1= "Name1";
const name2= "Name2";
const name3= "Name3";
const name4= "Name4";
const name5= "Name5";
const name6= "Name6";
const name7= "Name7";
const name8= "Name8";
const names=[
    "Name1",
    "Name2",
    "Name3",
    "Name4",
    "Name5",
    "Name6",
    "Name7",
    "Name8"
];

const length =names.length;
console.log("Length of names array:",length)


/*  bad way of printing an array   
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]); //  so on till 6th index
*/
for(let i=0;i<length;i++){
    console.log(names[i]);
}



let arr = [1,2,3,4,5,6,7,8];
 n= arr.length;

let sum = sumOfArray(arr);
console.log({ sum });


function sumOfArray(arr){
  let n= arr.length;
   let sum = 0;
    for(let i=0;i<n;i++){
        sum = sum +arr[i];
    }
    return sum;
}


/* Absolute function in JS ===> |3-7| = 4 */
console.log(Math.abs(3-7));

// find absolute differnce of(sum of all odd elements) and (sum of all even elements) */

function absdiff(arr){
    let evenNum = 0;
    let oddNum=0;
    for(let i= 0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenNum = evenNum + arr[i];
        }
        else{
            oddNum= oddNum + arr[i];
        }
    }
    return Math.abs(evenNum - oddNum);
}
console.log("Absolute differnce of even ,odd numbers:",absdiff(arr));


/* FizzBuzz problem  

you're given an array,write a function which print in below manner
- if there's a multiple of 3,print Fizz
- if there's a multiple of 5.print Buzz
-if there's a multiple of both 3 And 5 ,print FizzBuzz
*/

arr=[2,1,5,3,6,10,15,27,45,30];
function FizzBuzz(arr){

    for(let i=0;i<arr.length;i++){
        if(arr[i]%3==0  && arr[i]%5==0){
            console.log("FizzBuzz")
        }
        else if(arr[i]%3==0){
        console.log("Fizz");
        }
        else if ( arr[i]%5==0){
            console.log("Buzz")
        }
    }
}
FizzBuzz(arr);


arr=["Rajat","Dev","Ram","Sita"];
arr[0] = "Laxman";
console.log(arr);

arr=[1,5,6,2,10];
arr[1]=7;
console.log({arr});

/* Insertion in Arrays */

//Inserts at end
console.log("arr.push() return value: ",arr.push(15)); // returns array length

// H.w how to insert multiple elements using push()

// inserts at beginning 
console.log("arr.unshift() return value: ", arr.unshift(-5));
// H.w  how to insert multiple elements using unshift()


console.log({ arr });


/* arr1 is const   */


const arr1=[1,2,3,4,5];
arr1[0]=10;

/* Deletions in Arrays */
// deletion at end 
arr.pop(); //H.W -> find out what it returns


// deletion at begining
arr.shift();  // H.W -> find out what it returns


/* searching in Array */
/*
H.W -> write a function to return the index of a target element 
function findIndex (arr,targetValue){
-----
code
-------

return indexOftargetValue;
}



*/

/* Inbuilt method to find the first Index */
console.log("index of 10 in Array", arr.indexOf(10));//return index if 10 is present
console.log("index of 10 in Array", arr.indexOf(15));// return -1 if 15 doesn't exist

/* inbuilt method to check if element is present or not */

console.log(arr.includes(6));// returns true as 6 is present 
console.log(arr.includes(17));//returns false as 17 is not present

/* find and update the value of element = 10 to 14 using indexOf() and includes() methods */
arr=[5,6,7,10];
for(let i=0;i<arr.length;i++){
    if(arr.includes(10)){
    let index=arr.indexOf(10);
    arr[index]=14;
    }
}
console.log(arr);


