// for of loop

// thses are array specific loop 

// [{}, {}, {}] 

const arr = [1, 2, 3, 4, 5]
 for (const num of arr) {

    // console.log(num);
    
    
 }

 const greetings = "Hello world"

 for (const word of greetings) {
    // console.log(`Each char is ${word}`);
    
 }
 // Maps

 const myMap = new Map() 
 myMap.set("IN", "India")
 myMap.set("US", "United state of America")
 myMap.set("JP", "Japan")
 myMap.set("JP", "Japan")

//  console.log(myMap);
 
for (const [key, value] of myMap) {
    // console.log(key, ':-', value);
    
}
const myObject = {
    'game1' : "cricket",
    'game2' : "football",
    'game3' : "hockey"
}
 for (const [key, value] of myObject) {
     console.log(key, ":-", value);
    
 }