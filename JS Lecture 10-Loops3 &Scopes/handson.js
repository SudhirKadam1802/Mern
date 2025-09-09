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


//  * * * * *
//  *       *
//  *       *
//  * * * * *


let s=4;
let r=5;

for(let i=1;i<=s;i++){
   str = "";
   for(let j=1;j<=r;j++){
      if(i==1 || j==1 ||i==s||j==r){
         str = str +  "*";
      }
      else{
         str = str + " ";
      }
   }
      console.log(str);
      }



 
