
function addTwoNumber (number1,number2){
    let result = number1 + number2;
    return result;
}

let result = addTwoNumber(5,3);
// console.log("Result :",result);

function loginUserMessage (username = "User"){
    if(!username){
        console.log("please enter a username");
        return        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Vaibhav"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){ //rest operator and spread operator 
    return num1
}
// console.log(calculateCartPrice(200,400,500,200))
const user = {
    username:"vaibhav",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username:
    "dev",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,455,222,78]))