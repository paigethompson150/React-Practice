/** Let:
 * - Variable Values
 * - Reusable Variables
 *  Const:
 * - Constant values
 */


//Reg Function 
function myFnc(){
  
}
//Arrow Function
const myFnc = () => {
  
}
//No more issues with the this keyword

export default person
export const BaseData = 10;
import prs from './person.js'
//In next file
import {baseData} from './person.js'
import * as bundled from './person.js'

class Human {
  gender = 'male';
  
  printGender = () => {
    console.log(this.gender);
  }
}


class Person extends Human {
  //super keyword executes the parent class
  name = 'Max';
  gender = 'female';
  

  printMyName = () => {
    console.log(this.name);
  }
}
//Usage 
const person = new Person();
person.printMyName(); //will display Max in console
person.printGender();


//Rest and Spread
//Spread used to split up array elements OR object properties
const numbers = [1,2,3];
const newNumbers = [...numbers, 3];
//console.log(newNumbers) would be 1,2,3,4

//Rest used to merge a list of function arguments into an array
const filter = (...args) => {
  return args.filter(el => el === 1);
}
//console.log(filter(1,2,3)); would only log 1
const aPerson = {
  name: 'Max';
};

const newPerson = {
  ...person,
  age: 28;
}
//console.log(newPerson) would give [object Object] { name: 'max', age: 28'}



//Destructuring
//Allows you to pull out single elements and properties and store them in variables
[a, b] = ["Hello", "Max"];
console.log(a);
[num1, num2] = numbers;
console.log(num1, num2); // 1, 2


//Reference and Primitive Types

//Creating a reference
const secondPerson1 = person;
//Creating a Copy
const secondPerson2 = {
  ...person
};

const array = [1,2,3];
const doubleArray = array.map((num) => {
  return num * 2 //return [2,4,6]
})