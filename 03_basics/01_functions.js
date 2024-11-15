// function sum(a,b){
//     console.log(a+b);
// }

// sum(1,8); 


// function loggingMsgUser(name){
//     if(name === undefined){
//         console.log("give a  name ");
        

//     }
//     else{
//         return `${name} just logged in`}
// }

// a=loggingMsgUser();
// console.log(a)



// function bill(...num){
//     return num
// }

// console.log(bill(1,2,3))


const user = {
    usernm : "Sai Sharan",
    age : 18 ,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.usernm} and age is ${anyobject.age}`);
    
}

handleObject(user)