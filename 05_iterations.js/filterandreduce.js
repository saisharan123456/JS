
// filter

// let userbooks = books.filter ( (bk) => {})

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newN = myNum.map((num) => num +10)
// console.log(newN);


// chaining

const newN = myNum
                .map((num)=> num*10)
                .map((num => num+1))
                .filter((num) => num>=40)
// console.log(newN);


// chaining works in the form of a chain the 2nd map is doing the changes to the return of the first map 



// ############# reduce ##################

// const tot=myNums.reduce( (acc,curr) => acc+curr,0)

// const myNums = [1,2,3]



// const myTot = myNum.reduce ( function (acc,curval){
//     console.log(`acc : ${acc}, curval : ${curval}`);
    
//     return acc + curval
// },0)

// console.log(myTot)


