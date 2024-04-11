//Named (normal) functions

function functionNamed(){
    console.log(" I am a named function");
}

//functionNamed();

let functionDeclarative = function (){
    console.log(" I am a declarative function");
}

//functionDeclarative();

let functionArrow = () => {
    console.log(" I am a fat arrow function");
}

//functionArrow();

//arrow function - normal version
// const sum = (x, y) => {
//     return x + y;
// }

//arrow functions - shorter version
const sum = (x, y) => x+y;

const sumMeUp = sum; //reference
//console.log(sumMeUp(2,2));

//Anonymous functions - functions that are not named

//IIFE - immediately invoked function expression
(function (){
    console.log( "i am IIFE function");
})();

(() => {
    console.log("i am IIFE with arrow");
})();

//OOP - Object Oriented Programing example in Java programming language
//IN JAVA!
// class Student{
//     String name;
//     int age;
//     double prosek;

//Constructor functions (constructors) - used to create instances of objects in Object Oriented Programming (OOP) 
//     public Student(){} // nulti constructor

//     public Student(String n){
//          this.name = n
//     }

//     public Student(String n, int a, double p){
//         this.name = n;
//         this.age = a;
//         this.prosek = p;
//     }

//     //getters
//     int getAge(){
//         return this.age
//     }

//     //setter
//     void setName(String n){
//         this.name = n;
//     }

//     methodNamed(){
//         console.log(" I am a named method");
//     }

//     methodUseAnotherMethod(){
//          return this.methodNamed + "extra text";
//     }
// }

//TEST CLASS
//Student student1 = new Student();
//student1.methodNamed()
//Student student2 = new Student("Trpe", 20, 9.0);
//Student student3 = new Student("Trajce"); // name: "Trajce", age: null, prosek: null
//String nullName = null;
//Student student4 = new Student(nullName ,25, 6.0);

//

//Function - if its on its own outside of an object (class)
//Method - if its inside an object (class)


//IN JAVASCRIPT!
const student  = {
    name: "Trajce",
    age: 30,
    prosek: 7.5
}

//console.log(student.prosek);

const calculator = {
    add: function(a, b){
        return a + b;
    }
}

//console.log(calculator.add(4,7));
console.log(calculator["add"](4,7));

// Callback function
setTimeout( function () {
    console.log("Callback executed");
}, 5000);



