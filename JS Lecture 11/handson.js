//Q.Write a function to print the Minimum of two numbers 
//Method 1
function min(a,b){
    if(a<b)
    return a;
    return  b;
}
    const m1=min(2,4);
    const m2=min(21,28);
    const m3=min(35,40);
    console.log({m1,m2,m3});

// Method 2
function min(a,b){
    const mini=Math.min(a,b);
}
 const min1=min(2,4);
const min2=min(21,28);
const min3=min(35,40);
 console.log({min1,min2,min3});

 // Method 3
 function min(num1,num2){
    const minimum = num1<num2 ? num1:num2;
    return minimum;
 }
  const mini1=min(2,4);
const mini2=min(28,21);
const mini3=min(35,40);
 console.log({mini1,mini2,mini3});

 //Method 4
 function min(a,b){
    return a<b ? a:b;
 }
const minNum1=min(2,4);
const minNum2=min(28,21);
const minNum3=min(35,40);
 console.log({minNum1,minNum2,minNum3});



 