const name = "Vaibhav"
const repoCount = 20
const gameName = new String("Vaibhav-sp-dev-com")

console.log(name + repoCount + " is the name and count");

console.log(`The name is ${name} and repo count is ${repoCount} `);
console.log(gameName[1])

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName)

console.log(gameName.indexOf("i"))

const newString = gameName.substring(0,4) // in this method you can not give negative number as para if you did then it ignore it and start from zero index
console.log(newString)

const anotherString = gameName.slice(-8,4)  // in this methos you can give negetive number as para
console.log(anotherString)

const newStringOne = "    vaibhav    "
console.log(newStringOne.trim());


const url = "https://vaibhav.com/vaibhav%20patil"
const newUrl = url.replace('%','-')
console.log(newUrl);

console.log(newUrl.includes('vaibhav'));

const words = gameName.split('-')
console.log(words[2]);


// you have to practice all the fuctions of strings to mastyer in the strings 
// and also follows the mdn documentation of strings







