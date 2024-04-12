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