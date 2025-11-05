/* Optimized Code For checking if number is prime or not  *//* Optimized Code For checking if number is prime or not  */

let N=117;
//let sqrt = Math.pow(N,0.5);  --also valid
let sqrt = Math.sqrt(N);
let isPrime= true;
for(let i=2;i<=Math.floor(sqrt);i++){
if(N % i ==0){
    isPrime =false;
    break;
}
}
const isPrimeMessage=(isPrime && N!=1) ? "is a Prime number" : "is not a Prime number";

console.log(N + isPrimeMessage);

/* pattern Question 
*****
****
***
**
*
*/
N = 5;
let M = 5;
for(let i = 0; i < M; i++) {
    let stars = "";
    for(let j = 0; j < N - i; j++) {
        stars += "*";
    }
    console.log(stars);
}
/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6
*/
 N = 6; // number of rows
M = 6; // number of columns
for(let i= 1; i <= N; i++){
    let numbers = "";
    for(let j = 1; j <= i; j++) {
        numbers = numbers+ j + " ";
    }
    console.log(numbers);
}

// scopes




/* H.W -> Write about Hoisting and TDZ in your words */


/* Question : write code for below pattern

*****
 ****
  ***
   **
    *
    
    */
N=5;
for(let i=0;i<N;i++){
    let star= "";
    for(j=0;j<N;j++){
       if(j<i){
        star = star + " ";
       }
       else{
        star = star + "*";
       }
}
console.log(star);
}


