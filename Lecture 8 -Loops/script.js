// Loops 
console.log("Hii");
console.log("Hii");
console.log("Hii");
console.log("Hii");
console.log("Hii");             //O(1)  big O

/* issues  in repeating code
- too much work for developer
- chances of error
- unable to count the number  of repetition
- too much work to update "Hi"  to "Hii"
*/

/* While */

let count = 10;
while(count >0){
    console.log("Hi");
    count --
}
                      
// Exercise  print counting numbers from 1 to 10 
let i=1
while(i<=10){  // stoping condition
    console.log(i);
    i++
}                       // O(10)


// print all evem numbers till 25

console.log("Print all even numbers from 1 to 25")
let  num =0;
while(num<25){
    if(num%2==0){
console.log(num);
    }
num ++;
}                 //O(25/2) or O(13)

console.log("numbers from 10 to 1 reverse manner")
num=10;
while(num !=0){
    console.log(num);
    num--;
}

// For Loop 
// print "Hi" 10 times
for(let i=0; i<10; i++){
    console.log("Hi");
}                   //Time complexity O(10)

// printing from 1 to 10
for(let i =1; i<=10; i++){
    console.log(i);
}

// print multiples of 3 only upto 50;
 console.log("Multiples of 3" );
 for(let i=3; i<=50 ; i+=3){
    console.log(i);
 }                     // Time complexity  O(n/3)

// n=50;
// for( i=3 ; i<n; i++)
// if(i%3== 0)   
// console.log(i);


/* Print squares of each number from 20 to 35 */

console.log("Squares of numbers from 20 to 35")
let n=35;
for( i=20 ; i<=n ; i++){
 console.log(i*i);
}                     // Time complexity -  O(n)

 n=15;
 let start = 20;

 for(let i= start; i<=start +n; i++){
    console.log(i*i);
 }           //  TC-   O(n) => [(start + n)- start]
 
console.log("Table of 5")
  n=5;
 for(let i=1;i<=10;i++){
    console.log(n + " *", i ,"=", (n*i));
 }


 // find sum of first 100 numbers and print it

let sum = 0;
for(i=0; i<=100; i++){
    sum=sum+i;
}
 console.log("sum of first 100 numbers" ,"is", sum);

 /* Conditions related extra things */
// Read about Short Circuiting in jS
const n1=false && 5;
const n2 = n1 === false && 34; //34
const n3 = n2 && 67;
const n4=true && n2==34 && n1 ==false;
console.log({n1,n2,n3,n4});
