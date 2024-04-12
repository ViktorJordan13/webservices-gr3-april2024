const fs = require("fs");

//read file
const readData = (source) => {
    return new Promise ((success, fail) => {
        fs.readFile(`${source}.json`,"utf-8", (err, data) => {
            if(err) return fail(err);
            const out = JSON.parse(data);
            return success(out);
        });
    });
}

//write file

const writeData = (data, destination) => {
    return new Promise ((success, fail) => {
        const out = JSON.stringify(data);
        fs.writeFile(`${destination}.json`, out, (err) => {
            if(err) return fail(err);
            return success();
        })
    });
}

//Primer za REST Resource - vo JSON
//persons.json - ke gi zacuvuvame tuka
//person
// {
//     id
//     firstName
//     lastName
// }

//Task:
// Potsetete se od predhodnite dva moduli i so koristenje na ovie readData i writeData,
// probajte da napravite ednostaven CRUD vrz osnova na resursot person
// Napravete asinhroni funkcii (async-await, so try and catch);
// 1. addPerson
// 2. updatePerson
// 3. removePerson

const addPerson = async(id, firstName, lastName) => {
    try{
        const person = {
            id: id,
            firstName: firstName,
            lastName: lastName
        }
        let data = await readData("./persons");
        data.push(person);
        await writeData(data, "./persons");
    }catch(err){
        throw err;
    }
}

const updatePerson = async(id, newPersonData) => {
    try{
        let data = await readData("./persons");
        const person = data.find((person) => person.id === id);
        const newPerson = {
            // spread operator (...) raboti kako append, ne pravi overwrite, samo dodava/zamenuva
            ...person,
            //id: 1
            //firstName: "Trpe"
            //lastName: "Trpeski" 
            ...newPersonData
            //firstName: "Mile"
        };
        data = data.filter((person) => person.id != id); //bez covekot koj probuvame da go azurirame
        data.push(newPerson);
        await writeData(data, "./persons");
    }catch(err){
        throw err;
    }
}

const removePerson = async (id) => {
    try{
        const data = await readData("./persons");
        const out = data.filter((person) => person.id !== id);
        await writeData(out, "./persons")
    }catch(err){
        throw err;
    }
}

(async function (){
    //await addPerson(2, "Trajce", "Trajceski");
    // const newPersonData = {
    //     firstName: "Mile"
    // }
    // await updatePerson(1, newPersonData);
    //await removePerson(1);
})();

//REST resource car
// car{
//     id
//     manufacturer
//     model
// }

const addCar = async(id, manufacturer, model) => {
    try{
        const car = {
            id: id,
            manufacturer: manufacturer,
            model: model
        }
        let data = await readData("./cars");
        data.push(car);
        await writeData(data, "./cars");
    }catch(err){
        throw err;
    }
}

const updateCar = async(id, newCarData) => {
    try{
        let data = await readData("./cars");
        const car = data.find((car) => car.id === id);
        const newCar= {
            ...car,   
            ...newCarData  
        };
        data = data.filter((car) => car.id != id); 
        data.push(newCar);
        await writeData(data, "./cars");
    }catch(err){
        throw err;
    }
}

const removeCar = async (id) => {
    try{
        const data = await readData("./cars");
        const out = data.filter((car) => car.id !== id);
        await writeData(out, "./cars")
    }catch(err){
        throw err;
    }
}

const execute = async() => {
    //await addCar(1, "Mercedes", "350d CLE")
    //await updateCar(1, {manufacturer: "Mercedes-Benz"});
    //await removeCar(1);
};

execute();