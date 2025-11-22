const myDate = new Date();

console.log(myDate)

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getMonth()+1);// Month start from 0

console.log(myDate.toLocaleString('default',{
    month :"long",
    weekday:"long" 
})) 

// and Date have various fuctions refers MDN Documentation
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date