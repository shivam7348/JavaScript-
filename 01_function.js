function calculatiorPrice(val1, val2, ...num1) {
    return num1

}

// rest operrator console.log(calculatiorPrice(200, 400, 500)) 
//  object we are pasing and Array and how we are executing the array.

const user = {
    username: "shivam",
    price: 199

}

function handdleObject(anyObeject) {

    console.log(`Username is ${anyObeject.username}and price is ${anyObeject.price}`);
    
}
// handdleObject(user)
handdleObject({
    username: "shivam",
    price: 199
})
// pasing he aaary


const myNewArray = [200, 400, 500, 1000]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log((returnSecondValue(myNewArray)));

