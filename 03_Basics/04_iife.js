// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

( function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`db connected ${name}`)
})("vaibhav");