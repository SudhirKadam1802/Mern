//function to find avg of three numbers 

function avg(a=0,b=0,c=0){
    return (a+b+c)/3;
}
console.log(avg(5,10,15));

// find factorial

function factorial(n){
    let fact =1;
    for(let i=1;i<=n;i++){
      fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));


//calculate permutational nPr
let n=parseInt(Number);
let r=parseInt(Number);
function calculate_nPr(n,r){
function factorial(n){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}
  return factorial(n)/factorial(n-r);
}
console.log(calculate_nPr(5,2));



// can Drive based on ages

function canDrive(Name,Age){
    if(Age>=18){
        console.log(Name,"is allowed to drive");
    }
    else{
        console.log(Name,"is not allowed to drive");
    }
}
canDrive("Amit",22);
canDrive("Sara",16);


/*=======ARRAYS IN JS==========*/


// how to declare array
let arr=[1,2,3,4,5];
 n= arr.length;    // -> find length of array


 function sumOfArray(arr){
  let n= arr.length;
   let  sum = 0;
    for(let i=0;i<n;i++){
        sum = sum +arr[i];
    }
    return sum;
}

/* Absolute function in JS ===> |3-7| = 4 */
// Math.abs(3-7));
// find absolute differnce of(sum of all odd elements) and (sum of all even elements) */

function absDiff(arr){
    let evenSum = 0;
    let oddSum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
        evenSum = evenSum + arr[i];
        }
        else{
            oddSum =oddSum + arr[i];       
         }
    }
return Math.abs(evenSum - oddSum);
}
console.log("Absolute Difference between even and odd Numbers:",absDiff(arr));


// Q.absolute difference between sum of elements at even indices and sum of elements at odd indices 
 let arr1=[10,20,30,40,50];
function  diffIndexSum(arr1){
    let evenIndexSum = 0;
    let oddIndexSum = 0;
    for(let i=0;i<arr1.length;i++){
        if(i%2===0){
            evenIndexSum = evenIndexSum + arr1[i];
        }
        else{
            oddIndexSum=oddIndexSum + arr1[i];
        }   
     }
    return Math.abs(evenIndexSum - oddIndexSum);
}
console.log("Absolute differnce between Sum of elements at even and odd indices:",diffIndexSum(arr1));



//Insertion in Arrays

// Insert At End
arr =[10,20,30];
arr.push(40);    // -> using Push() keyword push number at the end in array
console.log(arr);

// H.w how to insert multiple elements using push()

arr =[10,20];
arr.push(30,40,50);
console.log(arr);


// Insert At Beggining

arr=[10,20,30];
arr.unshift(5);     // -> using unshift() keyword insert number at start
console.log(arr);

// H.w  how to insert multiple elements using unshift()

arr = [10,20];
arr.unshift(5,6,7);
console.log(arr);

// Deletions in Arrays 

// deletion at end 
arr.pop(); //H.W -> find out what it returns

arr =[5,10,15,20,25];
arr.pop();             // -> it removes last element
console.log(arr);


// // deletion at begining
arr.shift();  // H.W -> find out what it returns

arr=[5,10,15,20,25];
arr.shift();      // -> it removes first element
console.log(arr);


// Searching in arrays
/* H.W -> write a function to return the index of a target element 
function findIndex (arr,targetValue){
-----
code
-------

return indexOftargetValue;
}

*/

function findIndex(arr, target) {
  return arr.indexOf(target);
}

console.log(findIndex([10, 20, 30, 40], 30)); 
console.log(findIndex([10, 20, 30, 40], 50)); 
