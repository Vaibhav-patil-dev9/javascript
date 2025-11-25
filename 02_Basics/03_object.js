//there is two methods to create an object
// singleton
//1->Object.create

//-> object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Vaibhav",
    "full name": "Vaibhav Patil",
    [mySym] : "mykey1", 
    age : 18,
    location : "Pune",
    email : "Vaibhav.patil@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["mon","tue"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])
// console.log(typeof mySym)

// JsUser.email = "vaibhav.patil@google.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email = "vaibhav.patil@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

