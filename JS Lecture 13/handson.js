let arr = [10,20,30,40,50];

console.log(arr.slice(1,3)); //from index 1 to 3) index 4 is excluded

console.log(arr.slice(2));// from index to 2 to end

console.log(arr.slice()); // from index 0 to end ; exact same array

console.log(arr.slice(-2)); // last 2 elements

console.log({ arr });

/*
Note: slice() does not modify original Array
     - It returns new array
     -Negative value counting backwards from the end
     */

// Splice()

console.log(arr.splice(1,2));
console.log({ arr });

/*
array.splice(start,deleteCount,item1,item2, ...)
->start- index to begin changes
->deleteCount - number of elements to remove
->item1 , item2, .. - items to insert at start.
*/

// concat 
let arr2 = [5,10,15,20,25];
let arr3 = [-1,-2,-3,-4,-5];
console.log(arr2.concat(arr3));

// H.W - How to concatenate multiple arrays?

arr1=[3,4];
arr2=[5,6];
arr3=[7,8];
let result =arr1.concat(arr2,arr3);
console.log(result);

// Types of Loops for Arrays
//Basic loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// for... in loop

for(let index in arr){
 console.log(arr[index]);
}

//  for ...of loop
for(let value of arr){
    console.log(value);
}

/* write a function which prints the prefix sum of an array

 input : [20,4,-8,15]
 output : [12,16,8,18]
 */
 arr3=[20,4,-8,15];
function prefixSum(arr){
    let prefixArr=[];

    prefixArr[0] = arr[0];
    for(let i=1;i<arr.length;i++){
        prefixArr[i] = prefixArr[i-1] + arr[i];
    }
    return prefixArr;
}
console.log(prefixSum(arr3));



// Swapping 
// How to swap values of two varaibles

let x=5;
let y=10;
console.log({ x,y });

let temp = x;
 x=y;
 y= temp;
 console.log({ x,y });

 // swapping two values of an array
 // input : [10,20,30,40,50];
 //   o/p : [10,40,30,20,50]
arr=[10,20,30,40,50];
function swapArrElements(arr,ind1,ind2){
    let n= arr.length;
    let temp = arr[ind1];
    arr[ind1]=arr[ind2];
    arr[ind2]=temp;

    console.log({ arr });
}
swapArrElements(arr,1,3);


/* Q. Print elements at odd indices of an array
 i/p : [4,8,12,16,20]
   o/p : 8 16   */

   arr=[4,8,12,16,20];
   function printIndexedElements(arr){
    let n=arr.length;
    for(let i=1;i<n;i+=2){
        console.log(arr[i]);
    }
   }
   console.log("odd indexed elements: ");
   printIndexedElements(arr);


   /* Question to Swap alternate elements of an array
input : arr =[2,4,6,8,10] --> odd length array
output 1: arr = [4,2,8,6,10]
*/

arr=[2,4,6,8,10]
function swapAlterElements(arr){
    let  n=arr.length;
    for(let i=0;i<n-1;i+=2){
     let temp = arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
}
console.log("swapped array",arr);
}
console.log("original array",arr);
swapAlterElements(arr);
