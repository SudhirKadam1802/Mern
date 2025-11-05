function frequencyCounter(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true;
        }

    }
    return false;
}
let arr=[1,2,3,4,5];
console.log(frequencyCounter(arr,4));


function isFoundString(str,char){
    for(let i=0;i<arr.length;i++){
        if(str[i]===char){
            return 1;
        }
    }
    return -1;
}
console.log(isFoundString("Hello","e"));

console.log(isFoundString("Hello","z"));


let users = [
    { id:1, name: "Ujjwal" },
    { id: 2, name: "Ravi"},
    {id:3 , name: "Amit"},
    {  id:4 , name: "Ravi"},
    { id:5 , name: "Ram"}
];

function findUserByName(arr,name){
    for(let i=0;i<arr.length;i++){
        if(arr[i].name === name){
            return arr[i];
        }
    }
    return null;
}
console.log(findUserByName(users,"Ravi"));



let StudentMap = new Map();

StudentMap.set("101","Jay");
StudentMap.set("102","chirag");

console.log(StudentMap.get("101"));
console.log(StudentMap.has("103"));

StudentMap.delete("102");
console.log(StudentMap);

let arr1=[1,2,3,4,3,2,1];
function frequencyCounter(arr){
let freqMap = new Map();
for(let num of arr){
    if(freqMap.has(num)){
        freqMap.set(num,freqMap.get(num)+1)
    }
    else{
        freqMap.set(num, 1);
    }
}
return freqMap;
}
console.log(frequencyCounter(arr1));


let str="hello world";
function freqCounter(str){
    str = str.trim();

     freqMap = new Map();
     for(let char of str){
        if(char === " ")continue;
        if(freqMap.has(char)){
            freqMap.set(char,freqMap.get(char)+1)
        }
        else{
            freqMap.set(char,1);
        }
     }
     return freqMap;
}
console.log(freqCounter(str));


let fruits = new Set()

fruits.add("Apple");
fruits.add("banana");  // set only add unique values
fruits.add("Apple");

console.log(fruits);


// Remove Dupicates from an array and print the array

// Anagram Problem

function isAnagram(str1,str2){
    if(str1.length !== str2.length)return false;

 return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("listen","silent")); //true
console.log(isAnagram("hello","world")); //false


// Time complexity :
 // split('') -> O(n)
// sort() ->  O(n log n)
//join('') -> O(n)

// overall : O(n log n)

// Space Complexity : split 
// overall : O(n) 



