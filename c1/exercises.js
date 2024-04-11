const myName = "Semos";
const check = true;
const PI = 3.14;

// PI = 5; // we cannot change primitive const types

const niza = [1, 2, 3, 4]; 
niza.push(5);
niza.push(6);
niza.pop();
// we can change complex const types like arrays using push and pop;
console.log(niza);
niza.splice(2, 1);
// prv argument - od kade (od koj element, od negoviot index) da pocne
// vtor argument - kolku da se dvizi napred
console.log(niza);

const person = {
    name: "John",
    age: 30,
    //ne mozeme da koristime arrow funkcija ako sakame da pristapime do name i age
    info: function(){
        return `Your name is ${this.name}, you are ${this.age} old.`;
    },
}

//console.log(person.info());

const student = ["Hristo", "Risto", "Oliver"];

//find
const findResult = student.find((student) => student === "Oliver");

console.log(findResult);

//map 
const mapResult = student.map((student) => {
    if (student === "Risto"){
        student = "Risto e vo pravo!"
    }
    return student;
});

console.log(mapResult);

//['H', 'r', 'i', 's', 't', 'o'] -> char array (array of characters)

//filter

const filterResult = student.filter((student) => student.charAt(0) !== "O");

console.log(filterResult);
