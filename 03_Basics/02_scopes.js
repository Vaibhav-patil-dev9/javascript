if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "vaibhav"
    function two(){
        const website = "youtube"
        console.log(username)

    }
    // console.log(website)

    two()

}
one()

console.log(addone(5))

function addone(num){
    return num + 1 ;
}

console.log(addTwo(5)) // it is under the  conept of hoisting later we will study

const addTwo = function(num){
    return num + 2;
}


