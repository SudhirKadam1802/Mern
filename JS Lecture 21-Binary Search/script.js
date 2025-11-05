
// binary Search

function BinarySearch(arr,target){
    let left =0;
    let right = arr.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            left = mid +1;
        }
        else{
            right = mid +1;
        }
    }
    return -1;
}
let arr =[1,2,3,4,5,6,7,8];
console.log(BinarySearch(arr,7));



let arr1=[1,2,4,4,5,6,6,7];
function firstOccurence(arr,target){
    let left =0;
    let right = arr.length-1;
   let  result =-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            result = mid;
           right = mid -1;
        }
     else if(arr[mid]<target){
            left = mid +1;
        }
        else{
            right = mid -1;
        }
    }
    return result;
    }
    let target =4;
    console.log(BinarySearch(arr1,target));



    let arr2=["apple","banana","banana","cherry","date"];


    //Lower bound and Upper Bound for elements