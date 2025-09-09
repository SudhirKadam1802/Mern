/*
Squares Of Stars
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
*/

let N=5;
for(let i=0;i<N;i++){
    let stars="";
    for(j=0;j<N;j++){
    stars = stars +  " * ";
}
console.log(stars);
}

/*
Right Triangles of Stars
*
* *
* * *
* * * * 
* * * * *
*/
console.log("---------------------------")
let M=5;
for(let i=1;i<=M;i++){
    let stars="";
    for(let j=1;j<=i;j++){
    stars = stars + "* ";
    }
    console.log(stars);
}
/*
Reverse right angles of stars
* * * * * 
* * * * 
* * * 
* * 
* 

*/
console.log("-----------------")
 P=5;
 for(let i=0;i<P;i++){
    stars= "";
    for(let j=1;j<= P-i;j++){
        stars = stars + "* ";
    }
    console.log(stars);
 }