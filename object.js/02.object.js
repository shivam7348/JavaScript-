// const tinderApp = new Object()  ?? ir is singleton object where we declare the new object known as singleton object 

 const tinderApp = {}

  tinderApp.id = "123abc"
  tinderApp.name = "sammy"
  tinderApp.loogedIn = false

// console.log(tinderApp);

const regularUser = {
    email : "sammy@example.com",
    fullName : {
        usersfullname : {
            firstName : "hitsh",
            lastname : "miss"
        }
    }
}

// console.log(regularUser.fullName.usersfullname.firstName + " " + regularUser.fullName.usersfullname.lastname);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "b", 4: "a"}
const obj4  = {5 : "a", 6: "d"}

// const obj3 = { obj1, obj2}
//  const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id : 1,
        email: "user@example.com"
    },
    {
        id : 1,
        email: "user@example.com"
    },
    {
        id : 1,
        email: "user@example.com"
    },
    {
        id : 1,
        email: "user@example.com"
    }
]

users[1].email
// console.log(tinderApp);

// console.log(Object.keys(tinderApp));
// console.log(Object.values(tinderApp));
// console.log(Object.entries(tinderApp));


// console.log(tinderApp.hasOwnProperty('isLoggedIn'));
//  object distructure how  we do in react

const course = {
    courseName: "JsHindi",
    price: 999,
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

//  {
//     // object is a json
//  }

//  {
//     "name": "shiva,",
//     "coursename" : "js in hind",
//     "price": "199",
//     "instructor": "hitesh"
//  }
 [{},
    {},
    {}
 ]
