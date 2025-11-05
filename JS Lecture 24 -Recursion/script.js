function recursion(n){
    // Base Case
    if(n===0) {
        return
    }
 console.log(n);
recursion(n-1);
}
recursion(4);


function recursion2(n){
    if(n===0) return
    console.log(n);
    recursion2(n-1);
}
recursion2(10);



function recursion3(n){
    if(n>5){
     return 
    }
    console.log("Hello world");
    recursion3(n+1);
}
recursion3(1);

console.log("====================");
function twowayPath1(n,current =1){
    if(current > n) return;
    console.log(current);
    twowayPath1(n, current+1);
    console.log(current);
}
twowayPath1(5);

console.log("====================");
function twowayPath(n,current =5){
    if(current < n) return;
    console.log(current);
    twowayPath(n, current-1);
    console.log(current);
}
twowayPath(1);




function sum(){
    if(n===0)  return ;
    
}



function reverseString(str){
    if(str==="") return "";
    return reverseString(str.slice(1))+str[0];
}
console.log(reverseString("Hello"));


