//console is an object
// console.log() is a function inside the object console
/*
Built-in objects:
local-storage and json Built-in object */

/* Json all property and value contains double quotes and not supports functions */

/* Json is more universal, it can send data between computers */

/* 
Json object Javascript object to Json */
/* 
JSON.stringify(); Javascript Object -> JSON
JSON.parse();   JSON -> Javascript object */

/* local-storage : 
localStorage.setItem('message','Hello');
localStorage.getItem('message'); */

console.log("hello".length);
console.log("hello".toUpperCase());

const object1 = {
  message: "hello",
  price: 799,
};
const object2 = object1;

//object1 points to the address not hold nay value

/* destructuring shortcut  */
const object3 = {
  /* message:message */
  message,
};
/* const message = object1.message; */
const { message, price } = object1;
console.log(message);
console.log(price);
