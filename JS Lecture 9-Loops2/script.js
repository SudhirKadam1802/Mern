/* Program to find the factorial of N */
const n=5;
let factorial  = 1;
for(let i=1;i<=n;i++){
   factorial=factorial*i;
}
console.log("factorial of given number is:",factorial);

// wrire a program to check if a no is prime or not 

let n1 = 9;
let divisorcount= 0;
for(let i=1;i<=n1;i++){
    if(n1%i==0){
     divisorcount++;   
    }
}
    if(divisorcount==2){
        console.log("Prime Number")
    }
    else{
        console.log("Non Prime Number");
    }

    // GCD of two number

    let a = 18;
    let b = 9;

  while (b !== 0) {
  let temp = b;
  b = a % b;  // remainder
  a = temp;
}

console.log("GCD is:", a);




    // Break keyword
  // Print numbere from 100 to 200 and immediately stop when number is divisible by 17 i%17==0
    
  for(let i=100;i<=200;i++){
    if(i % 17 ==0){
        break;
    }
    console.log(i);
  }

/* ======Continue Keyword =============*/
  // Print Square of all nos except no.s divisible by 17 from 1 to 100

let divisor=17;
for(let i=1;i<=100;i++){
if(i%divisor==0){
   continue;
}
console.log(i,i*i);
}


// Print all odd numbers from  1 to 200 that are divisible by 5 --> use continue 
 divisor=5;
for(let i=1;i<=200;i++){
    if(i%2==0 || i%5!==0){
        continue;
    }
        console.log(i)
    }


// Print first 10 odd numbers from 1 to 200 that are divisible by 5 
let count=0;
for(let i=1;i<=200;i++){
    if(i%2==0 || i%5!==0){
    continue;  
    }
    console.log(i);
    count++;
  if(count==10){
      break;
  }
}


/* ===========Nested For Loops=========*/

// write a program to print 10 '*'
let N = 10;
let M = 10;
let starString = "";
for(let i=0; i<N; i++){
    starString+= "*";
}
console.log(starString);

console.log("=========")
// write  a program to print 10 lines of(10 '*' in one line)
 for(let i = 0; i < M; i++){
  let starString = "";
  for(let j = 0; j < N; j++)
    starString += "*";
  console.log(starString);
}

/*
Print below pattern

1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6
*/

N=6;

for(let i = 0; i < N; i++){
  let numString = "";
  for(let j = 0; j < N; j++) {
    numString+= j+1 +  " ";
  }
  console.log(numString);
}





/* H.W
Print this pattern:

A.
*****
****
***
**
*
*/
//Ans

M=5;
 N= 5;

for(let i=0;i<M;i++){
  let stars ="";
 for( let j=0;j< N-i;j++){
 stars = stars + "*";
 }
 console.log(stars);
}

/*
B.
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
*/
N=6;
for(let i=1;i<=N;i++){
let numbers = "";
 for(j=1;j<=i;j++){
  numbers = numbers+j+ " ";
 }
 console.log(numbers);
}


/*======= do-while loop===========

//first executes the statements inside do block for condition inside while,
if this condition is true, the do block will again be executed,else it'll stop there.
-NOTE : even though the condition is false , the statements under do block,will execute once
*/

do{
  console.log("Hi,I'm do while loop!!");
}
while(false);
let response;
let responseCounter =0;
do{
 response=prompt("do you want to continue? Count:yes" + responseCounter);
console.log({response});
responseCounter ++;
}
while (response == "Yes" || response == "yes");
