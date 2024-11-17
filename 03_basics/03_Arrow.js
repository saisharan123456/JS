const user ={
    username : "sai sharan",
    price : 1000,

    welcomeMessage :function (){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username =" Sam"
// user.welcomeMessage()

// console.log(this); // it is returning an empty set in node environment

// function chai(){
//     let username = " sai sharan"
//     console.log(this.username)  ////####This doesnot work in FUNCTIONS#####
// }

// chai()


// const chai = function(){
//     let username = "Sai Sharan"
//     console.log(this.username);
    
// }


const chai = () => {        // Arrow function
    let username = "Sai Sharan"
    console.log(this);
    
}

// chai()

// const addTwo = (num1,num2) => {  // explicit return
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2 //implicit return

// const addTwo = (num1,num2) => (num1+num2)//implicit return

// ### when we use {} then return should be written ###

// const addTwo = (num1,num2) => ({username :"hitesh"})

//  to return an object we have to wrap it in  parantheses

console.log(addTwo(3,4))