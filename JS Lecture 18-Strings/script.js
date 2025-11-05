/* Boundary Traversal - Assignment Que.*/

function boundaryTraversal (n, m ,matrix){
  for(let j=0;j<m;j++)
    console.log(matrix[0][j]);
for(let i=1;i<n;i++)
    console.log(matrix[i][m-1]);
//printing last row in reverse order for all elements in this row 
for(let j=m-1;j>=0;j--){
    console.log(matrix[n-1])
}


}
    let matrix = [
        [1,4,3],
        [2,7,9],
        [5,8,9],
        [3,2,7],
    ];
  boundaryTraversal(4,3, matrix);


  /* Transpose of a matrix */

function transpose (mat , n){

    // let newMat = [...mat];
    let newMat = [];
    for(let i=0;i<n ;i++){
        newMat[i]=[...mat[i]];
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            newMat[j][i]=mat[i][j];
        }
    }
    for(let i=0;i<n;i++){
        console.log(newMat[i].join(" "));
    }
}
    let matrix4 = [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,12,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25],
    ];

    transpose(matrix4, 5);

  /* Strings */


    let words = "Hi how was your day";
    let spaces=0;
    for(let i=0;i<words.length;i++){
        if(words[i] === " ")
            spaces++;
    }
    console.log("Total words:" + ++spaces);

    /* Methods in Strings */

    // includes()-> checks if a substring is present in the string or not
    console.log("baloon".includes('oon'));// can search for string of more than or equal to 1 length
   console.log("baloon".includes("ooN"));// is case sensitive in nature


   // replace() -> only replace the first values of target string with new one 

//    str = "shoes";
//    console.log(str.repalce("s", "d")); //returns a new string , doesn't change original one

   // replaceAll()-> repalces all occurences of target with new value
   
   str = "shows";
   console.log(str.replaceAll("s","a"));//returns a new string, doesn't change the original one

   // trim() -> removes all the leading and trailing spaces
   console.log("        yrtfgf   fdfgg  sdds  ".trim());// returns a new string,doesn't change


 // substring() -> gives a substring
 console.log("abhishek".substring(2,6));// gives substring from index = 2 to 5 | [2,5]

  console.log("abhishek".substring(2));

  console.log("abhishek".substring(-2));// gives substring from [0,n)

console.log("abhishek".substring(-2,6));//[0,6)

console.log("abhishek".substring(5,2));//[2,5)
console.log("abhishek".substring(5,-3));//[0,5)

// slice() -> almost same as substring() method, but differs when the range is negative

console.log("acciojob".slice(2)); // [2,n)]
console.log("acciojob".slice(-2));// gives exactly 2 characters from end
console.log("acciojob".slice(4,-2));//starts at 4th index ,ends before last 2 characters
console.log("acciojob".slice(-7,-2));//starts from 7th element from end , and ends before 2nd element from end 

// repeat()

console.log("abcd".repeat(4));

console.log("abcd"._proto_);// consoles the wrappper object details 

// charAt()
console.log("vscode".charAt(2));

// indexOf()
console.log("stringMethodsring".indexOf("ring"));

console.log("stringMethodsring".indexOf("ring",7));

// toLowerCase()

console.log("AbCd".toLowerCase());

// toUpperCase()
console.log("AbCd".toUpperCase());

