const n=5;

fact = 1;
for(let i=1;i<=n;i++){
   fact=fact*i;
}
console.log("factorial of given number is:",fact);

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


    // Break keyword
  // Print numbere from 100 to 200 and immediately stop when 
 
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
    console.log(i);
if(i%divisor==0){
   continue;
}
console.log(i,i*i);
}


// Print all odd numbers from  1 to 100 that are divisible by 5 --> use continue 
 divisor=5;
for(let i=1;i<=100;i++){
    if(i%2==0 || i%5!==0){
        continue;
    }
        console.log(i)
    }


// Print first 10 odd numbers from 1 to 200 that are divisible by 5 
 divisor=5;
let count=0;
for(let i=1;i<=200;i++){
    if(i%2==0 || i%5==0){
        continue;  
    }
    count++;
    console.log(i);
    if(count==10){
        break;
    }
}



/* ===========Nested For Loops=========*/

// write a program to print 10 '*'
let N = 10;

// write a program to print 10 '*'

let starString = "";
for(let i=0; i<N; i++){
    starString+= "*";
}
console.log(starString);
// write  a program to print 10 lines of(10 '*' in one line)
 
/*
Print below pattern

/*
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
*/
let num="";
for(let i=0;i<=6;i++){
 numString =" ";
}
console.log(num);





/* H.W
Print this pattern:

A.
*****
****
***
**
*

B.
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
*/


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
