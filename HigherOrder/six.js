// // // const coding = ['js', 'cpp', 'java', 'swift']
// // //  const values = coding.forEach((item) => {
// // //     //  console.log(item);                   // for each does not return the value 
// // //      return item
     
// // //  })

// // //  console.log(values);
 

// // const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // //  const newNums = myNums.filter( (num) => {
// // //     return (
// // //         num > 4
// // //     )
    
// // //  })
// // // const newNums = []
// // myNums.forEach( (num) => {
// //     if(num > 4) {
// //         newNums.push(num)
// //     }
// // })
// // console.log(newNums);

// const books = [
//     {
//         title: 'BookOne', genre: 'fiction', publish: 1981, edition: 2024
//     },
//     {
//         title: 'BookTwo', genre: 'journal', publish: 783, edition: 2024
//     },
//     {
//         title: 'BookThree', genre: 'horror', publish: 78987, edition: 2024
//     },
//     {
//         title: 'BookFour', genre: 'romance', publish: 6767, edition: 2024
//     },
//     {
//         title: 'BookFive', genre: 'fiction', publish: 1981, edition: 2024
//     },
//     {
//         title: 'BookSix', genre: 'fiction', publish: 1981, edition: 2024
//     },
//     {
//         title: 'BookSeven', genre: 'fiction', publish: 1981, edition: 2020
//     }
// ]

// let userbooks = books.filter((bk) => bk.genre ==='fiction')
//  userbooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === 'romance'})
 
// console.log(userbooks)


// const myNums = [1, 2, 3]

//    const myTotal = myNums.reduce( (acc, curr) => {
//     console.log(`acc:${acc} and crrval ${curr}`);
    
//     return acc + curr
// },0)

// console.log(myTotal);


// const shoppingCart = [
    // {
    //     itemName: 'js',
    //     price: 299,
    // },
    // {
    //     itemName: 'cpp',
    //     price: 500,
    // },
    // {
    //     itemName: 'java',   
    //     price: 600,
    // },
//     {
//         itemName: 'swift',
//         price: 700,
//     },
// ];

// shoppingCart.forEach((item) => {
//     console.log(item);
// });

// console.log(item);

// const shoppingCart = [
//     {
//         itemName: 'js',
//         price: 299,
//     },
//     {
//         itemName: 'cpp',
//         price: 500,
//     },
//     {
//         itemName: 'java',   
//         price: 600,
//     },
//     {
//         itemName: 'swift',
//         price: 700,
//     },
// ];

// const totalPrice = shoppingCart.reduce((sum, item) => sum + item.price, 0);

// console.log(totalPrice);
// });

const shoppingCart = [
    {
        itemName: 'js',
        price: 299,
    },
    {
        itemName: 'cpp',
        price: 500,
    },
    {
        itemName: 'java',   
        price: 600,
    },
    {
        itemName: 'swift',
        price: 700,
    },
];

const totalPrice = shoppingCart.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice);
