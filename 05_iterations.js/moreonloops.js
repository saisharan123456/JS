// const coding = ["js","ruby","python"]

// const a=coding.forEach( (item) => {
//     return item
// })

// console.log(a)

//when we try to store the value of the item in a variable , that is it is undefined


const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNum=myNums.filter( (num) => num > 5 )
// console.log(newNum);
 
const newNums = []
myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums);

