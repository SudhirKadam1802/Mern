/* Print SubArrays  */
function printSubarrays(arr){
    let n=arr.length;

    for(let i=0;i<n;i++){
        let subarr = [];
        for(let j=i;j<n;j++){
            subarr.push(arr[j]);
            console.log(subarr.join(" "));
            // console.log(arr.slice(i, j + 1).join(" "));
            }
        }
    }
    printSubarrays([1,4,5,7,3,2]);

/* Function to print the sum of all subarrays */
let arr =[1,4,5,7,3,2]
function printSubarraySum(arr){
  n= arr.length;
  for(let i=0;i<n;i++){
       subarr = [];
       let sum =0;
    for(let j=i;j<n;j++){
       subarr.push(arr[j]);
       sum = sum + arr[j];
    console.log(subarr.join(" "),sum);
    }
}
}
printSubarraySum(arr);

//function to print sum of all subarrays of 'arr'


/*  Write a function to print the subarray whose sum is target sum (=T)
input : [1,4,5,7,3,2], T = 15
output : [5,7,3]
*/

function findTargetSumarray(arr,T){
    n=arr.length;
    for(let i=0;i<n;i++){
        subarr =[];
        let sum =0;
        for(let j=i;j<n;j++){
            subarr.push(arr[j]);
            sum = sum + arr[j];
            if(sum==T){
             return subarr;
            }
        }       
    }
} 
console.log(findTargetSumarray(arr,17));


/*=============== Nested Arrays ======== */

/* ============ 2D- Arrays :Matrix ===========*/

arr =[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],];

console.log("Printing 2D array");

for(let i=0;i<arr.length; i++)
{
    str = "";
    for(let j = 0; j<arr[i].length; j++){
        str = str + arr[i][j] + " ";
}
console.log(str);
}   

/* Print the sum of each row 
 input : arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],];
 output : 15
          40
          65
          */

for(let i=0;i<arr.length; i++){
    let sum =0;
    let str = "";
  for(let j = 0; j<arr[i].length; j++){

        sum  = sum + arr[i][j];
        str = str + arr[i][j] + " ";
    }
    console.log(sum);
   }


   /* Print [ sum of( product of elements of each even indexed-row)]
   input : arr=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],];

   output : 360480
   (1*2*3*4*5 + 11*12*13*14*15)
   */
    let sum1=0;
   for(let i=0;i<arr.length;i+=2){
    let product = 1;
    for(j=0;j<arr[i].length;j++){
        product = product * arr[i][j];
    }
    sum1= sum1+ product;
   }
   console.log(sum1);

   /* Print the matrix col-wise
   input : arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],];
   output : 
   1 6 11
   2 7 12
   3 8 13
   4 9 14
   5 10 15
   */

 for(let i=0;i<arr[0].length;i++){
    let str = "";
    for(let j=0;j<arr.length;j++){
        str += arr[j][i] + " ";
    }
    console.log(str);
   }
// h.w print sum of elements in odd-indexed columns 
// Function to print all elements of primary diagonal

    arr = [[1,2,3],[4,5,6],[7,8,9]];

function printPrimaryDiagonal(arr){
 for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr[i].length;j++){
        if(i==j){
            console.log(arr[i][j]);
        }
    }
    }
    }
    printPrimaryDiagonal(arr);


    function secondaryDiagonal (arr){
        let n=arr.length;
        let secondaryDiagonal = [];
            for(let j=0;j<n;j++){
            secondaryDiagonal.push(arr[i][n-j-1]);
                }
                return secondaryDiagonal.join(" ");
            }
        
            console.log("secondaryArray:", secondaryDiagonal(arr));
    

/* function to check if primary diagonal sum is odd or even  */

function checkPrimaryDiagonal(arr){
    n= arr.length;

}