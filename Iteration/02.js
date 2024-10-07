//Mapp function start

const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNumbers = myNums.map( ( num) =>{ 
    // return  num  % 2
// })

// console.log(newNumbers);

// Chaining method ////////////
   const NewNums = myNumbers
                   .map( (num) => num * 10)
                  .map( (num) => num + 1 )
                  .filter( (num) => num >= 40)


 console.log(NewNums);

 