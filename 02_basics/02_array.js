const marvelHeros =["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]


// marvelHeros.push(dc)

// let a=marvelHeros.concat(dc)

// console.log(a);


//concat does not change the original variable ie ; returns a new array


const a=[...marvelHeros,...dc]

// console.log(a);


const anotherarry= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

console.log(anotherarry);

const realArray=anotherarry.flat(2)

console.log(realArray);



// array type casting cannot type cast dictionary unless specifies...a. it returns an empty array
