
//const tinderUSer  = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Dev"
tinderUser.isLoggedIn = false;


// console.log(tinderUser)

const regularUser = {
    email:"someone@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Vaibhav",
            lastName: "Patil"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName) // optinal chaining using "?"

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)

// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const users = [
    {
        name:"vaibhav",
        email:"cbhdbj#@gmail.com"
    },
    {
        name:"cxcvcv",
        email:"cbhdbj#@gmail.com"
    },
    {
        name:"dcxcccxvv",
        email:"cbhdbj#@gmail.com"
    },
    {
        name:"vsdsadhav",
        email:"cbhdbj#@gmail.com"
    }
]
// console.log(users[0].email ,users[0].name)

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //important 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
