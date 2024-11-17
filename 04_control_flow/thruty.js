const userEmail =[]

// here we did not compare or did anything for the if statement ,,it will assume itself as true or false

if (userEmail) {
    console.log("got the email");
    
}else{
    console.log("no email");
    
}

// Falsy values

// false , 0 ,-0, BigInt 0n,"", null, undefined,NaN

// truthy values

// truth , "0" ,"false" , " " , {}, [] , function(){} empty fn

// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }


// const mtobj={}
// if (Object.keys(mtobj).length ==0){
//     console.log("object is empty");
    
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
val1= null ?? 15;
val1 = undefined ?? 9

console.log(val1);



///// Terinary Operator /////

//condition ? true : false

const price =100
price >= 80 ? console.log("lesss than 80") : console.log("more than 80");
