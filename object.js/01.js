// object literals

const mySym =  Symbol ("key1")




const jsUser = {
  "name" : "Shuivam",
  "fullName" : "kumar",
  "age" : 24,
   [mySym] : "mykey1",
  "city" : "Mumbai",
  "hobbies" : ["Reading", "Coding"],
  "address" : "jaipur",
  email : "jaipur@gmail.com",
  lastLogin: "2015-"

}

// console.log(jsUser["email"]);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(  jsUser[mySym]);

jsUser.email = "hiteshChat@gmail.com";
Object.freeze(jsUser)
jsUser.email = "sachin73636@gsmdil.com"
console.log(jsUser);
